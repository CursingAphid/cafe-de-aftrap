import React, { useState } from 'react';
import Header from '../components/Header';
import backgroundImage from '../assets/cafe-de-aftrap-4.png';
import { Document, Page, pdfjs } from 'react-pdf';
import { motion, AnimatePresence } from 'framer-motion';
import { useDrag } from '@use-gesture/react';

// Hide PDF text layer to prevent duplicate text display
const hideTextLayer = () => {
  const style = document.createElement('style');
  style.textContent = `
    .react-pdf__Page__textContent,
    .react-pdf__Page__annotations,
    .textLayer,
    .annotationLayer {
      display: none !important;
    }
  `;
  document.head.appendChild(style);
};

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

const MenuPage = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  
  // Debug: Log page number changes
  React.useEffect(() => {
    console.log('Page number changed to:', pageNumber);
  }, [pageNumber]);
  const [isFlipping, setIsFlipping] = useState(false);
  const [pdfWidth, setPdfWidth] = useState(600);
  const [pageAspectRatio, setPageAspectRatio] = useState(1.414);
  const [preloadedPages, setPreloadedPages] = useState(new Map());
  const [isPreloading, setIsPreloading] = useState(false);

  const calculatePdfWidth = React.useCallback(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const horizontalPadding = screenWidth < 640 ? 96 : screenWidth < 768 ? 140 : 180;
    const verticalReserved = 80 + 300 + 128 + 160;
    const maxWidth = Math.min(screenWidth - horizontalPadding, 800);
    const maxHeight = screenHeight - verticalReserved;
    const widthFromHeight = maxHeight / pageAspectRatio;
    return Math.max(Math.floor(Math.min(maxWidth, widthFromHeight)), 280);
  }, [pageAspectRatio]);

  // Hide text layers on component mount
  React.useEffect(() => {
    hideTextLayer();
    
    const updatePdfWidth = () => setPdfWidth(calculatePdfWidth());
    
    updatePdfWidth();
    window.addEventListener('resize', updatePdfWidth);
    
    return () => window.removeEventListener('resize', updatePdfWidth);
  }, [calculatePdfWidth]);

  React.useEffect(() => {
    setPreloadedPages(new Map());
    setIsPreloading(false);
  }, [pdfWidth]);

  React.useEffect(() => {
    if (numPages && !isPreloading && preloadedPages.size === 0) {
      preloadAllPages(numPages);
    }
  }, [pdfWidth, numPages]);

  // Keyboard support for navigation
  React.useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowLeft') {
        goToPrevPage();
      } else if (event.key === 'ArrowRight') {
        goToNextPage();
      } else if (event.key === 'f' || event.key === 'F') {
        openPdfInNewTab();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const onDocumentLoadSuccess = async ({ numPages }) => {
    console.log('PDF document loaded with', numPages, 'pages');
    setNumPages(numPages);

    try {
      const page = await pdfjs.getDocument('/Menukaart-aftrap.pdf').promise.then(doc => doc.getPage(1));
      const viewport = page.getViewport({ scale: 1 });
      setPageAspectRatio(viewport.height / viewport.width);
    } catch (error) {
      console.warn('Failed to read PDF page dimensions:', error);
    }
  };

  const preloadAllPages = async (totalPages) => {
    if (isPreloading) {
      console.log('Already preloading, skipping...');
      return;
    }
    
    setIsPreloading(true);
    console.log('Starting to preload', totalPages, 'pages');
    const newPreloadedPages = new Map();
    
    for (let i = 1; i <= totalPages; i++) {
      try {
        console.log(`Preloading page ${i}...`);
        // Create a canvas to render the page
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        
        // Set canvas size
        canvas.width = pdfWidth;
        canvas.height = (pdfWidth * 1.414); // A4 aspect ratio
        
        // Render page to canvas
        const page = await pdfjs.getDocument('/Menukaart-aftrap.pdf').promise.then(doc => doc.getPage(i));
        const viewport = page.getViewport({ scale: pdfWidth / page.getViewport({ scale: 1 }).width });
        
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        
        await page.render({
          canvasContext: context,
          viewport: viewport,
        }).promise;
        
        // Store the canvas
        newPreloadedPages.set(i, canvas);
        console.log(`Page ${i} preloaded successfully`);
      } catch (error) {
        console.warn(`Failed to preload page ${i}:`, error);
      }
    }
    
    console.log('Preloading complete. Total pages preloaded:', newPreloadedPages.size);
    setPreloadedPages(newPreloadedPages);
    setIsPreloading(false);
  };

  const goToPrevPage = () => {
    console.log('goToPrevPage called:', { pageNumber, numPages, isFlipping }); // Debug log
    if (pageNumber > 1) {
      console.log('Changing to previous page'); // Debug log
      setPageNumber(prev => {
        console.log('Setting page to:', prev - 1); // Debug log
        return prev - 1;
      });
    } else {
      console.log('Cannot go to previous page:', { pageNumber, numPages }); // Debug log
    }
  };

  const goToNextPage = () => {
    console.log('goToNextPage called:', { pageNumber, numPages, isFlipping }); // Debug log
    if (pageNumber < numPages) {
      console.log('Changing to next page'); // Debug log
      setPageNumber(prev => {
        console.log('Setting page to:', prev + 1); // Debug log
        return prev + 1;
      });
    } else {
      console.log('Cannot go to next page:', { pageNumber, numPages }); // Debug log
    }
  };

  // Swipe gesture handling
  const bind = useDrag(({ direction: [dx], distance, velocity, event }) => {
    console.log('Swipe detected:', { dx, distance, velocity, pageNumber, numPages }); // Debug log
    
    // Only trigger on significant swipe
    if (distance > 30 && velocity > 0.1) {
      if (dx > 0) {
        console.log('Going to previous page'); // Debug log
        goToPrevPage(); // Swipe right = previous page
      } else {
        console.log('Going to next page'); // Debug log
        goToNextPage(); // Swipe left = next page
      }
    } else {
      console.log('Swipe not significant enough:', { distance, velocity });
    }
  }, {
    axis: 'x', // Only horizontal swipes
    filterTaps: true, // Allow taps to pass through
    rubberband: true, // Add rubber band effect
    preventDefault: false, // Don't prevent default behavior
    threshold: 10 // Minimum distance to start detecting
  });

  const openPdfInSameTab = () => {
    window.location.href = '/Menukaart-aftrap.pdf';
  };

  const openPdfInNewTab = () => {
    window.open('/Menukaart-aftrap.pdf', '_blank');
  };

  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      
      {/* Menu Title Section */}
      <section 
        className="relative w-full flex items-center justify-center overflow-hidden"
        style={{
          height: '300px',
          paddingTop: '80px',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Blurred Background Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            background: 'rgba(0, 0, 0, 0.3)'
          }}
        ></div>
        
        {/* Menu Title */}
        <div className="relative z-10 text-center">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-tight fade-in-hero-title">
            Menu
          </h1>
        </div>
      </section>

          {/* Menu Content Section */}
          <section className="w-full py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Mobile Menu Button */}
              <div className="flex justify-center sm:hidden">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Bekijk ons menu
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Klik op de knop hieronder om onze menukaart te bekijken
                  </p>
                  <button
                    onClick={openPdfInSameTab}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-xl font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    📄 Open Menu
                  </button>
                </div>
              </div>

              {/* Desktop PDF Book Viewer */}
              <div className="hidden sm:flex flex-col items-center">
                <motion.div 
                  {...bind()}
                  className="bg-white rounded-lg shadow-lg p-4 sm:p-8 cursor-grab active:cursor-grabbing relative select-none w-full max-w-4xl mx-auto"
                  style={{ touchAction: 'none' }}
                >
                  <div className="relative flex justify-center items-center">
                    {/* Left Arrow */}
                    <button
                      onClick={goToPrevPage}
                      disabled={pageNumber <= 1 || isFlipping}
                      className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors duration-200 z-10"
                    >
                      ←
                    </button>
                    
                    {/* Right Arrow */}
                    <button
                      onClick={goToNextPage}
                      disabled={pageNumber >= numPages || isFlipping}
                      className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors duration-200 z-10"
                    >
                      →
                    </button>
                    
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={pageNumber}
                        initial={{ opacity: 0, rotateY: 90 }}
                        animate={{ opacity: 1, rotateY: 0 }}
                        exit={{ opacity: 0, rotateY: -90 }}
                        transition={{ duration: 0.3 }}
                        className="flex justify-center px-12"
                      >
                        {preloadedPages.has(pageNumber) ? (
                          <div className="shadow-lg rounded">
                            <img 
                              src={preloadedPages.get(pageNumber).toDataURL()} 
                              alt={`Menu page ${pageNumber}`}
                              className="max-w-full h-auto block"
                              style={{ width: pdfWidth }}
                            />
                          </div>
                        ) : (
                          <Document
                            file="/Menukaart-aftrap.pdf"
                            onLoadSuccess={onDocumentLoadSuccess}
                            className="flex justify-center"
                          >
                            <Page
                              pageNumber={pageNumber}
                              width={pdfWidth}
                              className="shadow-lg rounded"
                              renderTextLayer={false}
                              renderAnnotationLayer={false}
                            />
                          </Document>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Controls below the PDF */}
                <div className="mt-6 text-center">
                  <div className="mb-4">
                    <span className="text-lg font-semibold text-gray-700">
                      Pagina {pageNumber} van {numPages}
                    </span>
                  </div>
                  <button
                    onClick={openPdfInNewTab}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
                  >
                    📄 Open PDF in nieuw tabblad
                  </button>
                </div>
              </div>
            </div>
          </section>
    </div>
  );
};

export default MenuPage;

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
  const [isFlipping, setIsFlipping] = useState(false);
  const [pdfWidth, setPdfWidth] = useState(600);

  // Hide text layers on component mount
  React.useEffect(() => {
    hideTextLayer();
    
    // Set PDF width based on screen size
    const updatePdfWidth = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) { // Mobile
        setPdfWidth(Math.min(screenWidth - 80, 400));
      } else if (screenWidth < 768) { // Small tablet
        setPdfWidth(Math.min(screenWidth - 120, 500));
      } else { // Desktop
        setPdfWidth(600);
      }
    };
    
    updatePdfWidth();
    window.addEventListener('resize', updatePdfWidth);
    
    return () => window.removeEventListener('resize', updatePdfWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () => {
    if (pageNumber > 1 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setPageNumber(prev => prev - 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const goToNextPage = () => {
    if (pageNumber < numPages && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setPageNumber(prev => prev + 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  // Swipe gesture handling
  const bind = useDrag(({ direction: [dx], distance, velocity, event }) => {
    // Prevent default to avoid conflicts
    event.preventDefault();
    
    // Only trigger on significant swipe
    if (distance > 100 && velocity > 0.3) {
      if (dx > 0) {
        goToPrevPage(); // Swipe right = previous page
      } else {
        goToNextPage(); // Swipe left = next page
      }
    }
  }, {
    axis: 'x', // Only horizontal swipes
    filterTaps: true, // Allow taps to pass through
    rubberband: true // Add rubber band effect
  });

  return (
    <div className="w-full">
      <Header />
      
      {/* Menu Title Section */}
      <section 
        className="relative w-full flex items-center justify-center overflow-hidden"
        style={{
          height: '400px',
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
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-tight">
            Menu
          </h1>
        </div>
      </section>

      {/* Menu Content Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* PDF Book Viewer */}
          <div className="flex justify-center">
            <motion.div 
              {...bind()}
              className="bg-white rounded-lg shadow-lg p-4 sm:p-8 cursor-grab active:cursor-grabbing relative select-none w-full max-w-4xl mx-auto"
              style={{ 
                minHeight: '400px',
                overflow: 'hidden',
                touchAction: 'pan-y' // Allow vertical scrolling but handle horizontal gestures
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* PDF Content */}
              <div className="overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={pageNumber}
                    initial={{ opacity: 0, rotateY: 90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    exit={{ opacity: 0, rotateY: -90 }}
                    transition={{ duration: 0.3 }}
                    className="flex justify-center"
                  >
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
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Navigation Buttons */}
              <div className="mt-6 flex justify-center space-x-4">
                <button
                  onClick={goToPrevPage}
                  disabled={pageNumber <= 1 || isFlipping}
                  className="bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  ←
                </button>
                
                <span className="text-lg font-semibold text-gray-700 flex items-center">
                  Pagina {pageNumber} van {numPages}
                </span>
                
                <button
                  onClick={goToNextPage}
                  disabled={pageNumber >= numPages || isFlipping}
                  className="bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  →
                </button>
              </div>
              
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;

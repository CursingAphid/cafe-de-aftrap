import React, { useEffect } from 'react';

const ReviewsSection = () => {
  useEffect(() => {
    // Only load Review Pixel script in production or when not on localhost
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.log("Skipping Review Pixel in development environment");
      return;
    }

    // Load Review Pixel script
    const loadReviewPixel = () => {
      if (window.EMRPixel) {
        console.info("EMR: Pixel already loaded");
        return;
      }
      
      const script = document.createElement("script");
      script.defer = true;
      script.src = "https://cdn2.revw.me/js/pixel.js?t=" + 864e5 * Math.ceil(new Date() / 864e5);
      
      const firstScript = document.getElementsByTagName("script")[0];
      firstScript.charset = "utf-8";
      firstScript.parentNode.insertBefore(script, firstScript);
      
      script.onload = function() {
        try {
          EMRPixel.init("app.review-us.nl", 108);
        } catch (error) {
          console.error("Error initializing EMRPixel:", error);
        }
      };
      
      script.onerror = function() {
        console.error("Failed to load Review Pixel script");
      };
    };

    if (document.readyState === "interactive" || document.readyState === "complete") {
      loadReviewPixel();
    } else {
      document.addEventListener("DOMContentLoaded", loadReviewPixel);
    }
  }, []);

  return (
    <section className="w-full py-16 text-white" style={{ backgroundColor: '#4a505c' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Wat klanten over ons schrijven:
          </h2>
        </div>
        
        {/* Reviews Container */}
        <div>
          {window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' ? (
            <div className="bg-white rounded-lg p-8 text-center text-gray-600">
              <p className="text-lg mb-4">Reviews will be displayed here in production</p>
              <p className="text-sm">Review Pixel widget disabled in development environment</p>
            </div>
          ) : (
            <emr-simple-slider widget-id="451f7229-67ee-4290-9571-2d3e8ed88b8d"></emr-simple-slider>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

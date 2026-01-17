import React from "react";

const QuoteSection = ({ founder, quote }) => {
  return (
    <div className="quote-section primary-bg-color position-relative">
      <h3 className="font-playfair-italic text-center pb-2">{quote}</h3>
      {founder && (
        <div className="mt-4">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ gap: "1em" }}
          >
            <img src="/about-us/aparnaProfile.jpg"></img>
            <p className="text-light mb-0">APARNA GUPTA</p>
          </div>
        </div>
      )}
      <div className="position-absolute" style={{ bottom: "5%", right: "5%" }}>
        <img src="/butterfly2.png" className="butterfly-2"></img>
      </div>
    </div>
  );
};

export default QuoteSection;

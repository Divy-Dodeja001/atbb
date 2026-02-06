import React from "react";

const QuoteSection = ({ founder, quote }) => {
  return (
    <div className="quote-section primary-bg-color position-relative d-flex justify-content-center flex-column align-items-center">
      <h3 className="font-playfair-italic text-center pb-2 col-md-10" style={{lineHeight:"1.8em"}}>{quote}</h3>
      {/* {founder && (
        <div className="mt-4">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ gap: "1em" }}
          >
            <img src="/about-us/aparnaProfile.jpg" className="rounded-5"></img>
            <p className="text-light mb-0">APARNA GUPTA</p>
          </div>
        </div>
      )} */}
      <div className="position-absolute" style={{ bottom: "5%", right: "5%" }}>
        <img src="/butterfly2.png" className="butterfly-2"></img>
      </div>
    </div>
  );
};

export default QuoteSection;

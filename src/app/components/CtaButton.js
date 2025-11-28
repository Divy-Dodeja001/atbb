import Link from "next/link";
import React from "react";

const CtaButton = ({ cta, link = "/" }) => {
  return (
    <Link href={link} className="cta-btn text-decoration-none">
      {cta}
    </Link>
  );
};

export default CtaButton;

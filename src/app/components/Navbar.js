"use client";
import { usePathname } from "next/navigation"; // Use usePathname from next/navigation
import Link from "next/link";
import "../css/navbar.css";

export default function Navbar() {
  const pathname = usePathname(); // Get the current path using usePathname

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/careers", label: "Careers" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <div
      className="header-wrapper position-sticky"
      style={{ zIndex: "100", top: "0%" }}
    >
      <div className="navbar navbar-expand-lg glass-header">
        <div className="px-lg-5 px-3 d-flex justify-content-between justify-content-lg-center flex-lg-column w-100">
          {/* Logo */}
          <Link
            href="/"
            className="navbar-brand py-2 d-flex justify-content-md-center mb-md-3"
          >
            <img src={"/logo.png"} width={90} alt="Logo" priority />
          </Link>

          {/* Hamburger for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop Menu */}
          <div className="collapse navbar-collapse d-none d-lg-flex justify-content-end justify-content-md-center mb-md-2">
            <ul className="navbar-nav gap-4">
              {navLinks.map(({ href, label }) => (
                <li className="nav-item font-playfair fw-semibold" key={label}>
                  <Link
                    href={href}
                    className={`nav-link text-uppercase font-playfair fw-regular ${
                      pathname === href ? "active-link" : ""
                    }`} // Conditionally add active class
                    style={{ fontSize: "14px", letterSpacing: "1px" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Offcanvas Drawer */}
      <div
        className="offcanvas offcanvas-end px-4"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
      >
        <div className="offcanvas-header px-lg-5 px-3">
          <Link href="/" className="navbar-brand py-2">
            <img src={"/logo.png"} alt="Logo" className="img-fluid" priority />
          </Link>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav gap-3">
            {navLinks.map(({ href, label }) => (
              <li className="nav-item" key={label}>
                <Link
                  href={href}
                  className={`nav-link text-uppercase font-playfair fw-regular ${
                    pathname === href ? "active-link" : ""
                  }`} // Conditionally add active class
                  style={{ fontSize: "14px", letterSpacing: "1px" }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

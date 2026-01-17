"use client";

import { useEffect, useState } from "react";

export default function ContactFormModal({ buttonText, jobTitle, btnClass }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      phoneNumber,
      email,
      message,
      jobTitle: jobTitle ? jobTitle : "",
    };

    try {
      const response = await fetch("/api/contactUs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert("Your message has been sent!");

        // Reset form
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setEmail("");
        setMessage("");

        // Close modal
        const modalEl = document.getElementById("contactModal");
        const modalInstance =
          window.bootstrap.Modal.getInstance(modalEl) ||
          new window.bootstrap.Modal(modalEl);

        modalInstance.hide();

        // Force cleanup (fix stuck backdrop)
        setTimeout(() => {
          document.body.classList.remove("modal-open");
          const backdrops = document.querySelectorAll(".modal-backdrop");
          backdrops.forEach((bd) => bd.remove());
        }, 300);
      } else {
        alert("There was an error. Please try again.");
      }
    } catch (error) {
      alert(`${error.message}. Please try again.`);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        type="button"
        className={`${btnClass}`}
        data-bs-toggle="modal"
        data-bs-target="#contactModal"
      >
        {buttonText}
      </button>

      {/* Bootstrap Modal */}
      <div
        className="modal fade"
        id="contactModal"
        tabIndex="-1"
        aria-labelledby="contactModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content w-100">
            <div className="modal-header w-100 border border-0">
              <h4
                className="modal-title text-center w-100"
                id="contactModalLabel"
              >
                Fill Details
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body pt-0">
              {/* FORM EXACT AS PROVIDED */}
              <form onSubmit={handleSubmit}>
                <div className="d-flex mb-2" style={{ gap: "0.7em" }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => {
                      const phoneNumber = e.target.value.slice(0, 12);
                      setPhoneNumber(phoneNumber);

                      if (/^[6-9]\d{9}$/.test(phoneNumber)) {
                        e.target.setCustomValidity("");
                      } else {
                        e.target.setCustomValidity(
                          "Enter a valid phone number (10 digits, starting with 6, 7, 8, or 9)"
                        );
                      }
                    }}
                    onInvalid={(e) =>
                      e.target.setCustomValidity(
                        "Enter a valid phone number (10 digits, starting with 6, 7, 8, or 9)"
                      )
                    }
                    required
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-2">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="my-4 pt-2">
                  <button
                    type="submit"
                    className="cta-btn text-decoration-none w-100"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

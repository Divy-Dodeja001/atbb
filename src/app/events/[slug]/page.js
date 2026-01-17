
import Navbar from "../../components/Navbar";
import EventGallery from "../../components/EventGallery";
import React from "react";
import Footer from "../../components/Footer";

export default async function Page ({params}) {
     const { slug } = await params;
  return (
    <div>
      <Navbar />
      <EventGallery eventId={slug} />
      <Footer />
    </div>
  );
};

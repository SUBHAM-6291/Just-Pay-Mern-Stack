import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-6 mt-12">
      <div className="container mx-auto">
        {/* Branding & Copyright */}
        <p className="text-lg font-semibold">JUST PAY - Secure & Simple Payments</p>
        <p className="text-sm opacity-70">© {new Date().getFullYear()} Just Pay. All rights reserved.</p>

        {/* Video Section */}
        <div className="mt-6 mb-12 gap-6">
          <h2 className="text-xl font-semibold text-center mb-4">Watch Our Introduction Video</h2>
          <div className="relative w-full max-w-lg mx-auto">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/1UlDQrPcHm0?si=wLTSB4_DdlKaikq-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

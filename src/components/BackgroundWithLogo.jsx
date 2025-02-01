import React from "react";

export default function BackgroundWithLogo({ backgroundImage, logoImage }) {
  return (

    <div
      className="relative w-full h-screen bg-cover bg-center dark:bg-gray-800 rounded-lg"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        marginBottom: "30px",
      }}
    >
      {/* Logo */}
      <div className="absolute top-5 right-7">
        <img
          src={logoImage}
          alt="Logo"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64"
        />
      </div>
    </div>
  );
}

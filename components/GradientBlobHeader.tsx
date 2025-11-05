"use client";
import React from "react";

export default function GradientBlobHeader({ children }:any) {
  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      {/* Gradient blobs */}
      <div className="absolute inset-0 flex justify-center items-start">
        <div
          className="absolute rounded-full opacity-80 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #D900FF 0%, #D900FF 20%, transparent 100%)",
            width: "850px",
            height: "250px",
            top: "-150px",
            left: "20%",
            transform: "translate(-45%, 0)",
          }}
        />
        <div
          className="absolute rounded-full opacity-80 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #FF0E00 0%, #FF0E00 30%, transparent 100%)",
            width: "700px",
            height: "330px",
            top: "-180px",
            left: "50%",
            transform: "translate(-50%, 0)",
          }}
        />
        <div
          className="absolute rounded-full opacity-80 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #FF009C 0%, #FF009C 30%, transparent 100%)",
            width: "680px",
            height: "280px",
            top: "-140px",
            left: "80%",
            transform: "translate(-50%, 0)",
          }}
        />
      </div>

      <div className="relative z-10 p-8">{children}</div>
    </div>
  );
}

"use client";
import React, { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, []);
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong. Please try again.</h1>
      <button className="hover:text-amber-500 " onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}

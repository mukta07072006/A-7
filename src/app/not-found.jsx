"use client"
import Link from 'next/link';
import Lottie from "lottie-react";
import errorAnimation from "@/assets/error-404.json"; 


export default function NotFound() {
  return (
    <main className="flex min-h-fit flex-col items-center justify-center bg-white p-6 text-center">

      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
        <Lottie 
          animationData={errorAnimation} 
          loop={true} 
          autoplay={true} 
        />
      </div>
    </main>
  );
}
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";


export default function Home() {
  // State to keep track of the counter value
  const [counter, setCounter] = useState(0);

  // Effect to set up the interval
  useEffect(() => {
    // Create an interval that updates the counter every second
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative spinning"
          src="/ey-even-vinge.png"
          alt="Next.js Logo"
          width={280}
          height={67}
          priority
        />
      </div>
      {/* Counter display just below the image */}
      <div className="mt-4 text-2xl font-semibold">
        {counter}
      </div>
    </main>
  );
}

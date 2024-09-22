"use client";

import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

const Button = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="inline-flex mt-10 items-center justify-center bg-black px-4 py-2 text-white font-bold rounded-lg md:w-fit gap-x-1 w-full   trasition-all hover:bg-black/80 hover:scale-110 active:scale-105 group   disabled:scale-110 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader2 className="h-4 mr-2 w-4 animate-spin" />
          Loading...
        </>
      ) : (
        <>
          Submit
          <FaPaperPlane className=" transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
};

export default Button;

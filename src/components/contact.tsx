"use client";

import { useSectionInView } from "@/hooks";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/send-email";

const animationVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <motion.section
      variants={animationVariant}
      initial="initial"
      whileInView="animate"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 min-h-screen w-[min(100%,38rem)]"
      id="contact"
    >
      <SectionHeading title="Contact Me" />

      <p className="text-gray-700 text-center">
        Please contact me directly at{" "}
        <a href="mailto:sheriffsalman00@gmail.com">sheriffsalman00@gmail.com</a>
      </p>
      <form
        action={async (formData) => {
          await sendEmail(formData);
        }}
        className="mt-10 flex flex-col space-y-5"
      >
        <input
          name="email"
          type="email"
          required
          placeholder="Enter Email"
          className="p-2 focus:outline-none focus:ring-1 focus:ring-black rounded-lg border border-black/10 "
          maxLength={500}
        />
        <textarea
          name="message"
          required
          className="h-32 rounded-lg border focus:ring-1 focus:ring-black focus:outline-none p-2 border-black/10 mt-10"
          placeholder="Enter Message"
          maxLength={1000}
        />
        <div>
          <button
            type="submit"
            className="inline-flex mt-10 items-center justify-center bg-black px-4 py-2 text-white font-bold rounded-lg md:w-fit gap-x-1 w-full   trasition-all hover:bg-black/80 hover:scale-110 active:scale-105 group dark:bg-white dark:text-black"
          >
            Submit
            <FaPaperPlane className=" transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
      </form>
    </motion.section>
  );
};

export default Contact;

"use client";

import { sendEmail } from "@/actions/send-email";
import { useSectionInView } from "@/hooks";
import { motion } from "framer-motion";
import Button from "./form-button";
import SectionHeading from "./section-heading";
import { toast } from "react-hot-toast";

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
      className="scroll-mt-28 mb-28 sm:mb-40 min-h-screen w-[min(100%,38rem)] dark:text-gray-50"
      id="contact"
    >
      <SectionHeading title="Contact Me" />

      <p className="text-gray-700 text-center">
        Please contact me directly at{" "}
        <a href="mailto:sheriffsalman00@gmail.com">sheriffsalman00@gmail.com</a>
      </p>
      <form
        action={async (formData) => {
          // @ts-ignore
          const { data, error } = await sendEmail(formData);

          if (error) {
            return toast.error("Something went Wrong 😢");
          }

          return toast.success("Email send successfully ☺️🙌");
        }}
        className="mt-10 flex flex-col space-y-5"
      >
        <input
          name="email"
          type="email"
          required
          placeholder="Enter Email"
          className="p-2 focus:outline-none focus:ring-1 focus:ring-black rounded-lg border border-black/10 bg-transparent dark:border dark:border-white/10"
          maxLength={500}
        />
        <textarea
          name="message"
          required
          className="h-32 rounded-lg border focus:ring-1 focus:ring-black focus:outline-none p-2 border-black/10 mt-10 bg-transparent dark:border dark:border-white/10"
          placeholder="Enter Message"
          maxLength={1000}
        />
        <div>
          <Button />
        </div>
      </form>
    </motion.section>
  );
};

export default Contact;

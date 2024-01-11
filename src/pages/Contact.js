import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [isFormValid, setIsFormValid] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    const name = form.current.from_name.value.trim();
    const email = form.current.from_email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      setIsFormValid(false);
      setIsSuccess(false);
      return;
    }

    setIsFormValid(true);

    // Proceed with sending the email
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccess(true);
          // Reset the form fields
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setIsSuccess(false);
        }
      );
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="text-black flex flex-col gap-2 w-60"
      >
        <label className="text-white">Name</label>
        <input
          className=" bg-black bg-opacity-40 border-2 border-cyan-600 text-white rounded-md p-1 focus:outline-none"
          type="text"
          name="from_name"
        />
        <label className="text-white">Email</label>
        <input
          className=" bg-black bg-opacity-40 border-2 border-cyan-600 text-white rounded-md p-1 focus:outline-none"
          type="email"
          name="from_email"
        />
        <label className="text-white">Message</label>
        <textarea
          className=" bg-black bg-opacity-40 border-2 border-cyan-600 text-white rounded-md p-1 focus:outline-none"
          name="message"
        />

        {!isFormValid && (
          <p className=" text-red-700">All fields are required.</p>
        )}

        {isSuccess && <p className=" text-white">Message sent successfully!</p>}

        <input
          className=" text-white cursor-pointer md:hover:bg-black bg-opacity-40 md:hover:bg-opacity-30 md:hover:text-cyan-600 border-2 border-cyan-600 p-1 m-2 rounded-3xl "
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
}

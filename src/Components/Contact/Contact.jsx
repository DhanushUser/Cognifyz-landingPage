import React from 'react';
import './contact.css';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ setIsContactVisible }) => {
  const notify = () => {
    toast.success('Form submitted!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleClose = () => {
    setIsContactVisible(false);
  };

  return (
    <div className="real-contact" id="contact">
      <div className="container rounded-md bg-pink-100 w-[350px] h-auto pb-5 fixed top-[1%] left-[37%] mt-[15%]">
        <div className="title relative text-center my-5">
          <h2 className="text-xl font-[550]">CONTACT</h2>
          <img
            onClick={handleClose}
            className="absolute cursor-pointer w-[17px] top-0 left-[90%]"
            width="48"
            height="48"
            src="https://img.icons8.com/emoji/48/cross-mark-emoji.png"
            alt="cross-mark-emoji"
          />
        </div>
        <form onSubmit={(e) => { e.preventDefault(); notify(); }} className="contact-details flex flex-col mx-3">
          <input
            className="mb-3 pl-2 text-[14px]"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <input
            className="mb-3 pl-2 text-[14px]"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <textarea
            className="pl-2 pt-1 mb-4 text-[12px]"
            name="message"
            placeholder="Enter your message here"
            cols="30"
            rows="10"
            required
          ></textarea>
          <button type="submit" className="px-2 rounded bg-pink-500 text-white">
            Submit
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Contact;

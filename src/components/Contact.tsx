import React, { useState } from "react";

const Contact = () => {
  const [selectedRadio, setSelectedRadio] = useState<string | null>(null);

  const toggleRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = event.target;
    setSelectedRadio(selectedRadio === id ? null : id);
  };

  return (
    <div className="pb-16 flex flex-wrap justify-between items-center">
      <form action="" className="max-w-[556px]">
        <div className="flex gap-[35px] mb-[15px]">
          <div className="flex gap-[14px]">
            <input
              type="radio"
              name="option"
              id="hi"
              className="w-7 h-7"
              checked={selectedRadio === "hi"}
              onChange={toggleRadio}
            />
            <label htmlFor="hi" className="text-lg">
              Say Hi
            </label>
          </div>

          <div className="flex gap-[14px]">
            <input
              type="radio"
              name="option"
              id="quote"
              className="w-7 h-7"
              checked={selectedRadio === "quote"}
              onChange={toggleRadio}
            />
            <label htmlFor="quote" className="text-lg">
              Get a Quote
            </label>
          </div>
        </div>
        <div className="flex flex-col mt-[25px]">
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="w-full border border-[#000] rounded-little px-[30px] py-[18px]"
          />
        </div>
        <div className="flex flex-col mt-[25px]">
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full border border-[#000] rounded-little px-[30px] py-[18px]"
          />
        </div>
        <div className="flex flex-col mt-[25px]">
          <label htmlFor="message">Message</label>

          <textarea
            id="message"
            name="message"
            rows={4}
            cols={50}
            placeholder="Message"
            className="w-full border border-[#000] rounded-little px-[30px] py-[18px] resize-none"
          />
        </div>

        <button
          type="submit"
          className="bg-p-black text-p-white rounded-little px-[35px] py-5 w-full mt-[25px]">
          Send Message
        </button>
      </form>

      <div className="w-[400px] h-[648px] overflow-hidden">
        <img
          src="/images/Contact-block.png"
          alt="contact"
          decoding="async"
          loading="lazy"
          className="w-[691.57px] h-[648px] object-cover object-left"
        />
      </div>
    </div>
  );
};

export default Contact;

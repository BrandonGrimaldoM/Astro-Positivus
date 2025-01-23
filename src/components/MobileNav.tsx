import { useState } from "react";

export default function MobileNav() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-full h-[68px] flex justify-between items-center px-5 lg:hidden">
        <img src="/images/Logo.png" alt="logo nav" />
        <div onClick={handleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-10">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>
        </div>
      </nav>
      <div
        className={` bg-p-white absolute top-0 left-0 z-50 ${
          isOpen ? "block" : "hidden"
        }`}>

        <div className="w-full flex justify-end items-end px-5 pt-10 z-50 relative"  onClick={handleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-10">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="w-screen h-screen grid place-items-center place-content-center translate-y-[-20%]">
          <ul className="flex flex-col gap-10 items-center">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Use Cases</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Request a quote</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="p-4 bg-gray-800 md:p-8 lg:p-10 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl flex justify-between items-center flex-row-reverse">
          <Link
            href="#"
            className="flex justify-center items-center text-2xl font-semibold text-gray-400 dark:text-white"
          >
            Syntax Scrolls
          </Link>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="#" className="hover:underline">
              Syntax Scrolls
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

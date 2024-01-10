import React from "react";

const LayoutPage = ({ currentPage, pages }) => {
  return (
    <>
      {pages.map((page, index) => (
        <div
          key={index}
          className={`sm:w-1/2 w-full h-full absolute ${
            currentPage === index + 1
              ? "right-0 hidden sm:block"
              : currentPage === index + 2
              ? "left-0 "
              : "hidden"
          }`}
        >
          {page}
        </div>
      ))}
    </>
  );
};

export default LayoutPage;

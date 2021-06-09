import React from "react";
// import styled from "@emotion/styled";
// import tw from "twin.macro";

const Button = ({
  className,
  href,
  target,
  rel,
  onClick,
  as,
  type,
  darkmode,
  text,
}) => (
  <a
    className={`group relative font-body font-semibold inline-flex items-center justify-center text-center no-underline focus:outline-none transition-colors duration-300 ease-linear ${
      darkmode ? `text-white` : `text-primary-400 hover:text-primary-600`
    } ${className}`}
    href={href}
    target={target}
    rel={rel}
    onClick={onClick}
    as={as}
    type={type}
    darkmode={darkmode}
  >
    {text}
    <i className="fal fa-plus ml-3 transform group-hover:rotate-180 transition-transform duration-300 ease-linear"></i>
  </a>
);

export default Button;

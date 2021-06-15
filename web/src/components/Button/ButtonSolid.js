import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

const StyledButton = styled.a`
  ${({ darkmode }) => darkmode && tw`bg-primary-400`};
`;

const Button = ({
  className,
  href,
  target,
  rel,
  modal,
  onClick,
  as,
  type,
  darkmode,
  text,
}) => (
  <StyledButton
    className={`group relative font-display tracking-wider leading-5 text-primary-400 hover:text-primary-50 bg-primary-50 hover:bg-primary-400 px-8 py-4 min-w-[160px] h-[50px] inline-flex items-center justify-center text-center no-underline focus:outline-none transition-colors duration-300 ease-in-out ${
      className || ""
    }`}
    href={href}
    target={target}
    rel={rel}
    data-modal-open={modal}
    onClick={onClick}
    as={as}
    type={type}
    darkmode={darkmode}
  >
    <div className="relative leading-[13px]">{text}</div>
  </StyledButton>
);

export default Button;

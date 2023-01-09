import React from "react";
import MicroModal from "micromodal";
import styled from "@emotion/styled";
import tw from "twin.macro";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

import Contact from "../Form/Contact";

const StyledModal = styled.div`
  .modal {
    &.is-open {
      ${tw`block`}
    }
    &[aria-hidden="false"] {
      .overlay {
        animation: mmfadeIn 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="false"] {
      .content-wrapper {
        animation: mmslideIn 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="true"] {
      .overlay {
        animation: mmfadeOut 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="true"] {
      .content-wrapper {
        animation: mmslideOut 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    .content-wrapper,
    .overlay {
      will-change: transform;
    }
  }
  @keyframes mmfadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes mmfadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes mmslideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes mmslideOut {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }
`;

// const StyledTabs = styled.div`
//   .react-tabs__tab-list {
//     ${tw`grid grid-cols-2 gap-x-2 mb-6 md:mb-10 border-none`}
//   }
//   .react-tabs__tab {
//     ${tw`text-sm font-semibold py-2 px-4 bg-gray-50 rounded flex items-center justify-center w-full border-none transition-colors duration-300 ease-linear`}
//   }
//   .react-tabs__tab--selected {
//     ${tw`text-white bg-primary-400`}
//   }
// `;

const Modal = () => {
  if (typeof window !== "undefined") {
    MicroModal.init({
      openTrigger: "data-modal-open",
      closeTrigger: "data-modal-close",
      disableFocus: true,
      disableScroll: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,
    });
  }

  return (
    <StyledModal>
      <div
        className="modal relative hidden z-50"
        id="modal-contact"
        aria-hidden="false"
      >
        <div
          className="overlay fixed flex items-center justify-center top-0 right-0 left-0 bottom-0 bg-black bg-opacity-20 outline-none"
          tabIndex="-1"
          data-modal-close
        >
          <div
            className="content-wrapper bg-white w-full h-screen overflow-auto max-w-[720px] ml-auto"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex justify-end items-center py-12 md:pt-5 pb-4 px-6">
              <i
                className="close fal fa-times text-3xl text-gray-600 hover:text-primary-400 cursor-pointer transition-all duration-300 ease-linear"
                data-modal-close
              ></i>
            </div>

            <div className="px-6 md:px-20 pb-24">
              <header className="mb-3 flex justify-between items-center">
                <p className="heading-three mb-0">Contact Us</p>
                <a href="tel:619-430-3981" className="font-medium no-underline">
                  <i className="fas fa-phone-alt mr-1"></i> (619) 430-3981
                </a>
              </header>
              <p className="text-sm">
                Whether you’re looking to book an event to remember or you’re
                interested in learning more about our menus and options, we’d
                love to hear from you.
              </p>

              <Contact />
            </div>
          </div>
        </div>
      </div>
    </StyledModal>
  );
};
export default Modal;

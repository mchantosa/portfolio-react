import React, { useEffect, useRef } from "react";

export default function ProjectModal(props: {
  projectCarousel: React.ReactNode;
  ProjectDescription: React.ReactNode;
  setModal: Function;
  setHovering: Function;
  children?: React.ReactNode;
}) {
  const {
    projectCarousel,
    ProjectDescription,
    setModal,
    setHovering,
    children,
  } = props;

  useEffect(() => {
    const handleKeyUp = (e: any) => {
      if (e.key === "Escape") {
        setModal(false);
        setHovering(false);
      }
      if (e.key === "Enter") {
        setModal(false);
        setHovering(false);
      }
    };
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div
      onKeyUp={(e) => {
        if (e.key === "Escape") {
          setModal(false);
          setHovering(false);
        }
      }}
      className="relative z-[100]"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-[99] w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="xs:w-full sm:w-10/12 md:w-7/12 lg:w-5/12 relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:p-6">
            <div>{projectCarousel}</div>
            <div>{ProjectDescription}</div>
            <div>{children}</div>
            <div className="mt-5 sm:mt-6">
              <button
                onClick={() => {
                  setModal(false);
                  setHovering(false);
                }}
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-anchorBlue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-anchorBlueHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

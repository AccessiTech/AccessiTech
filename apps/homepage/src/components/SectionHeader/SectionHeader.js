import React from "react";
import PropTypes from "prop-types";
import { FaLink } from "@accessitech/react-icons/fa";
import "./SectionHeader.scss";

const CLICK_TO_COPY = "click to copy link";
const COPY_SUCCESS_MESSAGE = "Copied!";
const COPY_FAIL_MESSAGE = "Unable to copy to clipboard";

/** SectionHeader component
 * @param {string} title - The title of the section
 * @param {string} id - The id of the section
 * @param {string} use - The type of header to use (default: h3)
 * @param {string} linkTitle - The title of the link button (default: "click to copy link")
 * @param {string} successText - The text to display when the link is copied (default: "Copied!")
 * @returns {JSX} - The section header
 * @description - This is a section header component
 */

export const SectionHeader = ({
  title,
  id,
  use,
  linkTitle,
  successText,
  failText,
}) => {
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [showFail, setShowFail] = React.useState(false);
  const onSuccess = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 2500);
  };
  const onFail = () => {
    setShowFail(true);
    setTimeout(() => {
      setShowFail(false);
    }, 2500);
  };
  let header;
  switch (use) {
    case "h1":
      header = <h1 id={id}>{title}</h1>;
      break;
    case "h2":
      header = <h2 id={id}>{title}</h2>;
      break;
    default:
    case "h3":
      header = <h3 id={id}>{title}</h3>;
      break;
    case "h4":
      header = <h4 id={id}>{title}</h4>;
      break;
    case "h5":
      header = <h5 id={id}>{title}</h5>;
      break;
    case "h6":
      header = <h6 id={id}>{title}</h6>;
      break;
  }

  // event handler for button click to copy link to clipboard
  const handleClick = (e) => {
    e.preventDefault();
    const url =
      window.location.href.slice(0, window.location.href.indexOf("#")) +
      `#${id}`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      onSuccess();
      return;
    }

    // fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = url;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      onSuccess();
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
      onFail();
    }
    document.body.removeChild(textArea);
  };

  return (
    <a id={`${id}-link`} className="section-anchor" href={`#${id}`} title={title}>
      {header}
      <button title={linkTitle || CLICK_TO_COPY} onClick={handleClick}>
        <FaLink aria-hidden="true" title={linkTitle || CLICK_TO_COPY} />
        {showSuccess && <span>{successText || COPY_SUCCESS_MESSAGE}</span>}
        {showFail && <span>{failText || COPY_FAIL_MESSAGE}</span>}
      </button>
    </a>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  use: PropTypes.string,
  linkTitle: PropTypes.string,
  successText: PropTypes.string,
  failText: PropTypes.string,
};

export default SectionHeader;

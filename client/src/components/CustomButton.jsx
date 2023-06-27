import React from 'react';

/**
 * CustomButton component for rendering a button with customizable styles.
 * 
 * @param {string} btnType - The type of button (e.g., 'submit', 'button').
 * @param {string} title - The text displayed on the button.
 * @param {function} handleClick - Event handler function for button click.
 * @param {string} styles - Additional CSS styles for the button.
 * @returns {JSX.Element} - The rendered button component.
 */
const CustomButton = ({ btnType, title, handleClick, styles }) => {
  return (
    <button
      type={btnType}
      className={`font-epilogue font-semibold text-[15px] leading-[26px] min-h-[52px] px-4 rounded-[4px] ${styles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;

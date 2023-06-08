import React from 'react';

/**
 * Reusable component for form input elements.
 * 
 * @param {string} labelName - The label text for the input element.
 * @param {string} placeholder - The placeholder text for the input element.
 * @param {string} inputType - The type of input element (e.g., 'text', 'number', 'email').
 * @param {boolean} isTextArea - Flag indicating whether the input is a textarea.
 * @param {string} value - The current value of the input element.
 * @param {function} handleChange - Event handler function for input value changes.
 * @returns {JSX.Element} - The rendered form input element.
 */
const FormElement = ({ labelName, placeholder, inputType, isTextArea, value, handleChange }) => {
  return (
    <label className="flex-1 w-full flex flex-col">
      {/* Render the label if provided */}
      {labelName && (
        <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
          {labelName}
        </span>
      )}
      {/* Render a textarea if `isTextArea` prop is true */}
      {isTextArea ? (
        <textarea
          required
          value={value}
          onChange={handleChange}
          rows={10}
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
        />
      ) : (
        // Render an input element for other input types
        <input
          required
          value={value}
          onChange={handleChange}
          type={inputType}
          step="0.1"
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
        />
      )}
    </label>
  );
};

export default FormElement;

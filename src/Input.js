import React from "react";
import PropTypes from "prop-types";

export const Input = ({ fieldName, placeholder, register, type }) => {
  return (
    <input
      className="w-full rounded-md p-1 text-gray-800"
      placeholder={placeholder}
      type={type}
      {...register(fieldName)}
    />
  );
};

Input.propTypes = {
  fieldName: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  register: PropTypes.func.isRequired,
  type: PropTypes.string,
};

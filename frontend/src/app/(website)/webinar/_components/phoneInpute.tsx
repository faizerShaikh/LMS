import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const PhoneNumberField = ({ value, onChange }: any) => {
  return (
    <div>
      <PhoneInput
        international
        defaultCountry="IN"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default PhoneNumberField;

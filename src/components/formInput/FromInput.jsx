import React, { useState } from "react";
import "../formInput/FormInput.css";

function FromInput(props) {
  const { label, onChange, confirmPassword, errorMessage, id, ...inputProps } =
    props;

  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <>
      <div className="position-relative">
        <label class="form-label">{label}</label>
        <input
          name={props.name}
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focused.toString()}
          onFocus={() =>
            inputProps.name == "confirmPassword" && setFocused(true)
          }
          className="form-control"
        />
        <span className="form-text">{errorMessage}</span>
      </div>
    </>
  );
}

export default FromInput;

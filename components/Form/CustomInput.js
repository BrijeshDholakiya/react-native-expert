import React from "react";
import classes from "./ConnectForm.module.css";

function CustomInput(props) {
  return (
    <div className={classes.inputField}>
      <input
        type={props.InputFieldtype}
        name={props.InputFieldname}
        placeholder={props.InputFieldplaceholder}
        required={props.required}
        value={props.value}
        onChange={props.onChange}
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) =>
          (e.target.placeholder = `${props.InputFieldplaceholder}`)
        }
        autoComplete="off"
      />
    </div>
  );
}

export default CustomInput;

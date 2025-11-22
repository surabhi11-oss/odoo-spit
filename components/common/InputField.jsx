import React from "react";

const InputField = ({ label, value, onChange, ...props }) => {
   return (
      <div>
         <label>{label}</label>
         <input value={value} onChange={onChange} {...props} />
      </div>
   );
};

export default InputField;

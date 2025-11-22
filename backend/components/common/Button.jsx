import React from "react";

const Button = ({ children, variant, ...props }) => {
   return (
      <button {...props}>
         {children}
      </button>
   );
};

export default Button;

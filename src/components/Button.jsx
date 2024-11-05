import React from "react";
import clsx from "clsx";

function Button({ name, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={clsx(className, "py-2 px-4 border rounded-md")}
      data-testid="button"
    >
      {name}
    </button>
  );
}

export default Button;

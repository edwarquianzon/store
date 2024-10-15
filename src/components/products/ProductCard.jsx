import React from "react";
import Button from "../Button";

function ProductCard({ imageSrc, name }) {
  return (
    <div className="border shadow-md flex flex-col items-center gap-2 w-40 px-4 py-2">
      <img src={imageSrc} className="w-24 h-[124]" />
      <span className="font-bold text-base">{name}</span>

      <div className="flex justify-end"></div>
      <Button
        name="View"
        onClick={() => console.log(name)}
        className="bg-green-500 hover:bg-green-500/70"
      />
    </div>
  );
}

export default ProductCard;

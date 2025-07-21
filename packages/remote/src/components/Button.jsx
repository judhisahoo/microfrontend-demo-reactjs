import { useState } from "react";
import "./Button.css";

export const Button = () => {
  const [btnstate, setBtnstate] = useState(0);

  return (
    <div>
      <button
        className="shared-btn"
        onClick={() => setBtnstate((s) => s + 1)}
        id="click-btn"
      >
        Hello World {btnstate}
      </button>
    </div>
  );
};

export default Button;

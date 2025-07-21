import { useState } from "react";
import "./Button.css";
import { useSharedState } from "../MyContext";

export const Button = () => {
  //const [btnstate, setBtnstate] = useState(0);
  const { count, increment } = useSharedState();
  return (
    <div>
      <button className="shared-btn" onClick={increment} id="click-btn">
        Hello World :=: {count}
      </button>
    </div>
  );
};

export default Button;

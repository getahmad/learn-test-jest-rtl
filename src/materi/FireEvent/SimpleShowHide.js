import React, { useState } from "react";

const SimpleShowHide = () => {
  const [show, setShow] = useState(false);

  const ToggleShow = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <div>
      <p>saya sedang {show ? "muncul" : "sembunyikan"}</p>
      <button onClick={ToggleShow}>{show ? "sembunyikan" : "muncul"}</button>
    </div>
  );
};

export default SimpleShowHide;

import { useState } from "react";

const CompUserEvent = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  //   const onSubmit = () => {
  //     console.log("call api submit");
  //   };

  return (
    <div>
      <p>anda mengetik {value}</p>
      <input
        type="text"
        placeholder="input value"
        onChange={(e) => setValue(e.target.value)}
      />
      <p data-testid="text-submit" onClick={onSubmit}>
        submit
      </p>
    </div>
  );
};

export default CompUserEvent;

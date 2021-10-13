import React, { useEffect, useState } from "react";

export const data = [
  "senin",
  "selasa",
  "rabu",
  "kamis",
  "jumat",
  "sabtu",
  "minggu",
];

const CompVariant = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setUser("danang");
    }, 1000);
  }, []);
  return (
    <>
      {user ? <p>haiii {user}</p> : null}
      <p>hari-hari yang ada:</p>
      {data.map((hari, i) => {
        return (
          <p data-testid="hari" key={i}>
            {hari}
          </p>
        );
      })}
    </>
  );
};

export default CompVariant;

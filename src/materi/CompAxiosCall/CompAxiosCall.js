import Axios from "axios";
import React, { useState } from "react";

const CompAxiosCall = () => {
  const [users, setUsers] = useState([]);

  const getUser = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div>
      <p>data user</p>
      <button data-testid="get-user" onClick={getUser}>
        get user
      </button>
      {users.map((user, i) => {
        return (
          <p data-testid="user-name" key={i}>
            {user.name}
          </p>
        );
      })}
    </div>
  );
};

export default CompAxiosCall;

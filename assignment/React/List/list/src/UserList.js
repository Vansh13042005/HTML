// UserList.js
import React from "react";

const UserList = () => {
  const users = [
    { id: 1, name: "Vansh" },
    { id: 2, name: "Aman" },
    { id: 3, name: "Riya" },
    { id: 4, name: "Kiran" },
  ];

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

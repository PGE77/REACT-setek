import React from "react";
import { useState } from "react";
const App = () => {
   const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);

  const formSubmit = (event) => {
        event.preventDefault();

    if (fullName && email && age) {
      const oneUser = { fullName: fullName, email: email , age:age};
      setUsers((users) => {
        return [...users, oneUser];
      });
    } else {
      console.log("Něco nebylo vyplněno");
    }
    setFullName("");
    setEmail("");
    setAge("");
  };

  return (
    <article>
      <form onSubmit={formSubmit}>
        <input
          className="userInfo"
          type="text"
          placeholder="Jméno"
          value={fullName}
          onChange={(event) => {
            setFullName(event.target.value);
          }}
        />

        <input
          className="userInfo"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        
        <input
          className="userInfo"
          type="text"
          placeholder="Věk"
          value={age}
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <input type="submit" value="Odeslat" />
      </form>
      {users.map((oneUser, index) => {
        const {fullName, email, age} = oneUser
      return  <div key={index} className="item">
          <h4>{fullName}</h4>
          <p>{email}</p>
          <p>{age}</p>
        </div>;
      })}
    </article>
  );
};

export default App;

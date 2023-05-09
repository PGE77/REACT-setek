import React from "react";
import { useState } from "react";


// Dynamické vlastnosti objektů
const info = "favoriteColor"
const person = {

fullName: "Davdi Šetek",
email: "david@bradavice.cz"

}
//person.age = 40
person[info] = "red"
console.log(person)



const App = () => {
  //  const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  // const [age, setAge] = useState("");
  const [oneUser, setOneUser] = useState({ fullName: "", email: "", age: "" });
  const [users, setUsers] = useState([]);

  const formChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setOneUser({ ...oneUser, [name]: value });
  };

  const formSubmit = (event) => {
    event.preventDefault();

    if (oneUser.fullName && oneUser.email && oneUser.age) {
      // const newUser = {
      //   fullName: oneUser.fullName,
      //   email: oneUser.email,
      //   age: oneUser.age,
      // };
      const newUser = {...oneUser, id: new Date().getTime()}
      setUsers((users) => {
        return [...users, newUser];
      });
      setOneUser({ fullName: "", email: "", age: "" })
    } else {
      console.log("Něco nebylo vyplněno");
    }
   
  };

  return (
    <article>
      <form onSubmit={formSubmit}>
        <input
          className="userInfo"
          type="text"
          placeholder="Jméno"
          value={oneUser.fullName}
          onChange={formChange}
          name="fullName"
        />

        <input
          className="userInfo"
          type="email"
          placeholder="Email"
          value={oneUser.email}
          onChange={formChange}
          name="email"
        />

        <input
          className="userInfo"
          type="text"
          placeholder="Věk"
          value={oneUser.age}
          onChange={formChange}
          name="age"
        />
        <input type="submit" value="Odeslat" />
      </form>
      {users.map((oneUser, ) => {
        const { fullName, email, age , id} = oneUser;
        return (
          <div key={id} className="item">
            <h4>{fullName}</h4>
            <p>{email}</p>
            <p>{age}</p>
          </div>
        );
      })}
    </article>
  );
};

export default App;

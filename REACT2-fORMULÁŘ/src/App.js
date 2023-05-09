import { useState } from "react";

// spread operator
// Spojování polí
const studentsGroup = ["David", "Jana", "Martina"]
const allStudents = ["Harry", "Ron", ...studentsGroup, "Hermiona"]
console.log(allStudents)
//  srgumenty funkcí
const numbers = [1,2,3]
const multipleNumbers = (a, b, c) =>{
console.log(a * b* c)


}
multipleNumbers(...numbers)

// kopírování polí
// const students1 = ["Jan", "Monika", "Dalibor"]
// const students2 = students1
// console.log(students2)
// students2.push("Pavel")
// console.log(students2)
// console.log(students1)

// const students3 = ["Jan", "Monika", "Dalibor"]
// const students4 =[...students3]
// students4.push("Pavel")
// console.log(students3)
// console.log(students4)

// concatenance další spojování

const names1 = ["David", "Martin"]
const names2 = ["Jana", "Pavla"]
const newArray0 = names1.concat(names2);
const newArray1 = [...names1,"Dana", ...names2]
newArray0.push("Teodor")
console.log(newArray1)


// Rest operátor

const sum = (...allNumbers) => {
let result = 0
  for (const oneNumber of allNumbers){
result = result + oneNumber



}
return result

}
console.log(sum(1,2))
console.log(sum(1,2,3))
console.log(sum(1,2,5,10))
console.log(sum(1,2,10,10,10))


const App = () => {
  const [firstName, setFirstName] = useState("");
  const [names, setNames] = useState([])
  const formSubmit = (event) => {
    event.preventDefault();

    console.log(firstName);
    if (firstName) {
     setNames((names) => { 
        return [...names, firstName]

     })


    } else {
      console.log("Nebylo nic vyplněno");
    }
    setFirstName("");
  };

  return (
    <article>
      <form onSubmit={formSubmit}>
        <label htmlFor="userName">Jméno:</label>
        <input
          name="username"
          className="userName"
          type="text"
          id="userName"
          placeholder="Jméno"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input type="submit" />
       
      </form>
      {names.map((oneName, index) => {
          return <p key={index} className="text">{oneName}</p>;
        })}
    </article>
  );
};

export default App;

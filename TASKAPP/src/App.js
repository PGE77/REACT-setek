
import AllTasks from "./components/AllTasks"

const App = () => {
  // čistý javascritp - začátek
 
  // 1. příklad
 /* const vychoziPole = [5, 6, 7, 8, 9]
 
  const vyslednePole = vychoziPole.map( (jednoCislo) => {
    return jednoCislo + 10
  })
 
  console.log(vyslednePole)
 */
  // 2. příklad	
  /* const data = [
    { id: 1, name: 'Vynést koš' },
    { id: 2, name: 'Uklidit kuchyň' },
    { id: 3, name: 'Zajít do fitka' },
    { id: 4, name: 'Nakoupit' },
    { id: 5, name: 'Nakrmit kočku' },
  ]
 
  const vysledek = data.map( (jedenUkol) => {
    return jedenUkol.name
  })
 
  console.log(vysledek)
 
const vymazaneID = 3;

const vyslednePole = data.filter((jedenUkol) => {

return jedenUkol.id != vymazaneID;

})
console.log(vyslednePole)
  // čistý javascript - konec

  // čistý javascript - konec*/



  return (
    <div className="all-tasks">
    <AllTasks></AllTasks>
    </div>
    )
  
}
 
export default App;
import "./AllTasks.css";
import data from "../data";
import {useState} from "react";


const AllTasks = () => {
const [task, setTask] = useState(data);

const tasksHandler = (idecko) => {

const filterTasks = task.filter((oneTask) => {

return oneTask.id !== idecko;

})
setTask(filterTasks);

}

const deleteHandler = () => {

    setTask([]);
    
    }


  return (
    <div>
      {task.map((oneTask) => {
        const {id, name} = oneTask;
        return (
          <div key={id} className="one-task">
            <h4 >{name}</h4>
            <button type="button" onClick={() => tasksHandler(id)}>Vymazat</button>
          </div>
        );
      })}
        <button type="button" className="main-button" onClick={deleteHandler}>Vše vymazat</button>
    </div>
  );
};

export default AllTasks;

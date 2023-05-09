import React, { useState } from "react";

function CheckboxExample() {
  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.value,
    });

    if(event.target.checked == "false"){
    setCheckedItems({})
    
    
    
    }

  };

  const options = [
    { name: "Option 1", value: "Petr" },
    { name: "Option 2", value: "Pavel" },
    { name: "Option 3", value: "Martin" },
  ];


  return (
    <div>
      {options.map((item) => (
        <label key={item.value}>
          {item.value}
          <input
            type="checkbox"
            name={item.value}
            onChange={handleChange}
            value={item.value}
          />
           <p>Selected options: {Object.values(checkedItems).join(", ")} <button>Vymazat</button>  </p>
        </label>
       
      ))}
     
      

    
    </div>
  );
}

export default CheckboxExample;
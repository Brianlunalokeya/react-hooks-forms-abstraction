import React, { useState } from "react";

function Form() {
  const [FormData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  });

  
  function handleChange(event) {
    const name = event.target.name;
    let value  = event.target.value;

    if (event.target.type === "checkbox") {
        value = event.target.checked;
    }

    setFormData({
      ...FormData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(FormData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      onChange={handleChange} 
      name="firstName"
      value={FormData.firstName} 
      />
      <input 
      type="text" 
      name= "lastName"
      onChange={handleChange} 
      value={FormData.lastName} 
      />
      <input
      type="checkbox"
      name="admin"
      onChange={handleChange}
      value={FormData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

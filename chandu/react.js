import React, { useState } from "react";
import axios from "axios";

function TodoPage() {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/submittodoitem", {
      itemName,
      itemDescription
    });

    alert("Item added!");
  };

  return (
    <div>
      <h2>Create To-Do Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />

        <textarea
          placeholder="Item Description"
          value={itemDescription}
          onChange={(e) => setItemDescription(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TodoPage;

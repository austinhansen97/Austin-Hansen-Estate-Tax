import React, { useState } from "react";

import "./Button.css";

//states to change values
function Button(props) {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  //values typed into card
  function taskHandler(event) {
    setTask(event.target.value);
  }

  function descriptionHandler(event) {
    setDescription(event.target.value);
  }

  // Declares variable so it is global (to create and clear cards (array) added)
  let buttonArray;

  //submission function
  function addCardHandler(event) {
    // stops page from resfreshing thing
    event.preventDefault();

    // // Tax calculation if above $11.7 million--every dollar above 11.7 million is taxed.
    // // If below $11.7 million, it displays "No estate tax (below 11.7 million)".

    // let newEstate = description;

    // if (newEstate > 11.7) {
    //   newEstate = (newEstate - 11.7) * 0.4;
    //   newEstate = newEstate.toFixed(2);
    //   // newEstate = `$${newEstate}`;
    // } else {
    //   newEstate = 0;
    //   // newEstate = `$${newEstate}`;
    // }

    //new dynamic array is constructed
    buttonArray = [{ task: task, description: description }];

    props.getDiv(buttonArray[0]);
    setTask("");
    setDescription("");
  }

  //Function for clearing data (second submit form)
  function clearHandler() {
    buttonArray = undefined;
  }

  return (
    <div className="inputArea">
      <div className="left">
      <h1>Austin Hansen</h1>
        <h2>React Developer</h2>
        <p>Here's a snapshot of what I like working on.</p>
        <p>
          It's a tool I made for financial advisors who manage millions of
          dollars for wealthy clientele. This tool helps identify how much will
          be owed in estate tax after the client's passing.
        </p>
        <p>Try it out!</p>
        <p>Tip: Estate values usually exceed $11,000,000</p>
      </div>
      <form className="right" onSubmit={addCardHandler}>
        <div className="parentField">
          <label>Client's Name</label>
          <input
            className="taskField"
            type="text"
            value={task}
            onChange={taskHandler}
            autoFocus
            required
          />
        </div>
        <div className="parentField">
          <label>Estate Value ($)</label>
          <input
            type="number"
            className="descriptionField"
            value={description}
            onChange={descriptionHandler}
            required
            min="0"
            step="1"
            placeholder="e.g. 14000000"
          />
        </div>
        {/* buttonss --------- */}
        <div className="buttonParent">
          <button className="button" type="submit">
            CALCULATE
          </button>
        </div>

        <form className="buttonParent" onSubmit={clearHandler}>
          <button className="button" type="submit">
            CLEAR
          </button>
        </form>
      </form>
    </div>
  );
}

export default Button;

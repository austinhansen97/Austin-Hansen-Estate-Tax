import React, { useState } from "react";
import TileArea from "./components/TileArea";
import "./components/clientTiles&Sides/TileAreaContent.css";

const dataObject = [
  { task: "(Client's name)", description: "(Amount in estate tax)" },
];

function App() {
  const [data, newData] = useState(dataObject);

  function addCardHandler(newCardArray) {
    newData((previousData) => {
      previousData = "";

      return [newCardArray, ...previousData];
    });
    console.log(data);
  }

  return (
    <div className="fullSite">
      <TileArea
        item={data}
        getToApp={addCardHandler}
        clientRecent={data[0].task}
        totalTax={data[0].description}
      />
      ;
    </div>
  );
}

// a comment for testing (delete me)

export default App;

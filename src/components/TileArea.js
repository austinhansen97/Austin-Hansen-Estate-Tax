import Button from "./topTitle&Form/Button";
import TileAreaContent from "./clientTiles&Sides/TileAreaContent";
import "./clientTiles&Sides/TileAreaContent.css";

//when counter is higher than 1, suggestions div will appear. AKA, button is pushed in Button.js, triggers a ++ in getDivHandler. The value for counter is passed to TileAreaContent and 'if statement' is processed.
let counter = 0;

function TileArea(props) {
  // Gets array variable from Button.js and passes it to App.js
  function getDivHandler(cardFromButton) {
    console.log("TileArea.js");
    props.getToApp(cardFromButton);
    counter++;
  }

  return (
    <div>
      <Button getDiv={getDivHandler} />
      <TileAreaContent
        item={props.item}
        counter={counter}
        clientRecent={props.clientRecent}
        totalTax={props.totalTax}
      />
    </div>
  );
}

export default TileArea;

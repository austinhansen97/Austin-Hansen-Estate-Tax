import "./TileAreaContent.css";
import TileCard from "./TileCard";

function TileAreaContent(props) {
  // number to display in account window
  let numDisplay = (props.totalTax - 11700000) * 0.4;
  if (numDisplay > 0) {
    numDisplay = Number(numDisplay.toFixed());
    numDisplay = `$${numDisplay.toLocaleString()}`;
  } else {
    numDisplay = null;
  }

  // declares variable to be used in if statement
  let suggestionsComp = null;

  // Suggestions section: appears if calculation is done.
  if (props.counter > 0) {
    suggestionsComp = (
      <div className="tile">
        {/*-
         below are the client tiles: 
         -*/}
        <div className="aroundClientTiles">
          {props.item.map((mapArray) => (
            <TileCard task={mapArray.task} description={mapArray.description} />
          ))}
        </div>

        {/* div for right side suggestions and newsletter */}
        <div className="rightBoxesParent">
          <div className="newsletter">
            <form>
              <h2>Get Our Newsletter</h2>
              <p>And get some great updates</p>
              <label>Email </label>
              <input type="email" className="inputNewsletter" required></input>
              <button type="submit" className="buttonNewsletter">
                SUBMIT
              </button>
            </form>
          </div>

          <div className="account-window">
            <h2>
              Help {props.clientRecent} save {numDisplay} on Estate Tax today
            </h2>
            <div className="account-window-buttons">
              <button className="create-account-button">Create Account</button>
              <button className="login-button">Login</button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    suggestionsComp = null;
  }

  return suggestionsComp;
}

export default TileAreaContent;

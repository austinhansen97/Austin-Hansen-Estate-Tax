import "./TileAreaContent.css";
import Graph from "./Graph";

import User from "./User";
import UserJob from "./UserJob";

function TileCard(props) {
  return (
    <div className="eachClientTile">
      <User task={props.task} />
      <UserJob description={props.description} />
      <Graph description={props.description} />
    </div>
  );
}

export default TileCard;

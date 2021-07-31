import "./UserJob.css";

function UserJob(props) {
  // Tax calculation if above $11.7 million--every dollar above 11.7 million is taxed.
  // If below $11.7 million, it displays "No estate tax (below 11.7 million)".
  let newEstate = props.description;
  if (newEstate > 11700000) {
    newEstate = Math.round((newEstate - 11700000) * 0.4);
    newEstate = newEstate.toLocaleString();
  } else {
    newEstate = 0;
  }

  // if statement for paragraph that appears below tax number owed.
  let aboveText = "";
  let taxesText = "";
  if (props.description > 11700000) {
    aboveText = "Will pay:";
    taxesText = "in estate taxes";
  } else {
    taxesText = "No estate taxes owed";
  }

  return (
    <div>
      <p className="text-around-number">{aboveText}</p>
      <p className="num-owed">${newEstate}</p>
      <p className="text-around-number">{taxesText}</p>
    </div>
  );
}

export default UserJob;

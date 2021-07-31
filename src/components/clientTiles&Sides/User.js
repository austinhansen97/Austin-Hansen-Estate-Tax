import "./User.css";

function User(props) {
  return (
    <div>
      <h3 className="user-format">{props.task}</h3>
    </div>
  );
}

export default User;

import HighOrderComponents from "./Hoc";

function Login(props) {

  return (
    <div>
      <h1>{props.Username}</h1>
    </div>
  );
}

export default HighOrderComponents(Login);

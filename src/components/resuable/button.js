import propTypes from "prop-types";

function Button(props) {
  const myClass = `btn ${props.type}`;

  return (
    <button className={myClass} onClick={props.handleClick}>
      {props.name}
    </button>
  );
}

Button.propTypes = {
  type: propTypes.string.isRequired,
};

Button.defaultProps = {
  type: "default",
};

export default Button;

import { PropTypes } from "prop-types";
// import "../styles/components/Photo.scss";

const Button = ({ showMorePhotos }) => {
  return <button onClick={showMorePhotos}>Load more</button>;
};

Button.propTypes = {
    showMorePhotos: PropTypes.func.isRequired,
  };

export default Button;

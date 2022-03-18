import { PropTypes } from "prop-types";
import "../../styles/components/main/Button.scss";

const Button = ({ showMorePhotos }) => {
  return <button className="loadMoreBtn" onClick={showMorePhotos}>Load more</button>;
};

Button.propTypes = {
    showMorePhotos: PropTypes.func.isRequired,
  };

export default Button;

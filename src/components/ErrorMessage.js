import PropTypes from "prop-types";
import "../styles/components/ErrorMessage.scss";

const ErrorMessage = ({ errorMessage }) => {
  return (
    <div className="errorMessageContainer">
      <i className="fa-solid fa-triangle-exclamation errorMessageContainer__exclamation"></i>
      <p className="errorMessageContainer__message">
        {errorMessage}
        <i className="fa-solid fa-face-frown errorMessageContainer__message--icon"></i>
      </p>
    </div>
  );
};

ErrorMessage.propTypes = {
  index: PropTypes.string.isRequired,
};

export default ErrorMessage;

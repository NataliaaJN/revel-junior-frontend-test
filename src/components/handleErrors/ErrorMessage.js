import PropTypes from "prop-types";
import "../../styles/components/handleErrors/ErrorMessage.scss";

const ErrorMessage = ({ errorMessage }) => {
  return (
    <div className="errorMessagePage">
      <h2 className="errorMessagePage__errorTitle">
        Something went wrong, we couldn't load the pictures
      </h2>
      <div className="errorMessagePage__errorMessageContainer">
        <i className="fa-solid fa-triangle-exclamation errorMessagePage__errorMessageContainer--exclamation"></i>
        <p className="errorMessagePage__errorMessageContainer--message">
          {errorMessage}
          <i className="fa-solid fa-face-frown errorMessagePage__errorMessageContainer--message--icon"></i>
        </p>
      </div>
    </div>
  );
};

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string,
};

export default ErrorMessage;

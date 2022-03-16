import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/components/Photo.scss";

const Photo = ({ eachPhoto, index }) => {
  const [isShown, setIsShown] = useState(false);

  const renderAuthor = () => {
    // eslint-disable-next-line no-restricted-globals
    if (screen.width >= 1024) return <p className="photoElement__hoverAuthorContainer--author">{eachPhoto.author}</p>;
  };

  const getIndexNumber = () => {
    const photoIndex = index + 1;
    const indexFormatted = index < 9 ? `#0${photoIndex}` : `#${photoIndex}`;

    return (
      <p className="photoElement__photoContainer--indexContainer--indexNumber">
        {indexFormatted}
      </p>
    );
  };
  return (
    <li className="photoElement">
      
      <div className="photoElement__photoContainer" onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
        <div className="photoElement__photoContainer--indexContainer">
          {getIndexNumber()}
        </div>
        <img
          className="photoElement__photoContainer--photo"
          src={eachPhoto.photo}
          alt={eachPhoto}
        />
      </div>
      <p className="photoElement__authorName">{eachPhoto.author}</p>
      {isShown && <div className="photoElement__hoverAuthorContainer">{renderAuthor()}</div>}
    </li>
  );
};

Photo.propTypes = {
  eachPhoto: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default Photo;
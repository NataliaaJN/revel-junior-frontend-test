import PropTypes from "prop-types";
import Photo from "./Photo";
import "../../styles/components/main/PhotosList.scss";

const PhotosList = ({ filteredPhotos }) => {
  const listElements = filteredPhotos.map((eachPhoto, index) => (
    <Photo key={eachPhoto.id} index={index} eachPhoto={eachPhoto} />
  ));
  return (
    <section className="photosSection">
      <ul className="photosSection__photosListContainer">
        {listElements}
      </ul>
    </section>
  );
};

PhotosList.propTypes ={
  filteredPhotos: PropTypes.array.isRequired,
}

export default PhotosList;

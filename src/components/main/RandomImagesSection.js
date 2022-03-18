import PropTypes from "prop-types";
import Form from "./Form";
import PhotosList from "./PhotosList";
import Button from "./Button";
import "../../styles/components/main/RandomImagesSection.scss";

const RandomImagesSection = ({ authorFilter, handleFilter, filteredPhotos, showMorePhotos }) => {
  return (
    <section className="randomImagesSection">
      <h2 className="randomImagesSection__title">Random images</h2>
      <Form authorFilter={authorFilter} handleFilter={handleFilter} />
      <PhotosList filteredPhotos={filteredPhotos} />
      <Button showMorePhotos={showMorePhotos} />
    </section>
  );
};

RandomImagesSection.propTypes = {
  authorFilter: PropTypes.string,
  handleFilter: PropTypes.func.isRequired,
  filteredPhotos: PropTypes.array.isRequired,
  showMorePhotos: PropTypes.func.isRequired,
};

export default RandomImagesSection;

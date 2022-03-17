import PropTypes from "prop-types";
import "../styles/components/RandomImagesSection.scss";

const RandomImagesSection = () => {

  return (
   <section className="randomImagesSection">
       <h2 className="randomImagesSection__title">Random images</h2>
   </section>
  );
};

RandomImagesSection.propTypes = {
  authorFilter: PropTypes.string.isRequired,
  
};

export default RandomImagesSection;

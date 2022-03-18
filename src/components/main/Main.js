import PropTypes from "prop-types";
import Loader from "../loader/Loader";
import HeroSection from "./HeroSection";
import RandomImagesSection from "./RandomImagesSection";

const Main = ({ isLoading, authorFilter, handleFilter, filteredPhotos, showMorePhotos,}) => {
  return (
    <main className="main">
      <Loader isLoading={isLoading} />
      <HeroSection />
      <RandomImagesSection
        authorFilter={authorFilter}
        handleFilter={handleFilter}
        filteredPhotos={filteredPhotos}
        showMorePhotos={showMorePhotos}
      />
    </main>
  );
};

Main.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  authorFilter: PropTypes.string,
  handleFilter: PropTypes.func.isRequired,
  filteredPhotos: PropTypes.array.isRequired,
  showMorePhotos: PropTypes.func.isRequired,
};

export default Main;

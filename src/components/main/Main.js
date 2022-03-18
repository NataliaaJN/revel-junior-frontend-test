import PropTypes from "prop-types";
import ErrorMessage from "../handleErrors/ErrorMessage";
import Loader from "../loader/Loader";
import HeroSection from "./HeroSection";
import RandomImagesSection from "./RandomImagesSection";

const Main = ({errorMessage, isLoading, authorFilter, handleFilter, filteredPhotos, showMorePhotos,}) => {
  return (
    <main className="main">
      <Loader isLoading={isLoading} />
      {/* {errorMessage && <ErrorMessage errorMessage={errorMessage} />} */}
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
  errorMessage: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  photos: PropTypes.array.isRequired,
};

export default Main;

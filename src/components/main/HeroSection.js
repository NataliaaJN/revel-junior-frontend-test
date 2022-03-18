import PropTypes from "prop-types";
import "../../styles/components/main/HeroSection.scss";
import DogPicture from "../../images/heroPic.jpg";

const HeroSection = () => {
  return (
    <section className="heroSection">
      <article className="heroSection__hero">
        <h2 className="heroSection__hero--title">Are you bored?</h2>
        <p className="heroSection__hero--description">
          CoolPics helps you to spend hours of your day scrolling down and
          sharing a big list of random images.
        </p>
        <button className="heroSection__hero--startBtn">Start here</button>
      </article>
      <div className="heroSection__heroImagesContainer">
        <div className="heroSection__heroImagesContainer--rectangle rectangle1"></div>
        <div className="heroSection__heroImagesContainer--rectangle rectangle2"></div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  authorFilter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default HeroSection;

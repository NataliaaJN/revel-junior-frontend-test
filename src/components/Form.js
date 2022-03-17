import PropTypes from "prop-types";
import "../styles/components/Form.scss";

const Form = ({ authorFilter, handleFilter }) => {
  const handleSearchInput = (ev) => {
    handleFilter(ev.target.value);
  };
  return (
    <form className="form">
      <div className="form__inputWrapper">
        <input
          className="form__inputWrapper--searchInput"
          name="searchInput"
          type="search"
          placeholder="Search by author"
          value={authorFilter}
          onChange={handleSearchInput}
        />
        <i className="form__inputWrapper--searchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </form>
  );
};

Form.propTypes = {
  authorFilter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default Form;

import PropTypes from "prop-types";
import "../styles/components/Form.scss";

const Form = ({ authorFilter, handleFilter }) => {
  const handleSearchInput = (ev) => {
    handleFilter(ev.target.value);
  };
  return (
    <form >
      <input
      name="searchInput"
        type="search"
        placeholder="Search by author"
        value={authorFilter}
        onChange={handleSearchInput}
      />
    </form>
  );
};

Form.propTypes = {
  authorFilter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default Form;

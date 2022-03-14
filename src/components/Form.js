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

export default Form;

import { useState } from "react";
import PropTypes from "prop-types";
import "./SearchHeader.css";

export const SearchHeader = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchText);
  };
  return (
    <div className="searchContainer">
      <form className="searchForm" onSubmit={handleFormSubmit}>
        <label htmlFor="searchTextbox">What are you searching for:</label>
        <input
          id="searchTextbox"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

SearchHeader.propTypes = {
  handleSearch: PropTypes.func,
};

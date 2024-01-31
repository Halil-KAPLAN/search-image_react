import { useState } from "react";
import "./App.css";
import { SearchHeader } from "./components/SearchHeader";
import { searchImages } from "./api";
import { ImageList } from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);

  const handleSearch = async (searchText) => {
    setImages(await searchImages(searchText));
  };

  return (
    <div className="App">
      <SearchHeader handleSearch={handleSearch}></SearchHeader>
      <ImageList images={images} />
    </div>
  );
}

export default App;

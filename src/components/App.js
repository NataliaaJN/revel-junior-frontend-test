import { useEffect, useState } from "react";
import getApiData from "../services/api";
import PhotosList from "./PhotosList";
import "../styles/App.scss";
import Header from "./Header";
import Form from "./Form";
import Loader from "./Loader";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [authorFilter, setAuthorFilter] = useState("");
  const [limitNumberOfPhotos, setLimitNumberOfPhotos] = useState(3);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Take api data
  useEffect(() => {
    setIsLoading(true);
    getApiData()
      .then((data) => {
        setPhotos(data);
        setIsLoading(false);
      })
      .catch((error) => setError(error.message));
  }, []);

  // Limit photos
  const setLimitOfPhotos = photos.slice(0, limitNumberOfPhotos);

  // Load more photos
  const showMorePhotos = (ev) => {
    ev.preventDefault();
    setLimitNumberOfPhotos((prevNumber) => prevNumber + 3);
  };

  // Handle search input
  const handleFilter = (value) => {
    setAuthorFilter(value);
  };

  // Filter by author
  const filteredPhotos = setLimitOfPhotos.filter((eachPhotoData) =>
    eachPhotoData.author
      .toLocaleLowerCase()
      .includes(authorFilter.toLocaleLowerCase())
  );

  return (
    <div className="App">
      <Header />
      <main className="main">
        <Loader isLoading={isLoading} />
        {error && <p>{error} </p>}
        <Form authorFilter={authorFilter} handleFilter={handleFilter} />
        <PhotosList photos={photos} filteredPhotos={filteredPhotos} />
        <button onClick={showMorePhotos}>Load more</button>
      </main>
    </div>
  );
};

export default App;

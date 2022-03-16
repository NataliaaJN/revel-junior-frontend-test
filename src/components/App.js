import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import getApiData from "../services/api";
import PhotosList from "./PhotosList";
import "../styles/App.scss";
import Header from "./Header";
import Form from "./Form";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import PageNotFound from "./PageNotFound";

const App = () => {
  //    STATES     //
  const [photos, setPhotos] = useState([]);
  const [authorFilter, setAuthorFilter] = useState("");
  const [limitNumberOfPhotos, setLimitNumberOfPhotos] = useState(3);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  //    EFFECTS     //
  // Take api data
  useEffect(() => {
    setIsLoading(true);
    getApiData()
      .then((data) => {
        setPhotos(data);
        setIsLoading(false);
      })
      .catch((error) => setErrorMessage(error.message));
  }, []);

  //    FUNCTIONS    //
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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <main className="main">
                <Loader isLoading={isLoading} />
                {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
                <Form authorFilter={authorFilter} handleFilter={handleFilter} />
                <PhotosList photos={photos} filteredPhotos={filteredPhotos} />
                <button onClick={showMorePhotos}>Load more</button>
              </main>
            </>
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;

import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
// Services
import getApiData from "../services/api";

// Components
import Header from "./header/Header";
import Main from "./main/Main";
import ErrorMessage from "./handleErrors/ErrorMessage";
import PageNotFound from "./handleErrors/PageNotFound";
import ErrorBoundary from "./handleErrors/ErrorBoundary";

// Styles
import "../styles/App.scss";

const App = () => {
  //    STATES     //
  const [photos, setPhotos] = useState([]);
  const [authorFilter, setAuthorFilter] = useState("");
  const [limitNumberOfPhotos, setLimitNumberOfPhotos] = useState(3);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [hasError, setHasError] = useState(false);

  //    EFFECTS     //
  // Take api data
  useEffect(() => {
    setIsLoading(true);
    getApiData()
      .then((data) => {
        setPhotos(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setHasError(true);
      });
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
            <ErrorBoundary>
              <Header />
              { hasError ? <ErrorMessage errorMessage={errorMessage} /> : (
                <Main
                  isLoading={isLoading}
                  errorMessage={errorMessage}
                  authorFilter={authorFilter}
                  handleFilter={handleFilter}
                  filteredPhotos={filteredPhotos}
                  showMorePhotos={showMorePhotos}
                />

              )}
            </ErrorBoundary>
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;

import { Link } from "react-router-dom";
import "../../styles/components/handleErrors/PageNotFound.scss";
import CatGif from "../../images/computer-cat.gif";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <h1 className="pageNotFound__404">Error 404</h1>
      <h2 className="pageNotFound__message">
        Ooops! Looks like this page is missing... Don't worry though, our best
        agent is working on it.
      </h2>
      <div className="pageNotFound__imgContainer">
        <img
          className="pageNotFound__imgContainer--gif"
          src={CatGif}
          alt="Cat on computer"
        />
      </div>
      <Link className="pageNotFound__linkHome" to="/">
        Go back
      </Link>
    </div>
  );
};

export default PageNotFound;

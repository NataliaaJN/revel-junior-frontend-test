import useScroll from "../hooks/useScroll";
import "../styles/components/Header.scss";

const Header = () => {
  const scrollInfo = useScroll();

  const isHeaderScrolled = () => {
    return scrollInfo.y >= 10;
  };

  return (
    <header className={ isHeaderScrolled() ? "main-header--scrolled " : "header"}>
      <h1 className={isHeaderScrolled() ? "main-header--scrolled__title " : "header__title"}>Cool pics</h1>
    </header>
  );
};

export default Header;

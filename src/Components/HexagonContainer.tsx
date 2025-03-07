import { useTheme } from "../ThemeContext";

interface HexagonClassnameProps {
  url: string;
  classNameFilter: string;
}

const HexagonContainer: React.FC<HexagonClassnameProps> = ({
  url,
  classNameFilter
}) => {
  const { isLightMode } = useTheme();
  return (
    <div className={`hexagon-container ${isLightMode ? "light" : "dark"} ${classNameFilter}`}>
      <div className="hexagon-border"></div>
      <div className={`hexagon ${classNameFilter}`}>
        <img src={url} className={`skill-logo ${classNameFilter}`} />
      </div>
    </div>
  );
}

export default HexagonContainer;

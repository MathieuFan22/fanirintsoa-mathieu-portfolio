import { useTheme } from "../ThemeContext";

interface HexagonClassnameProps {
  url: string;
  classNameFilter: string;
  name: string;
}

const HexagonContainer: React.FC<HexagonClassnameProps> = ({
  url,
  classNameFilter,
  name
}) => {
  const { isLightMode } = useTheme();
  return (
    <div title={name} className={`hexagon-container ${isLightMode ? "light" : "dark"} ${classNameFilter}`}>
      <div className="hexagon-border"></div>
      <div className={`hexagon ${classNameFilter}`}>
        <img src={url} alt={name} className={`skill-logo ${classNameFilter}`} />
      </div>
    </div>
  );
}

export default HexagonContainer;

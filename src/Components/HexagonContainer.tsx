interface HexagonClassnameProps {
  url: string;
  classNameFilter: string;
}

const HexagonContainer: React.FC<HexagonClassnameProps> = ({
  url,
  classNameFilter
}) => {
  return (
    <div className={`hexagon-container ${classNameFilter}`}>
      <div className="hexagon-border"></div>
      <div className="hexagon">
        <img src={url} className="skill-logo" />
      </div>
    </div>
  );
}

export default HexagonContainer;

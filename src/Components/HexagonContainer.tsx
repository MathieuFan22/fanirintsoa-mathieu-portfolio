interface SourceProps {
  url: string;
}

const HexagonContainer: React.FC<SourceProps> = ({
  url
}) => {
  return (
    <div className="hexagon-container">
      <div className="hexagon-border"></div>
      <div className="hexagon">
        <img src={url} className="skill-logo" />
      </div>
    </div>
  );
}

export default HexagonContainer;

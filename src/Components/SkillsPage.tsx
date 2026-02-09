import "./skills-page.css";
import { Fade } from "react-awesome-reveal";
import HexagonContainer from "./HexagonContainer";
import InfiniteSlider from "./InfiniteSlider";
import { useState } from "react";
import { useTheme } from "../ThemeContext";
import { categories, skills } from "../constants";


const SkillsPage: React.FC = () => {

  const [activeCategory, setActiveCategory] = useState<string>("");
  const [isFiltered, setisFiltered] = useState<boolean>(false);
  const { isLightMode } = useTheme();


  const getFilterClass = (skillCategory: string) =>
    activeCategory === skillCategory
      ? `${skillCategory.toLowerCase()}-skills`
      : isFiltered
        ? "down-opacity"
        : "";

  const SkillHex = ({ index }: { index: number }) => {
    const skill = skills[index];
    if (!skill) return null;
    return (
      <HexagonContainer
        url={skill.url}
        classNameFilter={getFilterClass(skill.category)}
        name={skill.name}
      />
    );
  };

  const HexRow = ({ indices: indices }: { indices: number[] }) => (
    <div className="second-line hexagon-row">
      {indices.map(idx => <SkillHex key={idx} index={idx} />)}
    </div>
  );

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setisFiltered(true);
  };



  return (
    <div className={`skills-section ${isLightMode ? "light" : "dark"}`} >
      <div className="section-title">
        <Fade direction="left">
          <div className="dot"></div>
          <h1>Skills</h1>
        </Fade>
        <div className={`line ${isLightMode ? "light" : "dark"}`}></div>
      </div>
      <div className="section-content">
        <div className="filter-skills">
          {categories.map((category) => (
            <div
              key={category}
              className={`filter-skills-items ${activeCategory === category ? "active" : ""
                }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </div>
          ))}
        </div>
        <div className="honey-comb-container">
          <Fade direction="up" cascade damping={0.2} >
            <div className="first-hc">
              <HexRow indices={[0]} />
              <HexRow indices={[1, 2]} />
              <HexRow indices={[3]} />
              <HexRow indices={[4, 5]} />
              <HexRow indices={[6]} />
            </div>

            <div className="second-hc">
              <HexRow indices={[7]} />
              <HexRow indices={[8, 9]} />
              <HexRow indices={[10]} />
              <HexRow indices={[11, 12]} />
              <HexRow indices={[13]} />
            </div>

            <div className="third-hc">
              <HexRow indices={[2]} />
              <HexRow indices={[13, 14]} />
              <HexRow indices={[15]} />
              <HexRow indices={[16, 17]} />
              <HexRow indices={[18]} />
            </div>
          </Fade>
        </div>
      </div>
      <InfiniteSlider />
    </div>
  );
};



export default SkillsPage;

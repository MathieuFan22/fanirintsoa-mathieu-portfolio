import "./skills-page.css";
import { Fade } from "react-awesome-reveal";
import HexagonContainer from "./HexagonContainer";
import InfiniteSlider from "./InfiniteSlider";
import { useState } from "react";
import { useTheme } from "../ThemeContext";


const SkillsPage: React.FC = () => {

  const [activeCategory, setActiveCategory] = useState<string>("");
  const [isFiltered, setisFiltered] = useState<boolean>(false);
  const { isLightMode } = useTheme();
  const categories = ["Frontend", "Backend", "Tools", "Design"];

  const skills = [
    { url: "/Skills/html.png", category: "Frontend" },
    { url: "/Skills/css.png", category: "Frontend" },
    { url: "/Skills/xd.png", category: "Design" },
    { url: "/Skills/flutter.png", category: "Frontend" },
    { url: "/Skills/linux.png", category: "Tools" },
    { url: "/Skills/js.png", category: "Frontend" },
    { url: "/Skills/react.png", category: "Frontend" },
    { url: "/Skills/ts.png", category: "Backend" },
    { url: "/Skills/nest.png", category: "Backend" },
    { url: "/Skills/github.png", category: "Tools" },
    { url: "/Skills/react.png", category: "Frontend" },
    { url: "/Skills/mongo.png", category: "Backend" },
    { url: "/Skills/ps.png", category: "Design" },
    { url: "/Skills/flutter.png", category: "Frontend" },
    { url: "/Skills/figma.png", category: "Design" },
    { url: "/Skills/git.png", category: "Tools" },
    { url: "/Skills/docker.png", category: "Tools" },
    { url: "/Skills/ai.png", category: "Design" },
    { url: "/Skills/html.png", category: "Frontend" },
  ];

  const getFilterClass = (skillCategory: string) =>
    activeCategory === skillCategory
      ? `${skillCategory.toLowerCase()}-skills`
      : isFiltered
      ? "down-opacity"
      : "";

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setisFiltered(true);
  };

 
  
  return (
    <div className={`skills-section ${isLightMode? "light" : "dark"}`} >
      <div className="section-title">
        <Fade direction="left">
          <div className="dot"></div>
          <h1>Skills</h1>
        </Fade>
        <div className={`line ${isLightMode? "light" : "dark"}`}></div>
      </div>
      <div className="section-content">
        <div className="filter-skills">
          {categories.map((category) => (
            <div
              key={category}
              className={`filter-skills-items ${
                activeCategory === category ? "active" : ""
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
            <div className="second-line hexagon-row">
              <HexagonContainer
                url={skills[0].url}
                classNameFilter={getFilterClass(skills[0].category)}
              />
            </div>

            <div className="second-line hexagon-row" >
              
                <HexagonContainer
                  url={skills[1].url}
                  classNameFilter={getFilterClass(skills[1].category)}
                />
             
             
                <HexagonContainer
                  url={skills[2].url}
                  classNameFilter={getFilterClass(skills[2].category)}
                />
             
            </div>

            <div className="second-line hexagon-row">
              <HexagonContainer
                url={skills[3].url}
                classNameFilter={getFilterClass(skills[3].category)}
              />
            </div>

            <div className="second-line hexagon-row">
           
                <HexagonContainer
                  url={skills[4].url}
                  classNameFilter={getFilterClass(skills[4].category)}
                />
            
             
                <HexagonContainer
                  url={skills[5].url}
                  classNameFilter={getFilterClass(skills[5].category)}
                />
             
            </div>

            <div className="second-line hexagon-row">
              <HexagonContainer
                url={skills[6].url}
                classNameFilter={getFilterClass(skills[6].category)}
              />
            </div>
          </div>
          <div className="second-hc">
            <div className="second-line hexagon-row">
              <HexagonContainer
                url={skills[7].url}
                classNameFilter={getFilterClass(skills[7].category)}
              />
            </div>

            <div className="second-line hexagon-row">
              <HexagonContainer
                url={skills[8].url}
                classNameFilter={getFilterClass(skills[8].category)}
              />
              <HexagonContainer
                url={skills[9].url}
                classNameFilter={getFilterClass(skills[9].category)}
              />
            </div>

            <div className="second-line hexagon-row">
              <HexagonContainer
                url={skills[10].url}
                classNameFilter={getFilterClass(skills[10].category)}
              />
            </div>

            <div className="second-line hexagon-row">
              <HexagonContainer
                url={skills[11].url}
                classNameFilter={getFilterClass(skills[11].category)}
              />
              <HexagonContainer
                url={skills[11].url}
                classNameFilter={getFilterClass(skills[11].category)}
              />
            </div>

            <div className="second-line hexagon-row">
              <HexagonContainer
                url={skills[9].url}
                classNameFilter={getFilterClass(skills[9].category)}
              />
            </div>
          </div>
          <div className="third-hc">
            <div className="second-line hexagon-row">
              <HexagonContainer
                url={skills[12].url}
                classNameFilter={getFilterClass(skills[12].category)}
              />
            </div>

            <div className="second-line hexagon-row">
              <HexagonContainer
                url={skills[13].url}
                classNameFilter={getFilterClass(skills[13].category)}
              />
              <HexagonContainer
                url={skills[14].url}
                classNameFilter={getFilterClass(skills[14].category)}
              />
            </div>

            <div className="second-line hexagon-row">
              <HexagonContainer
                url={skills[15].url}
                classNameFilter={getFilterClass(skills[15].category)}
              />
            </div>

            <div className="second-line hexagon-row">
              <HexagonContainer
                url={skills[16].url}
                classNameFilter={getFilterClass(skills[16].category)}
              />
              <HexagonContainer
                url={skills[17].url}
                classNameFilter={getFilterClass(skills[17].category)}
              />
            </div>

            <div className="second-line hexagon-row">
              <HexagonContainer
                url={skills[18].url}
                classNameFilter={getFilterClass(skills[18].category)}
              />
            </div>
          </div>
        </Fade>
        </div>
      </div>
      <InfiniteSlider />
    </div>
  );
};

export default SkillsPage;

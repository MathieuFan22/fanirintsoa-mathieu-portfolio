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
    { url: "/Skills/html.png", category: "Frontend", name: "HTML" },
    { url: "/Skills/css.png", category: "Frontend", name: "CSS" },
    { url: "/Skills/xd.png", category: "Design", name: "Adobe XD" },
    { url: "/Skills/flutter.png", category: "Frontend", name: "Flutter" },
    { url: "/Skills/linux.png", category: "Tools", name: "Linux" },
    { url: "/Skills/js.png", category: "Frontend", name: "JavaScript" },
    { url: "/Skills/react.png", category: "Frontend", name: "React" },
    { url: "/Skills/ts.png", category: "Backend", name: "TypeScript" },
    { url: "/Skills/nest.png", category: "Backend", name: "NestJS" },
    { url: "/Skills/github.png", category: "Tools", name: "GitHub" },
    { url: "/Skills/nextjs.png", category: "Frontend", name: "NextJS"  },
    { url: "/Skills/mongo.png", category: "Backend", name: "MongoDB" },
    { url: "/Skills/ps.png", category: "Design", name: "Photoshop" },
    { url: "/Skills/tailwind_css.png", category: "Frontend", name: "Tailwind CSS" },
    { url: "/Skills/figma.png", category: "Design", name: "Figma" },
    { url: "/Skills/git.png", category: "Tools", name: "Git" },
    { url: "/Skills/docker.png", category: "Tools", name: "Docker" },
    { url: "/Skills/ai.png", category: "Design", name: "Adobe Illustrator" },
    { url: "/Skills/html.png", category: "Frontend", name: "HTML" },
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
                  classNameFilter={getFilterClass(skills[0].category)} name={skills[0].name}              />
            </div>

            <div className="second-line hexagon-row" >
              
                <HexagonContainer
                  url={skills[1].url}
                  classNameFilter={getFilterClass(skills[1].category)} name={skills[1].name}                />
             
             
                <HexagonContainer
                  url={skills[2].url}
                  classNameFilter={getFilterClass(skills[2].category)} name={skills[2].name}                />
             
            </div>

            <div className="second-line hexagon-row">
              <HexagonContainer
                  url={skills[3].url}
                  classNameFilter={getFilterClass(skills[3].category)} name={skills[3].name}              />
            </div>

            <div className="second-line hexagon-row">
           
                <HexagonContainer
                  url={skills[4].url}
                  classNameFilter={getFilterClass(skills[4].category)} name={skills[4].name}                />
            
             
                <HexagonContainer
                  url={skills[5].url}
                  classNameFilter={getFilterClass(skills[5].category)} name={skills[5].name}                />
             
            </div>

            <div className="second-line hexagon-row">
              <HexagonContainer
                  url={skills[6].url}
                  classNameFilter={getFilterClass(skills[6].category)} name={skills[6].name}              />
            </div>
          </div>
          <div className="second-hc">
            <div className="second-line hexagon-row">
              <HexagonContainer
                  url={skills[7].url}
                  classNameFilter={getFilterClass(skills[7].category)} name={skills[7].name}              />
            </div>

            <div className="second-line hexagon-row">
              <HexagonContainer
                  url={skills[8].url}
                  classNameFilter={getFilterClass(skills[8].category)} name={skills[8].name}              />
              <HexagonContainer
                  url={skills[9].url}
                  classNameFilter={getFilterClass(skills[9].category)} name={skills[9].name}              />
            </div>

            <div className="second-line hexagon-row">
              <HexagonContainer
                  url={skills[10].url}
                  classNameFilter={getFilterClass(skills[10].category)} name={skills[10].name}              />
            </div>

            <div className="second-line hexagon-row">
              <HexagonContainer
                  url={skills[11].url}
                  classNameFilter={getFilterClass(skills[11].category)} name={skills[11].name}              />
              <HexagonContainer
                  url={skills[12].url}
                  classNameFilter={getFilterClass(skills[12].category)} name={skills[12].name}              />
            </div>

            <div className="second-line hexagon-row">
              <HexagonContainer
                  url={skills[13].url}
                  classNameFilter={getFilterClass(skills[13].category)} name={skills[13].name}              />
            </div>
          </div>
          <div className="third-hc">
            <div className="second-line hexagon-row">
              <HexagonContainer
                  url={skills[14].url}
                  classNameFilter={getFilterClass(skills[14].category)} name={skills[14].name}              />
            </div>

            <div className="second-line hexagon-row">
              <HexagonContainer
                  url={skills[13].url}
                  classNameFilter={getFilterClass(skills[13].category)} name={skills[13].name}              />
              <HexagonContainer
                  url={skills[14].url}
                  classNameFilter={getFilterClass(skills[14].category)} name={skills[14].name}              />
            </div>

            <div className="second-line hexagon-row">
              <HexagonContainer
                  url={skills[15].url}
                  classNameFilter={getFilterClass(skills[15].category)} name={skills[15].name}              />
            </div>

            <div className="second-line hexagon-row">
              <HexagonContainer
                  url={skills[16].url}
                  classNameFilter={getFilterClass(skills[16].category)} name={skills[16].name}              />
              <HexagonContainer
                  url={skills[17].url}
                  classNameFilter={getFilterClass(skills[17].category)} name={skills[17].name}              />
            </div>

            <div className="second-line hexagon-row">
              <HexagonContainer
                  url={skills[18].url}
                  classNameFilter={getFilterClass(skills[18].category)} name={skills[18].name}              />
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

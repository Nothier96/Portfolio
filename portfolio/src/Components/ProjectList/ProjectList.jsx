import "./ProjectList.css";
import Projects from "../Projects/Projects";
import { projects } from "../../data";
const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-text">
        <h1>Build and Deploy, it's Thierno Sissoko</h1>
        <div className="pl-desc"></div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          perferendis qui dolores mollitia nostrum autem totam pariatur nesciunt
          molestiae vel.
        </p>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Projects key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;

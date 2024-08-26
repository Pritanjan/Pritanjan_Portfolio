import styles from "./ProjectsStyles.module.css";
import weather from "../../assets/weather.webp";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={weather}
          link="https://auraforecast.netlify.app/"
          h3="weather"
          github="https://github.com/Pritanjan/Weather/tree/main"
          p="Aura Forecast"
        />

        <ProjectCard
          src={freshBurger}
          link="https://github.com/Pritanjan/"
          h3="Fresh Burger"
          p="Hamburger Restaurant"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Pritanjan/Pritanjan_Portfolio"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Pritanjan/Pritanjan_Portfolio"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;

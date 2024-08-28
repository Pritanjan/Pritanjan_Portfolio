import styles from "./ProjectsStyles.module.css";
import weather from "../../assets/weather-transformed.webp";
import socialSphere from "../../assets/socialSphere1.png";
import hipsster from "../../assets/hipsster.png";
import TicTacToe from "../../assets/Tic-Tac-Toe.png";
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
          h3="Aura Forecast"
          h4="HTML, CSS, JS"
          github="https://github.com/Pritanjan/Weather/tree/main"
          p="Weather App"
        />

        <ProjectCard
          src={socialSphere}
          link="https://socialsphere-project.onrender.com/login"
          h3="Social Sphere"
          h4="ReactJS , MongoDB, ExpressJS, NodeJS , PostMan , TailWind CSS"
          p="Social Media App"
        />

        <ProjectCard
          src={TicTacToe}
          link="https://github.com/Pritanjan/Pritanjan_Portfolio"
          h3="Tic-Tac-Toe"
          h4="HTML, CSS, JS"
          p="Game"
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

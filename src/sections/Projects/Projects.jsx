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
          githubLink="https://github.com/Pritanjan/Weather/tree/main"
          p="Weather App"
        />

        {/*  CHECK */}
        <ProjectCard
          src={socialSphere}
          link="https://socialsphere-project.onrender.com/login"
          h3="Social Sphere"
          githubLink=""
          h4="ReactJS , MongoDB, ExpressJS, NodeJS , PostMan , TailWind CSS"
          p="Social Media App"
        />

        {/*  CHECK */}

        <ProjectCard
          src={TicTacToe}
          link="https://xoxo-grid.netlify.app/"
          githubLink="https://github.com/Pritanjan/Tic-Tac-Toe"
          h3="XOXO Grid"
          h4="HTML, CSS, JS"
          p="Game"
        />

        <ProjectCard
          src={fitLift}
          link="https://syncclock.netlify.app/"
          githubLink="https://github.com/Pritanjan/Digital-Clock"
          h3="syncclock"
          h4="HTML, CSS, JS"
          p="Clock App"
          //  It shows the digital clock
        />

        <ProjectCard
          src={fitLift}
          link="https://arithmo.netlify.app"
          githubLink="https://github.com/Pritanjan/Calc"
          h3="Calculator"
          h4="HTML, CSS, JS"
          p="Calculator"
          // This project is a versatile and user-friendly tool designed to meet your everyday mathematical needs.
        />

        <ProjectCard
          src={fitLift}
          link="https://mission-mode.netlify.app"
          githubLink="https://github.com/Pritanjan/To-Do-List-1"
          h3="To Do List"
          h4="HTML, CSS, JS"
          p="MissionMode"
          // It is a simple and efficient task management app designed to help you stay organized and on top of your daily tasks
        />
      </div>
    </section>
  );
}

export default Projects;

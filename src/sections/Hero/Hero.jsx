import styles from "./HeroStyles.module.css";
import NavBar from "../../common/NavBar";
import heroImg from "../../assets/Pritanjan Pic2.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
// import CV from "../../assets/cv.pdf";
import CV from "../../assets/pritanjan_resume.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>PB</div>
        <div className={styles.navLinks}>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
        <button
          className={styles.themeButton}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <img src={themeIcon} alt="Toggle theme icon" />
        </button>
      </nav>
      <div className={styles.heroWrapper}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Pritanjan Baranwal"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Pritanjan
          <br />
          Baranwal
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a
            href="https://x.com/Pritanjan2?t=I7c5aLbyXH2-HqQtL5vRKw&s=09"
            target="_blank"
          >
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/pritanjan" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/pritanjan-baranwal-5aa9b9200/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;

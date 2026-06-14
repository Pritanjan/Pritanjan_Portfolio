import styles from "./NavBar.module.css";
import { useTheme } from "./ThemeContext";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";

function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>PB</div>
      <div className={styles.navLinks}>
        {/* <a href="#">PB</a>   */}
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
  );
}

export default NavBar;

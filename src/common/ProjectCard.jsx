// import React from "react";

// function ProjectCard({ src, link, h3, h4, p }) {
//   return (
//     <a href={link} target="_blank">
//       {/* <a href={githubLink} target="_blank"></a> */}
//       <img className="hover" src={src} alt={`${h3} logo`} />
//       <h3>{h3}</h3>
//       <h4>{h4}</h4>
//       <p>{p}</p>
//     </a>
//   );
// }

// export default ProjectCard;ww

import React from "react";

function ProjectCard({ src, link, h3, h4, p, githubLink }) {
  return (
    <div className="project-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className="hover" src={src} alt={`${h3} logo`} />
        <h3>{h3}</h3>
        <h4>{h4}</h4>
        <p>{p}</p>
      </a>
      {githubLink && (
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <h4>Github Link</h4>
          {/* <img
            className="github-icon"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub link"
          /> */}
        </a>
      )}
    </div>
  );
}

export default ProjectCard;

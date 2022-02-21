import React from "react";
import "../Components/ScssStyles/Skills.css";

export const Skills = () => {
  return (
    <div>
      <div className="skillsHeader">
        <p>My Toolbox</p>
      </div>
      <div className="flex-center">
        <i className="devicon-github-original icon-3d skillfont"></i>
        <i className="devicon-javascript-plain icon-3d skillfont"></i>
        <i className="devicon-react-original icon-3d skillfont"></i>
        <i className="devicon-express-original icon-3d skillfont"></i>
        <i className="devicon-vscode-plain icon-3d skillfont"></i>
      </div>
      <div className="flex-center">
        <i className="devicon-nodejs-plain icon-3d skillfont"></i>
        <i className="devicon-css3-plain icon-3d skillfont"></i>
        <i className="devicon-html5-plain icon-3d skillfont"></i>
        <i className="devicon-postgresql-plain icon-3d skillfont"></i>
        <i className="devicon-typescript-plain icon-3d skillfont"></i>
      </div>
      <div className="flex-center"></div>
    </div>
  );
};

export default Skills;

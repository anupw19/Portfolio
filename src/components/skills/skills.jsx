import "./skills.scss";
import { motion } from "framer-motion";

const variants = {
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        y:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildern:0.1,
        },
    }
}

const Skills = () => {
  return (
    <motion.div className="skills" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        <hr/>
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
            <img src="skill.webp" alt="" />
            <h1><b>MY SKILLS</b></h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
          <h2>FRONTEND</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>React</li>
            <li>JavaScript</li>
            
          </ul>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
          <h2>BACKEND</h2>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>SQL</li>
            <li>Postman</li>
            <li>Studio 3T</li>
          </ul>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
          <h2>OTHER</h2>
          <ul>
            <li>Git</li>
            <li>GITHUB</li>
            <li>VS Code</li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
import { useRef } from "react";
import "./project.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "title 1",
    img: "https://imgs.search.brave.com/EHF9CpJc3N7PVMYq-qxeNq9Jo8V3RJX3r-ZdwUQ57P8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvRnJl/ZVBob3Rvcy9GcmVl/LVBob3RvLTc0MHg0/OTItMjE3NTM3Mjk3/Mi5qcGc",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
  },
  {
    id: 2,
    title: "title 2",
    img: "https://imgs.search.brave.com/03auehT1jOYWRCUzf91H6XY0Lbl6UTQ1_8RG-GU6bnQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvN3lRUjV1/Smh3RWtSZmp3TUZK/N2JVSy9kYzUyYTA5/MTNlOGZmOGI1YzI3/NjE3Nzg5MGViMDEy/OS9vZmZzZXRfY29t/cF83NzI2MjYtb3B0/LmpwZz9maXQ9Zmls/bCZ3PTgwMCZoPTMw/MA",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
  },
  {
    id: 3,
    title: "title 3",
    img: "https://imgs.search.brave.com/iWekQnDcrDpsYG2gmFCBwV6dEJi--Ufld5lNnWN-qpk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9waXhs/ci5jb20vaW1hZ2Vz/L2luZGV4L2FpLWlt/YWdlLWdlbmVyYXRv/ci10d28ud2VicA",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
  },
  {
    id: 4,
    title: "title 4",
    img: "https://imgs.search.brave.com/oirOMpZbOBeEKsdXZb8zSanXyIid35nsZ5GKFp4AEgU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/NjI1MzY5NDM1MzIt/NTdhNjI5ZjZjYzYw/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjAuMw.jpeg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
  }
];

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start","end start"]
    });

    const y = useTransform(scrollYProgress,[0, 1],[-300,300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
            <div className="imageContainer" ref={ref}>
                <img src={item.img} alt="" />
            </div>
        <motion.div className="textContainer" style={ {y} }>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
        </motion.div>
        </div>
      </div>
    </section>
  ); 
};

const Project = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  return (
    <div className="project" ref={ref}>
      <div className="progress">
        <h1>PROJECTS</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Project;
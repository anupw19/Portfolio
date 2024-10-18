import "./hero.scss"
import {motion} from "framer-motion"

const textVariants = {
    initial : {
        x:-500,
        opacity:0
    },
    animate : {
        x:0,
        opacity:1,
        transition:{
            duration :1,
            staggerChilder:0.1,
        } 
    },
    scrollButton:{
        opacity :0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        } 
    },
}

const silderVariants = {
    initial : {
        x:0,
    },
    animate : {
        x:"-220%",
        transition:{
            duration :20,
            repeat: Infinity,
            repeatType: "mirror",   
        } 
    },
}

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textcontainer" variants={textVariants} initial="initial" animate="animate" >
                    <motion.h2 variants={textVariants}>ANUP WASKEL</motion.h2>
                    <motion.h1 variants={textVariants}>FULL STACK DEVELOPER</motion.h1>
                    <motion.div className="button" variants={textVariants}>
                        <motion.button variants={textVariants}>See the latest works</motion.button>
                        <motion.button variants={textVariants}>Contact me</motion.button>
                    </motion.div>
                <motion.img variants={textVariants} animate="scrollButton" src="./scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={silderVariants} initial="initial" animate='animate'>
                FULL STACK DEVELOPER
            </motion.div>
            <div className="imagecontainer">
                <img src="hero.png" alt="" />
            </div>
        </div>
    )
}

export default Hero;
import {useState} from "react";
import {motion} from "framer-motion";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/toggleButton";
import Links from "./links/links";


const Sidebar = () => {

    const [open,setOpen] = useState(false)

    const variants = {
        open:{
        clipPath:"circle(1200px at 50px 50px)",
        transition:{
            type:"spring",
            stiffness:40,
            dimping:60,
        },},
        closed:{
            clipPath:"circle(30px at 50px 50px)",
            transition:{
                delay:0.2,
                type:"spring",
                stiffness:400,
                dimping:40,
            },
        }, 
    }
    return <motion.div className="sidebar" animate={open?"open" : "closed"}>
        <motion.div className="bg" variants={variants}>
            <Links />
        </motion.div>
        <motion.div>
            <ToggleButton setOpen={(setOpen)} />
        </motion.div>
    </motion.div>
}

export default Sidebar;
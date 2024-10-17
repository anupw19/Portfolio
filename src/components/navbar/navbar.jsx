import "./navbar.scss";
import Sidebar from "../sidebar/sidebar";
import {motion} from "framer-motion";

const Navbar = () => {
    return <div className="navbar">
        {/* sidebar */}
        <Sidebar />
        <div className="wrapper">
            <motion.span 
            initial={{opacity:0 ,scale:0.5}} 
            animate={{opacity:1 ,scale:1}} 
            transition={{duration:0.5}}
            >
                Anup Waskel</motion.span>
            <div className="social">
                <a href="#"><img src="/instagram.png" alt="instagram-img"/></a>
                <a href="#"><img src="/instagram.png" alt="instagram-img"/></a>
                <a href="#"><img src="/instagram.png" alt="instagram-img"/></a>
                <a href="#"><img src="/instagram.png" alt="instagram-img"/></a>
            </div>
        </div>
    </div>
}

export default Navbar;
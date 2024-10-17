import {motion} from "framer-motion";

const links = () => {

    const variants = {
        open:{
            transition:{
                staggerChildren:1,
            },
        },
        closed:{
            staggerChildren:0.05,
            staggerDirection:-1
        }
    }

    const itemVariants = {
        open:{
            y:0,
            opacity:1,
        },
        closed:{
            y:50,
            opacity:0,
        }
    }

    const items = [
        "Homepage",
        "Services",
        "Portfolio",
        "Contact",
        "About"
    ]

    return <motion.div variants={variants} className="links">{items.map((items) => (
        <motion.a href={`#${items}`} key={items} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.8}}>
            {items}
        </motion.a>
    ))}
    </motion.div>
}

export default links;
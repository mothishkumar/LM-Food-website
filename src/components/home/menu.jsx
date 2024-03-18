import "./home.scss";
import { motion } from "framer-motion";
import { LuCoffee } from "react-icons/lu";

const Menu = () => {
    const textVariants = {
        initial: {
            x: -500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1,
                staggerChildren: 0.1,
            },
        },
        scrollButton: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity,
            },
        },
    };
  return (
    <div className="menu-container">
                <h1 className="menu-heading">Browse our menu</h1>
                <motion.div className="wrapper"
                    variants={textVariants}
                    initial="initial"
                    whileInView="animate"
                >
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="menu-card">
                        <div className="menu-icon"><LuCoffee /></div>
                        <h3 className="menu-heading">Breakfast</h3>
                        <p className="menu-paragraph">In the new era of technology we look in the future with certainty and pride for our life.</p>
                        <a className="menu-anchor">Explore more</a>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="menu-card">
                        <div className="menu-icon"><LuCoffee /></div>
                        <h3 className="menu-heading">Breakfast</h3>
                        <p className="menu-paragraph">In the new era of technology we look in the future with certainty and pride for our life.</p>
                        <a className="menu-anchor">Explore more</a>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="menu-card">
                        <div className="menu-icon"><LuCoffee /></div>
                        <h3 className="menu-heading">Breakfast</h3>
                        <p className="menu-paragraph">In the new era of technology we look in the future with certainty and pride for our life.</p>
                        <a className="menu-anchor">Explore more</a>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="menu-card">
                        <div className="menu-icon"><LuCoffee /></div>
                        <h3 className="menu-heading">Breakfast</h3>
                        <p className="menu-paragraph">In the new era of technology we look in the future with certainty and pride for our life.</p>
                        <a className="menu-anchor">Explore more</a>
                    </motion.div>
                </motion.div>
                <div>
                </div>
            </div>
  )
}

export default Menu;

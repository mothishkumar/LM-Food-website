import "./home.scss";
import { motion } from "framer-motion";
import Menu from "./menu";
import Product from "./product";
import Footer from "./footer";
import Deals from "./deals";
const Home = () => {

    const textVariants = {
        initial: {
            x: -500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
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
        <>
            <div className="container">
                <div className="wrapper">
                    <motion.div className="contents"
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                    >
                        <motion.h1 variants={textVariants} className="mainheading">Taste of Tradition:<br /><span className="heading"> LM Kitchen</span></motion.h1>
                        <motion.p variants={textVariants} className="paragraph">Welcome to LM Restaurant! <br />
                            Dive into a world of tasty delights where freshness<br/> and flavor reign supreme, all at a price that’s just right.</motion.p>
                        <motion.button variants={textVariants} className="orderbtn">Order Now</motion.button>
                    </motion.div>
                </div>
            </div>
            <Menu />
            <Product />
            <Deals />
            <Footer />
        </>
    )
}

export default Home;

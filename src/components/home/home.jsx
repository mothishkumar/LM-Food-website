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
                        <motion.h1 variants={textVariants} className="mainheading">Fresh And Delicious<br /><span className="heading">Restaurent</span></motion.h1>
                        <motion.p variants={textVariants} className="paragraph">Welcome to LM Restaurent.<br />
                            The food here is fresh and delicious,and the price is favourable.<br />
                            you are welcome to taste it.</motion.p>
                        <motion.button variants={textVariants} className="orderbtn">Order Now</motion.button>
                    </motion.div>
                </div>
            </div>
            <Menu/>
            <Product/>
            <Deals/>
            <Footer/>
        </>
    )
}

export default Home;

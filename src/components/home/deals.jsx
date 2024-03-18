import "./home.scss";
import food8 from '../../assets/food8.webp';
import food9 from '../../assets/food9.webp';
import food10 from '../../assets/food10.jpg';
import { motion } from "framer-motion"

const Deals = () => {
    return (
        <motion.div
            className="deals">
            <h1 className="heading">Exclusive Deals</h1>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="wrapper">
                <motion.div
                    initial={{ x: -500 }}
                    whileInView={{ x: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="deals-card">
                    <div className="deals-content">
                        <div>
                            <h2>Best Deals <span className="heading">crispy<br />sandwichs</span></h2>
                            <p className="paragraph">Enjoy the large size of sandwiches. Complete
                                perfect slice of sandwiches.</p>
                        </div>
                        <button className="order-btn">Proced to order</button>
                    </div>
                    <motion.img whileHover={{ rotate: 5 }} src={food8} className="deals-image" />
                </motion.div>
                <motion.div
                    initial={{ x: 500 }}
                    whileInView={{ x: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="deals-card">
                    <motion.img whileHover={{ rotate: 5 }} src={food9} className="deals-image1" />
                    <div className="deals-content">
                        <div>
                            <h2>Celebrate parties <br />with <span className="heading">Fired Chicken</span></h2>
                            <p className="paragraph">Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out
                                best deals for fried chicken.</p>
                        </div>
                        <button className="order-btn">Proced to order</button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: -500 }}
                    whileInView={{ x: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="deals-card">
                    <div className="deals-content">
                        <div>
                            <h2>Wanna eat hot<br /> & spicy <span className="heading">Pizza?</span></h2>
                            <p className="paragraph">Pair up with a friend and enjoy the
                                hot and crispy pizza pops. Try it with the best deals.</p>
                        </div>
                        <button className="order-btn">Proced to order</button>
                    </div>
                    <motion.img whileHover={{ rotate: 5 }} src={food10} className="deals-image" />
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Deals;

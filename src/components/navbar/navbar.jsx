import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div className="navbar"
    initial={{ opacity: 0, y:-70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
    >
      <div className="wrapper">
        <div className="logo">
            {/* <img src={lm} className="image"/> */}
            <h1 className="logo-h">LM Foods</h1>
        </div>
        <div className="menus">
            <h3 className="menu">Home</h3>
            <h3 className="menu">Recipes</h3>
            <h3 className="menu">Pages</h3>
            <h3 className="menu">Blog</h3>
            <h3 className="menu">Shop</h3>
            <button className="loginbtn">Login</button>
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar;

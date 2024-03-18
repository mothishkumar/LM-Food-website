import "./home.scss";
import img from '../../assets/img2.jpg';
import food1 from '../../assets/food1.jpg';
import food2 from '../../assets/food2.jpg';
import food3 from '../../assets/food3.avif';
import food4 from '../../assets/food4.avif';
import food5 from '../../assets/food5.webp';
import food6 from '../../assets/food6.jpg';
import food7 from '../../assets/food7.jpeg';

import { motion } from "framer-motion";

const products = [
  {
    img: img,
    name: 'Sandwich',
    rating: 4.2,
    price: 19.99
  },
  {
    img: food1,
    name: 'Burger',
    rating: 4.5,
    price: 24.99
  },
  {
    img: food2,
    name: 'Dosa',
    rating: 4.0,
    price: 14.99
  },
  {
    img: food3,
    name: 'Pizza',
    rating: 4.2,
    price: 19.99
  },
  {
    img: food4,
    name: 'salad',
    rating: 4.5,
    price: 24.99
  },
  {
    img: food5,
    name: 'Chicken lollipop',
    rating: 4.0,
    price: 14.99
  },
  {
    img: food6,
    name: 'samosa',
    rating: 4.2,
    price: 19.99
  },
  {
    img: food7,
    name: 'Butternon',
    rating: 4.5,
    price: 24.99
  }
];

const Product = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div className="product">
      <h1 className="product-heading">Product</h1>
      <h1 className="product-description">Most popular Items</h1>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="wrapper">
        {products.map((product, index) => (
          <motion.div className="product-card"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            variants={item} key={index}>
            <img src={product.img} className="product-img" />
            <div className="product-ratings">
              <h4 className="product-ratings-heading">{product.name}</h4>
              <span className="product-rating"><span className="star">&#9733;</span> {product.rating}</span>
            </div>
            <div className="product-costs">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }} className="addtocartbtn">Add to cart</motion.button>
              <span>${product.price}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Product;

import { motion } from 'framer-motion';
import './Skills.css';

export default function Skills() {
  return (
    <>
      <div id='skill-container' className='row justify-content-center'>
        <div className='col-8'>
          <motion.h2
            initial={{ opacity: 0, y: '50px'}}
            whileInView={{ opacity: 1, y: '0px' }}
            viewport={{ once: true }}
            transition={ {duration: 0.8}}
            className='section-headers text-center mb-5 cus-txt-white'
          >
            Technologies
          </motion.h2>
          <motion.ul
            id='skill-list'
            className='d-flex justify-content-evenly list-unstyled cus-txt-white'
            initial={{ opacity: 0, y: '50px'}}
            whileInView={{ opacity: 1, y: '0px' }}
            viewport={{ once: true }}
            transition={ {duration: 0.8}}
          >
            <li className='d-block text-center cus-txt-dark'>
              <img src='src/assets/images/react.png' alt='' /> React
            </li>
            <li className='d-block text-center cus-txt-dark'>
              <img src='src/assets/images/javascript.png' alt='' /> JavaScript
            </li>
            <li className='d-block text-center cus-txt-dark'>
              <img src='src/assets/images/node.png' alt='' /> Node
            </li>
            <li className='d-block text-center cus-txt-dark'>
              <img src='src/assets/images/mongo.png' alt='' /> MongoDB
            </li>
            <li className='d-block text-center cus-txt-dark'>
              <img src='src/assets/images/mysql.png' alt='' /> MySQL
            </li>
            <li className='d-block text-center cus-txt-dark'>
              <img src='src/assets/images/git.png' alt='' /> Git
            </li>
            <li className='d-block text-center cus-txt-dark'>
              <img src='src/assets/images/css.png' alt='' /> CSS
            </li>
          </motion.ul>
        </div>
      </div>
    </>
  );
}

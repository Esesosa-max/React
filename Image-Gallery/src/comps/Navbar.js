import React from "react";
import { motion } from "framer-motion";
function Navbar() {
  return (
    <motion.div initial={{ y: 10000 }} animate={{ y: 0 }}
    transition={{duration:1.4 , delay:0.3}}
    >
      <nav class="purple">
        <div class="nav-wrapper container ">
          <a href="#" class="brand-logo">
            Logo
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="#">Gallery</a>
            </li>
          </ul>
        </div>
      </nav>
    </motion.div>
  );
}

export default Navbar;

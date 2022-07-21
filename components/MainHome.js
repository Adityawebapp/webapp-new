import React from "react";
import styles from "../styles/css/MainHome.module.css";
import { motion, AnimatePresence } from "framer-motion";

const MainHome = () => {
  return (
    <>
      <motion.video
        autoPlay
        muted
        loop
        className={styles.video}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <source src="/homeVideo.mp4" type="video/mp4" />
      </motion.video>
    </>
  );
};

export default MainHome;

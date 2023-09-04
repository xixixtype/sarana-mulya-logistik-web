import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

export default function Loader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }, []);

  return isVisible ? (
    <motion.div>
      <div className="loader-container">
        {' '}
        <span className="loader"></span>{' '}
      </div>
    </motion.div>
  ) : null;
}

import { motion } from 'framer-motion';
import { Card } from '@mui/material';
import { forwardRef } from 'react';

const AnimatedCard = forwardRef((props, ref) => {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card {...props} />
    </motion.div>
  );
});

export default AnimatedCard;
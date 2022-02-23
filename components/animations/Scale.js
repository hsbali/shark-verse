import { motion } from "framer-motion"

export function ScaleOut({ children, transition, ...props}) {
    return (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0, ...transition }}
          variants={{
            visible: { scale: [1.1, 1] }, 
            hidden: { scale: 1.1 }
          }}
          {...props}
        >
          {children}
        </motion.div>
      );
}

export function ScaleIn({ children, transition, ...props}) {
    return (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0, ...transition }}
          variants={{
            visible: { scale: [0.8, 1] }, 
            hidden: { scale: 0.8 }
          }}
          {...props}
        >
          {children}
        </motion.div>
      );
}
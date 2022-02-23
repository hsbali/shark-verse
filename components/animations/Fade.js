import { motion } from "framer-motion";

export function FadeInUp({ children, transition, ...props }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0, ...transition }}
      variants={{
        visible: { y: ["20px", "0px"], opacity: ["0", "1"] },
        hidden: { opacity: "0" }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeInLeft({ children, transition, ...props }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0, ...transition }}
      variants={{
        visible: { x: ["20px", "0px"], opacity: ["0", "1"] }, 
        hidden: { opacity: "0" }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeInRight({ children, transition, ...props }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0, ...transition }}
      variants={{
        visible: { x: ["-20px", "0px"], opacity: ["0", "1"] }, 
        hidden: { opacity: "0" }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, transition, ...props }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0, ...transition }}
      variants={{
        visible: { opacity: ["0", "1"] }, 
        hidden: { opacity: "0" }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeInScale({ children, transition, ...props }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0, ...transition }}
      variants={{
        visible: { opacity: ["0", "1"], scale: [0.95, 1] }, 
        hidden: { opacity: "0", scale: 0.95 }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
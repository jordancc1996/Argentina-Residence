import { motion } from 'framer-motion';

interface EditorialSectionProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

const EditorialSection = ({ 
  children, 
  className = "", 
  centered = true 
}: EditorialSectionProps) => {
  return (
    <motion.section 
      className={`section-padding ${className}`}
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div 
        className={`max-w-4xl mx-auto px-4 md:px-8 ${centered ? 'text-center' : ''}`}
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

export default EditorialSection;

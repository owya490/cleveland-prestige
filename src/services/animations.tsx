import React, { ReactNode } from "react";
import { motion } from "framer-motion";
interface IMotionDivProps {
    customDiv: ReactNode;
    delay: number;
    x: number;
}
export const MotionFade = ({ customDiv, delay, x }: IMotionDivProps) => {
    return (
        <motion.div
            initial={{ x: x, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay, duration: 0.8 }}
        >
            {customDiv}
        </motion.div>
    );
};

import { motion } from "framer-motion";
import styled from "styled-components";

export const HeroContainer = styled(motion.div)`
     direction: ltr;

     @media screen and (max-width : 768px) {
               height: auto !important;
     }
     margin-bottom: 1rem;
`
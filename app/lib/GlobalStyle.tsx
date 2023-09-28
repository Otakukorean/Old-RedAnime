import { motion } from "framer-motion";
import styled from "styled-components";

export const CardContainer = styled(motion.div)`
     display: flex;
     justify-content: center;
     align-items: center;
     gap: 5rem;
     flex-wrap: wrap;
     transition: all 0.2s;
     padding-top: 1rem;
     @media screen and (min-width:768px) {
          padding-right: 50px;
     }
     @media screen and (max-width:768px) {
          gap: 0.5rem;

     }
`
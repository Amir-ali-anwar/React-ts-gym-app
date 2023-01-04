import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits">
        <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.About)}>

        </motion.div>
    </section>
  )
}

export default Benefits
import React from 'react'
import useMediaQuery from "@/Hooks/useMediaQueries";
import { SelectedPage } from "@/shared/types";
import ActionBtton from "../ActionBtton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <div>index</div>
  )
}

export default Home
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
    <section id='home' className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* Image and main header */}
      <div className='md:flex mx-auto'>
        {/* Main header */}
        <div>
          {/* Headings */}
          <div>
            <div>
            <img alt="home-page-text" src={HomePageText} />
            </div>
          </div>
          <p>  Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.</p>
        </div>
        <div>
          <ActionBtton setSelectedPage={setSelectedPage}>
              Join Now
          </ActionBtton>
          <AnchorLink   className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
          onClick={()=>setSelectedPage(SelectedPage.ContactUs)}
          href={`#${SelectedPage.ContactUs}`}
          >
          <p>Learn More</p>
          </AnchorLink>
        </div>
         {/* IMAGE */}
         <div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </div>
    </section>
  )
}

export default Home
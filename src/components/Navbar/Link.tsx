import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
type Props = {
  page: string;
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

const Link = ({page, selectedPage, setSelectedPage }: Props) => {
  const tolowerCase = page.toLowerCase().replace(/ /g, "");
  return (
    <AnchorLink
      className={`${selectedPage === tolowerCase ? "text-primary-500" : ""}`}
      href={`#${tolowerCase}`}
      onClick={() => setSelectedPage(tolowerCase)}
    >
      {page}
    </AnchorLink>
  );
};
export default Link;

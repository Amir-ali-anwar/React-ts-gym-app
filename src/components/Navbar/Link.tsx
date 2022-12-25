import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
type Props = {
    page:string
}

const Link = ({page}: Props) => {
  const toloweCase = page.toLowerCase().replace(/ /g, "");  
  return <AnchorLink href={`#${toloweCase}`} >{page}</AnchorLink>;
}
export default Link
import Link from "next/link"
import Heading from "../Components/Heading"
import ListItem from "../Components/ListItem"
import List from "../Components/List"
import Section from "../Components/Section"

export default function Home() {

  const links = [
     {
      text: "Gifting - 300x600",
      href: "../../martell/gifting/F26_Martell_OND_Media_Assets_Gifting_300x600/index.html"
    },
    {
      text: "Smoothness - 300x600",
      href: "../../martell/smoothness/F26_Martell_OND_Media_Assets_Smoothness_300x600/index.html"
    },
    {
      text: "Versatile - 300x600",
      href: "../../martell/versatile/F26_Martell_OND_Media_Assets_Versatile_300x600/index.html"
    }
  
  ]

  return (
    <>
         <Section>
          <Heading>Martell OND Media Assets</Heading>
           <h3>Smoothness</h3>
           <List>{links.map((link) => 
            <ListItem key={link.href}><Link className="underline hover:no-underline focus:no-underline" href={link.href}>{link.text}</Link></ListItem>
          )}</List>
         </Section>
         
    </>
  );
}

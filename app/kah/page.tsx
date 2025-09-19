import Link from "next/link"
import Heading from "../Components/Heading"
import ListItem from "../Components/ListItem"
import List from "../Components/List"
import Section from "../Components/Section"

export default function Home() {

  const links = [
     {
      text: "300x600",
      href: "../../kah/FY24_Kahluah_Milk_Spring_Display_Banners_300x600/index.html"
    },
  ]

  return (
    <>
         <Section>
          <Heading>Kahluah Dunkin Co-Merchandised Assets</Heading>
           <List>{links.map((link) => 
            <ListItem key={link.href}><Link className="underline hover:no-underline focus:no-underline" href={link.href}>{link.text}</Link></ListItem>
          )}</List>
         </Section>
         
    </>
  );
}

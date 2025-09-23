import Link from "next/link"
import Heading from "../Components/Heading"
import ListItem from "../Components/ListItem"
import List from "../Components/List"
import Section from "../Components/Section"

export default function Home() {

  const links = [
    {
      text: "160x600",
      href: "../../kah/FY24_Kahluah_Milk_Spring_Display_Banners_160x600/index.html"
    },
     {
      text: "300x250",
      href: "../../kah/FY24_Kahluah_Milk_Spring_Display_Banners_300x250/index.html"
    },
     {
      text: "300x600",
      href: "../../kah/FY24_Kahluah_Milk_Spring_Display_Banners_300x600/index.html"
    },
     {
      text: "320x50",
      href: "../../kah/FY24_Kahluah_Milk_Spring_Display_Banners_320x50/index.html"
    },
     {
      text: "728x90",
      href: "../../kah/FY24_Kahluah_Milk_Spring_Display_Banners_728x90/index.html"
    },
        {
      text: "970x250",
      href: "../../kah/FY24_Kahluah_Milk_Spring_Display_Banners_970x250/index.html"
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

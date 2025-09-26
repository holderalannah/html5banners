import Link from "next/link"
import Heading from "../Components/Heading"
import ListItem from "../Components/ListItem"
import List from "../Components/List"
import Section from "../Components/Section"

export default function Home() {

  const jefLinks = [
   {
      text: "160x600",
      href: "../../jef/FY26_JEF_AlwaysOn_160x600/index.html"
    },
    {
      text: "300x250",
      href: "../../jef/FY26_JEF_AlwaysOn_300x250/index.html"
    },
    {
      text: "300x600",
      href: "../../jef/FY26_JEF_AlwaysOn_300x600/index.html"
    },
    {
      text: "320x50",
      href: "../../jef/FY26_JEF_AlwaysOn_320x50/index.html"
    },
    {
      text: "728x90",
      href: "../../jef/FY26_JEF_AlwaysOn_728x90/index.html"
    },
    {
      text: "970x250",
      href: "../../jef/FY26_JEF_AlwaysOn_970x250/index.html"
    }
  
  ];



  return (
    <>
         <Section>
          <Heading>Jefferson's OND Media Campaign</Heading>
           <List>{jefLinks.map((link) => 
            <ListItem key={link.href}><Link className="underline hover:no-underline focus:no-underline" href={link.href}>{link.text}</Link></ListItem>
          )}</List>
      
         </Section>

         
    </>
  );
}

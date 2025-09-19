import Link from "next/link"
import ListItem from "./Components/ListItem"
import List from "./Components/List"
import Section from "./Components/Section"

export default function Home() {

  const links = [
    {
      text: "TGL Campaign",
      href: "tgl"
    },
    {
      text: "Jefferson's OND Media Campaign",
      href: "jef"
    },
    {
      text: "Martell OND Media Assets",
      href: "martell"
    },
     {
      text: "Kahluah Dunkin Co-Merchandised Assets",
      href: "kah"
    }
  ]

  return (
    <>
         <Section>
           <List>{links.map((link) => 
            <ListItem key={link.href}><Link className="underline hover:no-underline focus:no-underline" href={link.href}>{link.text}</Link></ListItem>
          )}</List>
         </Section>
         
    </>
  );
}

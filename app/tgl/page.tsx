import Heading from "../Components/Heading"
import ListItem from "../Components/ListItem"
import List from "../Components/List"
import Section from "../Components/Section"

export default function Home() {

  const links = [
     {
      text: "160x600",
      href: "../../tgl/FY26_TGL_AlwaysOn_12_160x600/index.html"
    },
    {
      text: "300x250",
      href: "../../tgl/FY26_TGL_AlwaysOn_12_300x250/index.html"
    },
    {
      text: "300x600",
      href: "../../tgl/FY26_TGL_AlwaysOn_12_300x600/index.html"
    },
    {
      text: "320x50",
      href: "../../tgl/FY26_TGL_AlwaysOn_12_728x90/index.html"
    },
    {
      text: "728x90",
      href: "../../tgl/FY26_TGL_AlwaysOn_12_320x50/index.html"
    },
     {
      text: "970x250",
      href: "../../tgl/FY26_TGL_AlwaysOn_12_970x250/index.html"
    }
  ]
     
  return (
    <>
         <Section>
          <Heading>TGL Campaign</Heading>
           <List>{links.map((link) => 
            <ListItem key={link.href}><a className="underline hover:no-underline focus:no-underline" href={link.href}>{link.text}</a></ListItem>
          )}</List>
         </Section>
         
    </>
  );
}

import Link from "next/link"
import Heading from "../Components/Heading"
import ListItem from "../Components/ListItem"
import List from "../Components/List"
import Section from "../Components/Section"

export default function Home() {

  const versatileLinks = [
    {
      text: "Versatile - 160x600",
      href: "../../martell/versatile/F26_Martell_OND_Media_Assets_Versatile_160x600/index.html"
    },
    {
      text: "Versatile - 300x250",
      href: "../../martell/versatile/F26_Martell_OND_Media_Assets_Versatile_300x250/index.html"
    },
    {
      text: "Versatile - 300x600",
      href: "../../martell/versatile/F26_Martell_OND_Media_Assets_Versatile_300x600/index.html"
    },
    {
      text: "Versatile - 320x50",
      href: "../../martell/versatile/F26_Martell_OND_Media_Assets_Versatile_320x50/index.html"
    },
    {
      text: "Versatile - 728x90",
      href: "../../martell/versatile/F26_Martell_OND_Media_Assets_Versatile_728x90/index.html"
    },
      {
      text: "Versatile - 970x250",
      href: "../../martell/versatile/F26_Martell_OND_Media_Assets_Versatile_970x250/index.html"
    },
  
  ];

  const giftingLinks = [
     {
      text: "Gifting - 160x600",
      href: "../../martell/gifting/F26_Martell_OND_Media_Assets_Gifting_160x600/index.html"
    },
    {
      text: "Gifting - 300x250",
      href: "../../martell/gifting/F26_Martell_OND_Media_Assets_Gifting_300x250/index.html"
    },
    {
       text: "Gifting - 300x600",
      href: "../../martell/gifting/F26_Martell_OND_Media_Assets_Gifting_300x600/index.html"
    },
    {
      text: "Gifting - 320x50",
      href: "../../martell/gifting/F26_Martell_OND_Media_Assets_Gifting_320x50/index.html"
    },
    {
      text: "Gifting - 728x90",
      href: "../../martell/gifting/F26_Martell_OND_Media_Assets_Gifting_728x90/index.html"
    },
      {
      text: "Gifting - 970x250",
      href: "../../martell/gifting/F26_Martell_OND_Media_Assets_Gifting_970x250/index.html"
    },
  
  ]

  const smoothLinks = [
     {
      text: "Smoothness - 160x600",
      href: "../../martell/smoothness/F26_Martell_OND_Media_Assets_Smoothness_160x600/index.html"
    },
    {
      text: "Smoothness - 300x250",
      href: "../../martell/smoothness/F26_Martell_OND_Media_Assets_Smoothness_300x250/index.html"
    },
    {
      text: "Smoothness - 300x600",
      href: "../../martell/smoothness/F26_Martell_OND_Media_Assets_Smoothness_300x600/index.html"
    },
    {
      text: "Smoothness - 320x50",
      href: "../../martell/smoothness/F26_Martell_OND_Media_Assets_Smoothness_320x50/index.html"
    },
    {
      text: "Smoothness - 728x90",
      href: "../../martell/smoothness/F26_Martell_OND_Media_Assets_Smoothness_728x90/index.html"
    },
      {
      text: "Smoothness - 970x250",
      href: "../../martell/smoothness/F26_Martell_OND_Media_Assets_Smoothness_970x250/index.html"
    },
  
  ];

  return (
    <>
         <Section>
          <Heading>Martell OND Media Assets</Heading>
           <h3 className="font-semibold">Gifting</h3>
           <List>{giftingLinks.map((link) => 
            <ListItem key={link.href}><Link className="underline hover:no-underline focus:no-underline" href={link.href}>{link.text}</Link></ListItem>
          )}</List>

            <h3 className="font-semibold">Smoothness</h3>
           <List>{smoothLinks.map((link) => 
            <ListItem key={link.href}><Link className="underline hover:no-underline focus:no-underline" href={link.href}>{link.text}</Link></ListItem>
          )}</List>

          <h3 className="font-semibold">Versatile</h3>
           <List>{versatileLinks.map((link) => 
            <ListItem key={link.href}><Link className="underline hover:no-underline focus:no-underline" href={link.href}>{link.text}</Link></ListItem>
          )}</List>
         </Section>

         
    </>
  );
}

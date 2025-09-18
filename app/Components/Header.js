import Link from 'next/link'

export default function Header({}){
    return(
        <header id="header" className="bg-[#414AF2] py-6 text-center rounded-b-[151px] w-full p-12 shadow-lg text-white">
                <h1 className='text-center font-semibold text-[2.6rem] tracking-wider'><Link href="/">HTML5 Banners</Link></h1>
        </header>
    )
}
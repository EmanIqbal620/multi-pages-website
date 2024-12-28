import Link from "next/link"
import { FaShoppingCart } from "react-icons/fa"
export default function Header() {
    return(
       <header className="header">
        <h1 className="logo">KickStart</h1>
        <nav>
            <Link href="/">Home</Link>
            <Link href="about">About</Link>
            <Link href="shoes">Shoes</Link>
            <Link href="contact">Contact</Link>
           < FaShoppingCart style={{color:'white', fontSize: "20px"}} />

        </nav>
       </header>
    )
}
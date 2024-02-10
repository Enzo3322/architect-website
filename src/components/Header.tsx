import { Outfit, Playfair_Display } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Header() {
  return (
    <header className="fixed w-screen bg-white">
      <nav className="max-w-screen-xl w-full m-auto p-5 flex items-center justify-between">
        <h1 className={`text-[40px] text-black ${playfair.className}`}>
          Matos
        </h1>
        <ul className={`flex gap-9 text-black ${outfit.className} text-md`}>
          <li>About</li>
          <li>Services</li>
          <li>Our Work</li>
          <li>
            <a href="/contact" className=" text-white p-4 bg-[#996830]">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

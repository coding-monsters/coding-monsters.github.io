import Image from "next/image";
import { Inter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <main className={inter.className}>
      <div className="grid grid-cols-2 gap-4">
  <div> <Image
      src="/image.jpg"
      width={923}
      height={901}
      alt="Picture of the author"
    /></div>
  
  <div> <h1 className="text-6xl font-semibold pt-32 pb-4 pl-24">Coming<br /> Soon / <br /><span className="font-light">Coding<br /> Monsters</span></h1>
  <p className="pl-24">New Website For 2025</p>
  </div>
  
</div>
</main>
     
 
  );
}

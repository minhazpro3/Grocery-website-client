import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/components/home/Banner";
import Navbar from "@/components/share/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
    </main>
  );
}

import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/components/home/Banner";
import Navbar from "@/components/share/Navbar";
import Product_category from "@/components/home/Product_category";
import Tips from "@/components/home/Tips";
import Best_seller from "@/components/home/Best_seller";
import Footer from "@/components/share/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <Product_category />
      <Tips />
      <Best_seller />
      <Footer />
    </main>
  );
}

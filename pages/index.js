import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h2 className="text-red-600">welcome to my channel</h2>
    </main>
  );
}

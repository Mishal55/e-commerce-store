import Font from "@/components/Font";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Topnavbar } from "@/components/Topnavbar";
import Product from "./Products/page";
import Sell from "./Products/Sell";
import Dress from "@/components/Dress";
import { Carousel } from "@/components/ui/carousel";

export default function Home() {
  return (
   <div>
<Topnavbar />
<Header />
<Hero/>
<Font />
<Product />
<Sell/>
<Dress />
<Carousel/>
   </div>

  );
}

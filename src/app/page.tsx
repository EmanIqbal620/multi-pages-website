import HomeContent from "./components/HomeContent";
import Shoes from "./shoes/page";
import About from "./about/page";
export default function Home (){
  return(
    <div>
      <HomeContent />
      <About />
      <Shoes />

    </div>
  );
}
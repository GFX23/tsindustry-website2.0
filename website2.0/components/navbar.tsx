import Image from "next/image";
import Burger from "./burger";

interface IBurgerProps {
}

const Navbar: React.FC<IBurgerProps> = () => {
  return (
    <div className="relative left-0 w-full flex justify-between">
      <Image src="/print_transparent.svg" width="100" height="100"/>
      <Burger />
    </div>
  )
}

export default Navbar
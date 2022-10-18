import Image from "next/image";
import Background from "./background";
import Burger from "./burger";
import Footer from "./footer";


interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div className="max-w-7xl w-screen h-full flex flex-col mx-auto">
      <Background />
      <Burger />
      <Footer />
    </div>
  )
}

export default Layout
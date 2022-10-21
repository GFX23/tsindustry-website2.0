import Image from "next/image";
import Background from "./background";
import Burger from "./navbar";
import Footer from "./footer";


interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div className="h-screen w-full">
      <Background />
    <div className="max-w-7xl h-full flex flex-col relative mx-auto">
      <Burger />
      {children}
      <Footer />
    </div>
    </div>
  )
}

export default Layout
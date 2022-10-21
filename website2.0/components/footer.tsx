import Image from "next/image";

interface IBurgerProps {
}

const Footer: React.FC<IBurgerProps> = () => {
  return (
    <div className="absolute bottom-0 h-96">
      <p>Footer</p>
    </div>
  )
}

export default Footer
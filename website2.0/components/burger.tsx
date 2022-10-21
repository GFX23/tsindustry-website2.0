import Image from "next/image";
import Link from "next/link";

interface IBurgerProps {
}

const Burger: React.FC<IBurgerProps> = () => {
  return (
<div className="dropdown dropdown-hover dropdown-end my-auto">
  <label tabIndex={0} className="btn btn-ghost"><Image src="/burger.svg" width="36" height="36"/></label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><Link href="/">Home</Link></li>
    <li><Link href="/skills">Skills</Link></li>
    <li><Link href="/blog">Blog</Link></li>
    <li><Link href="/aboutMe">About Me</Link></li>
  </ul>
</div>
  )
}

export default Burger
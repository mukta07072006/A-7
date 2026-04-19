import Image from 'next/image';
import logo from "@/assets/logo.png";

const LogoLoader = () => (
  <div className="flex items-center justify-center h-100 bg-white">
    <div className="animate-pulse">
      <Image 
        src={logo}
        alt="Loading..." 
        width={100} 
        height={100} 
        className="opacity-80"
      />
    </div>
  </div>
);

export default LogoLoader;
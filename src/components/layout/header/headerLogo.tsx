import logo from '@/assets/images/logo2.png'
import Image from 'next/image'

const HeaderLogo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Image src={logo} alt="logo" width={200} height={100}/>
    </div>
  );
};

export default HeaderLogo;
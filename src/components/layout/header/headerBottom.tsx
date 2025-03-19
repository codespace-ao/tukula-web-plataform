import HeaderLogo from '@/components/layout/header/headerLogo';
import HeaderNav from '@/components/layout/header/headerNav';
import HeaderActions from '@/components/layout/header/headerActions';

const HeaderBottom = () => {
  return (
    <div className="flex items-center justify-between py-6 px-[300px]">
      <HeaderLogo />
      <HeaderNav />
      <HeaderActions />
    </div>
  );
};

export default HeaderBottom;
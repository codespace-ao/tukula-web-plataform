import { Search, User, ShoppingCart } from 'lucide-react';

const HeaderActions = () => {
  return (
    <div className="flex space-x-4">
      <Search className="w-6 h-6 cursor-pointer hover:text-yellow-200 transition-colors" />
      <User className="w-6 h-6 cursor-pointer hover:text-yellow-200 transition-colors" />
      <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-yellow-200 transition-colors" />
    </div>
  );
};

export default HeaderActions;
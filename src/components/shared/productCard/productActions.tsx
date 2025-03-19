import { ShoppingCart, ArrowRight, Plus } from 'lucide-react';

const ProductActions = () => {
  return (
    <div className="mt-4 flex space-x-3">
      <button className="border border-primary text-primary p-4 rounded-full transition-colors flex items-center justify-center">
        <ShoppingCart width={20} className="w-4 h-4" />
      </button>
      <button className="flex-1 bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-800 transition-colors flex items-center justify-center">
      Comprar Agora <ArrowRight className="w-4 h-4 mr-2" /> 
      </button>
    </div>
  );
};

export default ProductActions;
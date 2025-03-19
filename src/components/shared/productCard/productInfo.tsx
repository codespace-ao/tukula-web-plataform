interface ProductInfoProps {
    name: string;
    price: string;
    originalPrice?: string;
    description: string;
  }
  
  const ProductInfo = ({ name, price, originalPrice, description }: ProductInfoProps) => {
    return (
      <div className="mt-2">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
        <div className="mt-2 flex items-center space-x-2">
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through font-focus">{originalPrice}</span>
          )}
          <span className="text-3xl font-focus font-bold text-green-600">{price}</span>
        </div>
      </div>
    );
  };
  
  export default ProductInfo;
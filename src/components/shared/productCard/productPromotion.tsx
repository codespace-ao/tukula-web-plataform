interface ProductPromotionProps {
    discount: string;
  }
  
  const ProductPromotion = ({ discount }: ProductPromotionProps) => {
    return (
      <div className="mt-2">
        <span className="bg-primary bg-opacity-10 text-primary text-xs font-bold px-3 py-1 rounded-full absolute top-0 right-3">{discount}</span>
      </div>
    );
  };
  
  export default ProductPromotion;
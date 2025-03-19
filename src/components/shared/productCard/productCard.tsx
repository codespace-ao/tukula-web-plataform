import ProductImage from '@/components/shared/productCard/productImage';
import ProductInfo from '@/components/shared/productCard/productInfo';
import ProductRating from '@/components/shared/productCard/productRating';
import ProductPromotion from '@/components/shared/productCard/productPromotion';
import ProductActions from '@/components/shared/productCard/productActions';

interface ProductCardProps {
  name: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  description: string;
  imageUrl: string;
  rating?: number;
  location?: string;
}

export const ProductCard = ({
  name,
  price,
  originalPrice,
  discount,
  description,
  imageUrl,
  rating = 0,
  location = 'Local',
}: ProductCardProps) => {
  return (
    <div className="bg-white rounded-[26px] overflow-hidden border border-gray-200 hover:shadow-md transition-shadow duration-300 max-w-m w-full mx-auto">
      <ProductImage imageUrl={imageUrl} />
      <div className="p-4">
        <ProductRating rating={rating} location={location} />
        <ProductInfo name={name} price={price} originalPrice={originalPrice} description={description} />
        {discount && <ProductPromotion discount={discount} />}
        <ProductActions />
      </div>
    </div>
  );
};

export default ProductCard;
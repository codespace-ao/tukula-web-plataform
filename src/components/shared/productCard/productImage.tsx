import { Image } from 'lucide-react';

interface ProductImageProps {
  imageUrl: string;
}

const ProductImage = ({ imageUrl }: ProductImageProps) => {
  return (
    <div className="relative h-48 w-full bg-gray-100">
      <img
        src={imageUrl}
        alt="Produto"
        className="w-full h-full object-cover"
      />
      <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
        <Image className="w-4 h-4 mr-1" /> Kero
      </span>
    </div>
  );
};

export default ProductImage;
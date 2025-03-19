import { Star, MapPin } from 'lucide-react';

interface ProductRatingProps {
  rating: number;
  location: string;
}

const ProductRating = ({ rating, location }: ProductRatingProps) => {
  return (
    <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
      <div className="flex items-center">
        <Star className="w-4 h-4 text-yellow-400 mr-1" fill='#facc15' />
        <span>{rating.toFixed(1)}</span>
      </div>
      <div className="flex items-center">
        <MapPin className="w-4 h-4 text-green-500 mr-1" />
        <span>{location}</span>
      </div>
    </div>
  );
};

export default ProductRating;
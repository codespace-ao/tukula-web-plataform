import ProductCard from '@/components/shared/productCard/productCard';
import alface from '@/assets/images/products/alface.jpg'

const products = [
  {
    name: 'Pizza',
    price: '585,00 R$',
    originalPrice: '650,00 R$',
    discount: '10% OFF',
    description: 'Pizza com ingredientes selecionados.',
    imageUrl: alface.src,
  },
  {
    name: 'Sopa de Feijão',
    price: '585,00 R$',
    description: 'Sopa nutritiva e saborosa.',
    imageUrl: alface.src,
  },
  {
    name: 'Sobremesa de Frutas',
    price: '585,00 R$',
    description: 'Sobremesa refrescante.',
    imageUrl: alface.src,
  },
  {
    name: 'Pizza',
    price: '585,00 R$',
    originalPrice: '650,00 R$',
    discount: '10% OFF',
    description: 'Pizza com ingredientes selecionados.',
    imageUrl: alface.src,
  },
  {
    name: 'Sopa de Feijão',
    price: '585,00 R$',
    description: 'Sopa nutritiva e saborosa.',
    imageUrl: alface.src,
  },
  {
    name: 'Sobremesa de Frutas',
    price: '585,00 R$',
    description: 'Sobremesa refrescante.',
    imageUrl: alface.src,
  },
  {
    name: 'Pizza',
    price: '585,00 R$',
    originalPrice: '650,00 R$',
    discount: '10% OFF',
    description: 'Pizza com ingredientes selecionados.',
    imageUrl: alface.src,
  },
  {
    name: 'Sopa de Feijão',
    price: '585,00 R$',
    description: 'Sopa nutritiva e saborosa.',
    imageUrl: alface.src,
  },
  {
    name: 'Sobremesa de Frutas',
    price: '585,00 R$',
    description: 'Sobremesa refrescante.',
    imageUrl: alface.src,
  },
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-8 mt-2">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          originalPrice={product.originalPrice}
          discount={product.discount}
          description={product.description}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
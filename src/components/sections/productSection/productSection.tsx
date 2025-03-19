import CategorySidebar from '@/components/categorySidebar/categorySidebar';
import FilterBar from '@/components/filterBar/filterBar';
import ProductGrid from '@/components/productGrid/productGrid';

export const ProductSection = () => {
  return (
    <section className="w-full px-[300px] py-4 mt-4">
      <div className="flex flex-col lg:flex-row gap-6">
        <CategorySidebar />
        <div className="flex-1">
          <FilterBar />
          <ProductGrid />
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
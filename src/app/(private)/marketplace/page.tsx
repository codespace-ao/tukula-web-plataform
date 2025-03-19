import ProductCard from "@/components/shared/productCard/productCard";
import alface from '@/assets/images/products/alface.jpg'
import ProductSection from "@/components/sections/productSection/productSection";

export default function Marketplace() {
    return (
        <main>
            {/* <ProductCard
        name="Alface"
        price="750 AKZ"
        originalPrice="1000 AKZ"
        discount="50% OFF"
        description="Queque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        imageUrl={alface.src}
        rating={4.5}
        location="Kero Kilamba"
      /> */}
      <ProductSection/>
        </main>
    )
}
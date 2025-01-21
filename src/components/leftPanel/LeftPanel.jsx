import { FilterSection } from "./FilterSection";
import { ProductGrid } from "./ProductGrid";

export const LeftPanel = () => {
  return (
    <section>
      <h1 className="text-4xl font-bold text-center">Simple E-commerce</h1>
      <FilterSection />
      <ProductGrid />
    </section>
  );
};

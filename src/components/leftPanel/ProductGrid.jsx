import { products } from '../../data';
import { useCart } from '../../hooks';

export const ProductGrid = () => {
  const { addToCart } = useCart();
  return (
    <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-4 text-center">
      {products.map((product) => (
        <div
          className="flex flex-col space-y-2 font-semibold bg-white lg:max-w-[270px] w-full rounded-lg p-4 shadow-lg transition ease-in-out duration-500 hover:scale-105"
          key={product.id}
        >
          <img
            className="w-full h-60 object-contain rounded-lg"
            src={product.image}
            alt={product.name}
          />
          <h1 className="text-gray-800 text-lg">{product.name}</h1>
          <p className="text-gray-500 text-md">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 hover:bg-blue-400 text-white w-1/2 rounded-lg p-2 mx-auto"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </section>
  );
};

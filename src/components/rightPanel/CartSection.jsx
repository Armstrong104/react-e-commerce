import { useCart } from '../../contexts/CartContext';

export const CartSection = () => {
    const { cart } = useCart();
  return (
    <section className="w-full space-y-3 flex-1 sticky top-0 text-center">
      <h1 className="text-xl font-bold">Shopping Cart</h1>
      <ul>
        {cart.map((cartItem) => (
          <li key={cartItem.id} className="flex justify-between items-center">
            <p>{cartItem.name}</p>
            <p>${cartItem.price}</p>
          </li>
        ))}
      </ul>
      <button className="bg-blue-500 hover:bg-blue-400 text-white w-full rounded-lg p-2 mx-auto">
        Checkout
      </button>
    </section>
  );
};

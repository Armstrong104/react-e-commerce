import { useCart } from '../../hooks';

export const CartSection = () => {
  const {
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    totalPrice,
    checkOut,
  } = useCart();
  return (
    <section className="w-full lg:w-[30%] text-center mx-auto">
      <div className="bg-slate-100 shadow-lg rounded-lg p-4 space-y-3 sticky top-4">
        <h1 className="text-xl font-bold">Shopping Cart</h1>
        <ul className="flex flex-col justify-between items-start space-y-2">
          {cart.map((cartItem) => (
            <li
              key={cartItem.id}
              className="mb-2 flex flex-wrap flex-col lg:flex-row justify-between items-center w-full"
            >
              <div className="flex-grow text-lg lg:text-sm font-semibold text-center md:text-left">{`${
                cartItem.name
              } X ${cartItem.quantity} = $${
                cartItem.quantity * cartItem.price
              }`}</div>
              <div className="flex space-x-1 mt-2 md:mt-0">
                <button onClick={() => addToCart(cartItem)}>
                  <img
                    className="w-[1.2rem] h-[1.2rem] object-contain"
                    src="assets/images/increase.png"
                    alt="Increase"
                  />
                </button>
                <button onClick={() => decreaseQuantity(cartItem.id)}>
                  <img
                    className="w-[1.6rem] h-[1.6rem] object-contain"
                    src="assets/images/decrease.png"
                    alt="Decrease"
                  />
                </button>
                <button onClick={() => removeFromCart(cartItem.id)}>
                  <img
                    className="w-[1.5rem] h-[1.5rem] object-contain"
                    src="assets/images/delete.png"
                    alt="Remove"
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>
        {cart.length > 0 ? (
          <>
            <hr className="border border-gray-300" />
            <div className="text-xl font-semibold">
              Total Price: ${totalPrice}
            </div>
          </>
        ) : (
          <div className="text-lg font-semibold text-red-500">
            Cart is empty
          </div>
        )}
        <button
          onClick={() => checkOut()}
          className="bg-blue-500 hover:bg-blue-400 text-white w-full md:w-1/2 rounded-lg p-2 mx-auto"
        >
          Checkout
        </button>
      </div>
    </section>
  );
};

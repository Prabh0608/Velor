const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="w-full flex items-center h-20 mb-[15px]">
      <img src={imageUrl} alt={name} className="w-[30%] border border-black p-[2px] rounded" />
      <div className="w-[70%] flex flex-col items-start justify-center py-2.5 px-5">
        <span className="text-sm font-semibold truncate w-full">{name}</span>
        <span className="text-sm text-gray-500">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;

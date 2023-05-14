const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 border-b-4">
      <div className="flex items-center">
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/online-store.png"
          alt="logo"
        />
        <h1 className="text-2xl text-white font-bold ml-2">russ</h1>
      </div>
      <div className="flex items-center">
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/shopping-cart.png"
          alt="cart"
        />
        <span className="text-white font-bold ml-2">0</span>
      </div>
    </header>
  );
};

export default Header;

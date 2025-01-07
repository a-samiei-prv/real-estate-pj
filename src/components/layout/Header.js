import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            三幸グループ株式
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-orange-500">Home</Link>
            <Link to="/buy" className="hover:text-orange-500">Buy</Link>
            <Link to="/rent" className="hover:text-orange-500">Rent</Link>
            <Link to="/short-term" className="hover:text-orange-500">Short-term</Link>
            <Link to="/blog" className="hover:text-orange-500">Blog</Link>
            <Link to="/about" className="hover:text-orange-500">About</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 border border-orange-500 rounded hover:bg-orange-500 hover:text-white">
              Start here
            </button>
            <button className="px-4 py-2 hover:text-orange-500">
              My account
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
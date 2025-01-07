import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <Link to="/" className="text-2xl font-bold mb-4 block">
              Sankou Group
            </Link>
            <div className="flex space-x-4 mt-4">
              {/* Social media icons */}
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/rent" className="block hover:text-orange-500">Rent</Link>
              <Link to="/buy" className="block hover:text-orange-500">Buy</Link>
              <Link to="/blog" className="block hover:text-orange-500">Blog</Link>
              <Link to="/about" className="block hover:text-orange-500">About</Link>
            </div>
          </div>
          <div className="md:col-span-2">
            {/* <h3 className="font-bold mb-4">Become an Sankou Group insider</h3>
            <p className="mb-4">Subscribe to our newsletter for updated and latest news</p> */}
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow p-2 rounded bg-white/10"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-orange-500 rounded hover:bg-orange-600"
              >
                send
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 All rights Reserved. Sankou Group</p>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-orange-500">Terms</Link>
            <Link to="/privacy" className="hover:text-orange-500">Privacy</Link>
            <Link to="/compliance" className="hover:text-orange-500">Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
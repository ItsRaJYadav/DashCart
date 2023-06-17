import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 ">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 lg:w-auto mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">DashKart</h2>
            <p className="text-gray-400">
              this is the about and description of the  DashKart
            </p>
          </div>
          <div className="w-full md:w-1/3 lg:w-auto mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links 1</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-300 hover:text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-auto mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links 2</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-300 hover:text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-auto">
            <h3 className="text-lg font-semibold mb-4">Quick Links 3</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-300 hover:text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-auto">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white mr-2"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white mr-2"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FiSearch, FiShoppingCart, FiHeart, FiMenu, FiX, FiBox, FiLayers, FiUser } from 'react-icons/fi';

const Header = () => {
    const [searchInput, setSearchInput] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleSearch = () => {

        console.log('Searching for:', searchInput);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-gray-900 text-white">
            <nav className="container mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between">

                <div className="flex flex-row items-center justify-between">
                    <div className="md:hidden mr-9">
                        <button
                            className="text-white focus:outline-none"    //humburger button
                            onClick={toggleMobileMenu}
                        >
                            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                    <div className="flex items-center ml-9">
                        <Link href='/' className="text-xl font-bold ">DashCart</Link>
                    </div>
                    <div className="ml-14 flex items-center lg:hidden">
                        <Link href="/account" className="mr-4">Account</Link>
                        <Link href="/cart">
                            <FiShoppingCart />
                        </Link>
                    </div>
                </div>


                <div className="flex items-center mt-4 md:mt-0">
                    <select
                        className=" px-4 py-2 rounded-md border border-gray-400 focus:outline-none text-gray-900 mr-2 "
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="mobile">Mobile</option>
                        <option value="cloths">Cloths</option>
                        <option value="many more">Many More</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-4 py-2 rounded-md border border-gray-400 focus:outline-none text-gray-900"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button
                        className="bg-gray-600 text-white px-4 py-2 ml-2 rounded-md"
                        onClick={handleSearch}
                    >
                        <FiSearch />
                    </button>
                </div>

                <ul className="hidden md:flex space-x-4 mt-4 md:mt-0 mr-5">
                    <li>
                        <Link href="/products">Products</Link>
                    </li>
                    <li>
                        <Link href="/products/categories">Categories</Link>
                    </li>
                    <li>
                        <Link href="/login">Login</Link>
                    </li>
                    
                    <li>
                        <Link href="/user">Account</Link>
                    </li>
                    <li>
                        <Link href="/cart">
                            <FiShoppingCart />
                        </Link>
                    </li>
                    <li>
                        <Link href="/wishlist">
                            <FiHeart />
                        </Link>
                    </li>
                </ul>

                <div
                    className={`fixed top-0 left-0 h-full w-64 bg-gray-800 transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >
                    <button
                        className="text-white absolute top-4 right-4 focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        <FiX />
                    </button>
                    {/* off canvas */}
                    <ul className="flex flex-col items-center space-y-4 mt-16">
                        <li className="flex items-center">
                            <FiBox size={18} className="mr-2" />
                            <Link href="/">Products</Link>
                        </li>
                        <li className="flex items-center">
                            <FiLayers size={18} className="mr-2" />
                            <Link href="/categories">Categories</Link>
                        </li>
                        <li className="flex items-center">
                            <FiUser size={18} className="mr-2" />
                            <Link href="/account">Account</Link>
                        </li>
                        <li className="flex items-center">
                            <FiShoppingCart size={18} className="mr-2" />
                            <Link href="/cart">Cart</Link>
                        </li>
                        <li className="flex items-center">
                            <FiHeart size={18} className="mr-2" />
                            <Link href="/wishlist">Wishlist</Link>
                        </li>

                    </ul>


                </div>
            </nav>
        </header>
    );
};

export default Header;

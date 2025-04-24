import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const regions = ['Deruta', 'Positano', 'Capri', 'Sorrento', 'Store-Gallery'];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Coppola Artistica</h1>
        <button onClick={() => setOpen(!open)} className="md:hidden">☰</button>
        <div className={`${open ? 'block' : 'hidden'} md:flex space-x-4`}>
          <Link href="/" className="px-2 py-1 hover:text-blue-600">About</Link>
          <Link href="/regions/store-gallery" className="px-2 py-1 hover:text-blue-600">Gallery</Link>
          <div className="relative group">
            <button className="px-2 py-1 hover:text-blue-600">Products ▾</button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg p-2">
              {regions.map(region => (
                <Link
                  key={region}
                  href={`/regions/${region.toLowerCase()}`}
                  className="block px-2 py-1 hover:bg-gray-100"
                >
                  {region.replace('-', ' ')}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/ebay" className="px-2 py-1 hover:text-blue-600">eBay Listings</Link>
          <Link href="/reviews" className="px-2 py-1 hover:text-blue-600">Reviews</Link>
          <Link href="/blog" className="px-2 py-1 hover:text-blue-600">Venice Blog</Link>
          <Link href="/contact" className="px-2 py-1 hover:text-blue-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const regions = ['Deruta','Positano','Capri','Sorrento','Store-Gallery'];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Coppola Artistica</h1>
        <button onClick={() => setOpen(!open)} className="md:hidden">☰</button>
        <div className={`${open ? 'block' : 'hidden'} md:flex space-x-4`}>
          <Link href="/"><a>About</a></Link>
          <Link href="/regions/store-gallery"><a>Gallery</a></Link>
          <div className="relative group">
            <button>Products ▾</button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg p-2">
              {regions.map(region => (
                <Link key={region} href={`/regions/${region.toLowerCase()}`}>
                  <a className="block px-2 py-1">{region.replace('-', ' ')}</a>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/ebay"><a>eBay Listings</a></Link>
          <Link href="/reviews"><a>Reviews</a></Link>
          <Link href="/blog"><a>Venice Blog</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
        </div>
      </div>
    </nav>
  );
}

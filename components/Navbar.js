```javascript
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const regions = ['Deruta', 'Positano', 'Capri', 'Sorrento'];

return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold cursor-pointer hover:text-yellow-500">Coppola Artistica</Link>
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">☰</button>
        <div className={`${open ? 'block' : 'hidden'} md:flex space-x-4`}
        >
          <Link href="/" className="px-2 py-1 hover:text-yellow-500">Home</Link>
          <Link href="/shop" className="px-2 py-1 hover:text-yellow-500">Shop</Link>
          <Link href="/reviews" className="px-2 py-1 hover:text-yellow-500">Reviews</Link>
          <Link href="/blog" className="px-2 py-1 hover:text-yellow-500">Blog</Link>
          <Link href="/contact" className="px-2 py-1 hover:text-yellow-500">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
```

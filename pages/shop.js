```javascript
import { useState } from 'react';
import Image from 'next/image';
import productsData from '../data/products.json';

export default function Shop() {
  const [term, setTerm] = useState('');
  const [ebayItems, setEbayItems] = useState([]);

  const handleSearch = async e => {
    e.preventDefault();
    const res = await fetch(`/api/ebay?term=${encodeURIComponent(term)}`);
    const data = await res.json();
    setEbayItems(data);
  };  

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">🍋 Shop Our Collection & eBay Listings</h2>

      <section className="mb-8">
        <h3 className="text-2xl mb-2">Our Handcrafted Products</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {productsData.flatMap(p => p.items).map(item => (
            <div
              key={item.name}
              className="bg-white p-4 rounded shadow hover:shadow-lg hover:animate-float transition"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={200}
                objectFit="contain"
              />
              <h4 className="mt-2 font-semibold">{item.name}</h4>
              <p>${item.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl mb-2">Search eBay Listings</h3>
        <form onSubmit={handleSearch} className="mb-4 flex">
          <input
            type="text"
            value={term}
            onChange={e => setTerm(e.target.value)}
            placeholder="Search eBay…"
            className="border px-3 py-2 rounded w-full"
          />
          <button type="submit" className="ml-2 bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500">
            Search
          </button>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ebayItems.map(item => (
            <a
              key={item.itemId}
              href={item.viewItemURL}
              target="_blank"
              className="bg-white p-4 rounded shadow hover:shadow-lg hover:animate-float transition"
            >
              <Image
                src={item.galleryURL || '/images/placeholder.png'}
                width={200}
                height={200}
                objectFit="contain"
              />
              <p className="mt-2 text-sm">{item.title}</p>
              <p>${item.sellingStatus.currentPrice.value}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
```

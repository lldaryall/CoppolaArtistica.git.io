import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Ebay() {
  const [term, setTerm] = useState('pottery');
  const [items, setItems] = useState([]);
  const [wish, setWish] = useState(() => JSON.parse(localStorage.getItem('wishlist')||'[]'));

  useEffect(() => {
    fetch(`/api/ebay?term=${encodeURIComponent(term)}`)
      .then(r => r.json())
      .then(data => setItems(data));
  }, [term]);

  const toggleWish = item => {
    let next = wish.find(i=>i.itemId===item.itemId)
      ? wish.filter(i=>i.itemId!==item.itemId)
      : [...wish, item];
    setWish(next);
    localStorage.setItem('wishlist', JSON.stringify(next));
  };

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Live eBay Listings</h2>
      <input
        value={term}
        onChange={e => setTerm(e.target.value)}
        placeholder="Search eBay…"
        className="border px-3 py-2 rounded mb-4 w-full"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map(item => (
          <div key={item.itemId} className="border p-4 rounded relative">
            {item.isNew && (
              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                New
              </span>
            )}
            <a href={item.viewItemURL} target="_blank">
              <Image
                src={item.galleryURL || '/images/placeholder.png'}
                width={200} height={200} objectFit="contain"
              />
            </a>
            <h3 className="mt-2 font-semibold">{item.title}</h3>
            <p className="mt-1">${item.sellingStatus.currentPrice.value}</p>
            <button
              onClick={() => toggleWish(item)}
              className="mt-2 text-sm text-blue-600"
            >
              {wish.find(i=>i.itemId===item.itemId) ? '★ Saved' : '☆ Save'}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

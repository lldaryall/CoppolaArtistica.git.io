```javescript
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [recent, setRecent] = useState([]);
  useEffect(() => {
    fetch(`/api/ebay?term=`)
      .then(r => r.json())
      .then(data => setRecent(data.slice(0,12)));
  }, []);

  return (
    <main className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-start p-6 bg-white bg-opacity-80">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-bold mb-4">Coppola Artistica</h1>
        <p className="text-lg mb-8">
          Founded in Sorrento, Italy over 60 years ago by my grandparents.<br />
          We brought handcrafted Italian pottery to Venice, FL 20 years ago.
        </p>
      </div>

      <section className="w-full max-w-5xl mt-8">
        <h2 className="text-3xl font-semibold mb-4">🍋 Recently Listed</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {recent.map(item => (
            <a
              key={item.itemId}
              href={item.viewItemURL}
              target="_blank"
              className="block bg-white p-4 rounded shadow hover:shadow-lg hover:animate-float transition"
            >
              <Image
                src={item.galleryURL || '/images/placeholder.png'}
                width={200}
                height={200}
                objectFit="contain"
              />
              <p className="mt-2 text-sm">{item.title}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
```

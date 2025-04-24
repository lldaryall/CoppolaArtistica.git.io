import products from '../../data/products.json';
import Image from 'next/image';

export default function Region({ items }) {
  return (
    <main className="max-w-4xl mx-auto p-6">
      {items.map(item => (
        <div key={item.name} className="mb-6">
          <h3 className="text-2xl font-semibold">{item.name}</h3>
          <Image src={item.image} alt={item.name} width={400} height={300} />
          <p>Category: {item.category}</p>
          <p>Price: ${item.price}</p>
          <p>Colors: {item.colors.join(', ')}</p>
        </div>
      ))}
    </main>
  );
}

export async function getStaticPaths() {
  const paths = products.map(p => ({ params: { region: p.region } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const data = products.find(p => p.region === params.region);
  return { props: { items: data ? data.items : [] } };
}

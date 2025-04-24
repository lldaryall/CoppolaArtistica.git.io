
const reviews = [
  { source: 'Yelp', link: 'https://www.yelp.com/biz/coppola-artistica-venice', text: 'Great pottery!', rating: 5 },
  { source: 'SRQ Magazine', link: 'https://www.srqmagazine.com/articles/2023/Made-in-Italy', text: 'Featured artisan quality.', rating: 4 },
  { source: 'Google', link: 'https://www.google.com/maps/place/Coppola+Artistica', text: 'Excellent craftsmanship!', rating: 5 },
  { source: 'TripAdvisor', link: 'https://www.tripadvisor.com/Attraction_Review-g34241-d4547774-Reviews-Coppola_Artistica-Venice_Florida.html', text: 'A must-visit!', rating: 5 }
];

export default function Reviews() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Customer Reviews & Features</h2>
      {reviews.map((r, i) => (
        <div key={i} className="mb-4">
          <a href={r.link} target="_blank" className="text-yellow-600 hover:underline">[{r.source}]</a>
          <p className="inline ml-2">{r.text} — {r.rating}⭐</p>
        </div>
      ))}
    </main>
  );
}


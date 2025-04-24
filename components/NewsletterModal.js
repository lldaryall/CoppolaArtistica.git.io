import { useEffect, useState } from 'react';

export default function NewsletterModal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (!sessionStorage.getItem('seenModal')) {
      setTimeout(() => setOpen(true), 2000);
      sessionStorage.setItem('seenModal', '1');
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Thanks! We’ll notify you at ${email}`);
    setOpen(false);
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-sm w-full relative">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >✕</button>
        <h3 className="text-xl font-bold mb-4">Join Our Newsletter</h3>
        <p className="mb-4">Get the latest sales & new listings straight to your inbox.</p>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="border px-3 py-2 rounded"
          />
          <button type="submit" 
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

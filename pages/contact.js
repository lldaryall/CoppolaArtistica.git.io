```javascript
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', msg: '' });
  const handleSubmit = e => {
    e.preventDefault();
    alert(`Thanks, ${form.name}! We’ll get back to you soon.`);
    setForm({ name: '', email: '', msg: '' });
  };

  return (
    <main className="max-w-md mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          required
          placeholder="Your name"
          value={form.name}
          onChange={e => setForm({...form, name: e.target.value})}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="email"
          required
          placeholder="Your email"
          value={form.email}
          onChange={e => setForm({...form, email: e.target.value})}
          className="w-full border px-3 py-2 rounded"
        />
        <textarea
          required
          placeholder="Your message"
          rows={4}
          value={form.msg}
          onChange={e => setForm({...form, msg: e.target.value})}
          className="w-full border px-3 py-2 rounded"
        />
        <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Send Message
        </button>
      </form>
    </main>
  );
}
```

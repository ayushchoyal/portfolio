import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    const message = `Hi, I'm ${name}. ${msg}`;
    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/919755926645?text=${encodedMsg}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 px-6 bg-white">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <form onSubmit={handleSend} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 border rounded h-32"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
            Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

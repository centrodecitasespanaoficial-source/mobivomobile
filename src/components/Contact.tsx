import { useState } from 'react';
import { Mail, Phone, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-pad bg-gray-50">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">Need Help?</h2>
          <p className="mt-3 text-lg text-gray-500">We are here to answer your questions.</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <a href="mailto:hello@mobivo.co.uk" className="card card-hover flex items-center gap-4 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-50 text-electric-600">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-semibold text-navy-900">hello@mobivo.co.uk</p>
              </div>
            </a>

            <div className="card card-hover flex items-center gap-4 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success-50 text-success-600">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="font-semibold text-navy-900">0800 000 0000</p>
              </div>
            </div>

            <div className="card card-hover flex items-center gap-4 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Opening Hours</p>
                <p className="font-semibold text-navy-900">Monday–Friday, 9am–6pm</p>
              </div>
            </div>
          </div>

          <div className="card p-6 md:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center animate-scale-in">
                <CheckCircle2 className="h-16 w-16 text-success-500" />
                <p className="mt-4 text-lg font-bold text-navy-900">Thanks! Your message has been received.</p>
                <p className="mt-1 text-sm text-gray-500">We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy-800">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="input-field"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy-800">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="input-field"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy-800">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="input-field resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-electric-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-electric-600 hover:shadow-lg hover:shadow-electric-500/30 active:scale-95"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

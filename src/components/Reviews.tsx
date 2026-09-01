import { Star, Quote } from 'lucide-react';
import { reviews } from '@/data';

export default function Reviews() {
  return (
    <section className="section-pad bg-gray-50">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">What Customers Say</h2>
          <p className="mt-3 text-lg text-gray-500">Real feedback from our demo customers.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, i) => (
            <div key={i} className="card card-hover relative p-6">
              <Quote className="absolute right-5 top-5 h-8 w-8 text-gray-100" />
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className={`h-4 w-4 ${idx < review.rating ? 'fill-accent-400 text-accent-400' : 'fill-gray-200 text-gray-200'}`}
                  />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">"{review.text}"</p>
              <div className="mt-5 border-t border-gray-100 pt-4">
                <p className="text-sm font-bold text-navy-900">— {review.name}</p>
                <p className="text-xs text-gray-400">{review.location}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-gray-400">
          Reviews are placeholder/demo content for development purposes.
        </p>
      </div>
    </section>
  );
}

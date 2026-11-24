'use client';

import { Quote } from 'lucide-react';
import { normalFont } from '@/app/fonts';
const testimonials = [
  {
    id: 1,
    quote: 'This product has completely transformed how I work. The attention to detail is incredible.',
    author: 'Sarah Chen',
    role: 'Product Designer',
  },
  {
    id: 2,
    quote: 'I was amazed by the quality and the seamless integration. Highly recommended for anyone.',
    author: 'Marcus Johnson',
    role: 'Startup Founder',
  },
  {
    id: 3,
    quote: 'Best investment I made this year. The support team is responsive and helpful.',
    author: 'Elena Rodriguez',
    role: 'Marketing Manager',
  },
  {
    id: 4,
    quote: 'The design is elegant and the performance is outstanding. Really impressed.',
    author: 'James Wilson',
    role: 'Tech Lead',
  },
  {
    id: 5,
    quote: 'Worth every penny. Simple to use yet powerful enough for complex workflows.',
    author: 'Priya Patel',
    role: 'Data Scientist',
  },
  {
    id: 6,
    quote: 'Finally found something that actually solves the problem. Five stars!',
    author: 'David Kim',
    role: 'Operations Director',
  },
  {
    id: 7,
    quote: 'The team behind this genuinely cares about their customers. Exceptional experience.',
    author: 'Lisa Anderson',
    role: 'HR Specialist',
  },
  {
    id: 8,
    quote: 'Exceeded all my expectations. The features are intuitive and well-thought-out.',
    author: 'Robert Taylor',
    role: 'Consultant',
  },
  {
    id: 9,
    quote: 'Game-changer for our entire workflow. Productivity has increased significantly.',
    author: 'Mia Thompson',
    role: 'Project Manager',
  },
  {
    id: 10,
    quote: 'Phenomenal product with outstanding customer service. Highly satisfied.',
    author: 'Alex Martinez',
    role: 'Software Engineer',
  },
  {
    id: 11,
    quote: 'The value proposition is unmatched. Every feature serves a real purpose.',
    author: 'Sophie Laurent',
    role: 'CEO',
  },
  {
    id: 12,
    quote: 'Simple yet sophisticated. This is how software should be designed.',
    author: 'Thomas Brown',
    role: 'UX Researcher',
  },
  {
    id: 13,
    quote: 'Incredible solution that has saved us countless hours. Truly transformative.',
    author: 'Victoria Lee',
    role: 'Finance Manager',
  },
  {
    id: 14,
    quote: 'The best experience I have had with a product in years. Absolutely stellar.',
    author: 'Christopher Moore',
    role: 'Sales Director',
  },
  {
    id: 15,
    quote: 'Delivers on every promise. A testament to excellent engineering and design.',
    author: 'Jessica White',
    role: 'Brand Strategist',
  },
];

function TestimonialCard({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-4 sm:p-5 md:p-6 min-h-48 sm:min-h-56 md:min-h-64 flex flex-col justify-between hover:border-neutral-700 hover:bg-neutral-100/10 transition-all duration-300 group">

      <div className="mb-3 sm:mb-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-neutral-800/50 flex items-center justify-center group-hover:bg-neutral-700/80 transition-all duration-300">
          <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-100" strokeWidth={1.5} />
        </div>
      </div>

      <p className={`${normalFont.className} text-neutral-400 leading-relaxed font-light text-xs sm:text-sm flex-1 group-hover:text-neutral-100 transition-colors duration-300`}>
        {quote}
      </p>

      <div className="my-3 sm:my-4 h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent group-hover:via-zinc-100/90 transition-all duration-300" />

      <div className="space-y-0.5 sm:space-y-1">
        <p className={`${normalFont.className} font-bold text-neutral-100 text-xs sm:text-sm`}>{author}</p>
        <p className="text-neutral-500 text-[11px] sm:text-xs">{role}</p>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const scrollTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  const leftColumn = scrollTestimonials.filter((_, i) => i % 2 === 0);
  const rightColumn = scrollTestimonials.filter((_, i) => i % 2 === 1);

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-black overflow-hidden flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-4 mb-10 sm:mb-16 text-center">
        <div className="space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white" 
          style={{ fontFamily: "var(--font-title)" }}>
            Testimonials
          </h2>
          <p className={`${normalFont.className} text-neutral-400 text-sm sm:text-base md:text-lg px-4 max-w-2xl mx-auto font-light`}>
            See what our customers are saying about their experience with us
          </p>
        </div>
      </div>

      <div className="relative h-[480px] sm:h-[600px] md:h-[700px] w-full max-w-5xl mx-auto overflow-hidden group">
        <div className="absolute top-0 left-0 right-0 h-28 sm:h-40 bg-gradient-to-b from-black via-black/20 to-transparent z-20 pointer-events-none" />

        <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-40 bg-gradient-to-t from-black via-black/70 to-transparent z-20 pointer-events-none" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 px-4 h-full min-h-full">
          <div className="animate-scroll-up space-y-4 sm:space-y-6 h-full hover:pause-animation">
            {leftColumn.map((testimonial, index) => (
              <TestimonialCard
                key={`left-${testimonial.id}-${index}`}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
              />
            ))}
          </div>

          <div className="hidden sm:block animate-scroll-down space-y-4 sm:space-y-6 h-full hover:pause-animation">
            {rightColumn.map((testimonial, index) => (
              <TestimonialCard
                key={`right-${testimonial.id}-${index}`}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

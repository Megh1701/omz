'use client';

import { Quote } from 'lucide-react';
import { normalFont } from '@/app/fonts';

const testimonials = [
  {
    id: 1,
    quote: 'Overa Wealth helped us find the right health insurance for our family. Their guidance and service were excellent.',
    author: 'Hetal Patel',
    role: 'Health Insurance Customer',
  },
  {
    id: 2,
    quote: 'The team explained different life insurance plans clearly and helped me understand which policy suited my needs.',
    author: 'Jayesh Shah',
    role: 'Life Insurance Customer',
  },
  {
    id: 3,
    quote: 'I wanted to start investing in mutual funds but did not know where to begin. Overa made the entire process easy to understand.',
    author: 'Kiran Desai',
    role: 'Mutual Fund Investor',
  },
  {
    id: 4,
    quote: 'Renewing my car insurance was quick and hassle-free. I really appreciate the professional support.',
    author: 'Mitesh Thakkar',
    role: 'Motor Insurance Customer',
  },
  {
    id: 5,
    quote: 'We needed a business loan, and the Overa team helped us understand the available options and documentation process.',
    author: 'Nilesh Parikh',
    role: 'Business Loan Customer',
  },
  {
    id: 6,
    quote: 'Choosing health insurance for my family became much easier with the right guidance from the Overa team.',
    author: 'Pooja Mehta',
    role: 'Health Insurance Customer',
  },
  {
    id: 7,
    quote: 'Excellent investment guidance, transparent information and responsive service. I had a very good experience with Overa.',
    author: 'Dhruv Patel',
    role: 'Mutual Fund Investor',
  },
  {
    id: 8,
    quote: 'The team helped me compare different home loan options and understand the process before making my decision.',
    author: 'Maulik Shah',
    role: 'Home Loan Customer',
  },
  {
    id: 9,
    quote: 'Having insurance and investment guidance under one roof made financial planning much more convenient for my family.',
    author: 'Aarti Joshi',
    role: 'Financial Planning Customer',
  },
  {
    id: 10,
    quote: 'Getting two-wheeler insurance was simple and convenient. The team was quick to respond to all my queries.',
    author: 'Manan Rawal',
    role: 'Vehicle Insurance Customer',
  },
  {
    id: 11,
    quote: 'I started investing through SIP and received a clear explanation of investment risks and long-term financial goals.',
    author: 'Snehal Vyas',
    role: 'SIP Investor',
  },
  {
    id: 12,
    quote: 'The Overa team helped me explore suitable personal loan options. The overall experience was smooth and professional.',
    author: 'Ankit Patel',
    role: 'Personal Loan Customer',
  },
  {
    id: 13,
    quote: 'We needed group health insurance for our company. The team explained different options and helped us understand the coverage.',
    author: 'Ronak Gandhi',
    role: 'Business Owner',
  },
  {
    id: 14,
    quote: 'I received helpful guidance for both insurance and investments. Every question was answered patiently and professionally.',
    author: 'Divya Trivedi',
    role: 'Overa Customer',
  },
  {
    id: 15,
    quote: 'The team understood my financial goals and explained suitable investment options. I appreciated their professional approach.',
    author: 'Parth Bhatt',
    role: 'Investor',
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

export default function LoanMarquee() {
  const loanCompanies = [
    "HDFC Bank",
    "ICICI Bank",
    "Axis Bank",
    "SBI",
    "IDFC First Bank",
    "Kotak Mahindra Bank",
    "Bajaj Finserv",
    "Tata Capital",
    "Aditya Birla Finance",
    "IndusInd Bank",
    "Yes Bank",
    "L&T Finance",
  ];

  // Repeat for seamless scroll
  const repeatedCompanies = [...loanCompanies, ...loanCompanies];

  return (
    <section className="w-full px-4 sm:px-8 md:px-16 py-8 sm:py-12 md:py-16 flex flex-col md:flex-row items-center bg-black text-white relative gap-4 md:gap-0">
      {/* Right Side on Desktop, bottom on Mobile: Marquee */}
      <div className="w-full md:w-3/4 relative overflow-hidden order-2 md:order-1">
        {/* Transparent fade edges */}
        <div className="absolute inset-y-0 left-0 w-12 sm:w-16 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 sm:w-16 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

        {/* Direction changed here */}
        <div className="inline-block whitespace-nowrap animate-marquee-reverse">
          {repeatedCompanies.map((company, idx) => (
            <span
              key={idx}
              className="mx-6 sm:mx-8 md:mx-12 text-sm sm:text-base md:text-xl font-semibold text-neutral-600 leading-snug"
            >
              {company}
            </span>
          ))}
        </div>
      </div>

      {/* DIVIDER LINE */}
      <div className="hidden md:block h-16 w-[1px] bg-white mx-1 mask-t-from-50% mask-b-from-50% order-2" />

      {/* Label */}
      <div className="w-full md:w-1/4 pl-0 md:pl-6 z-10 flex flex-col items-center md:items-end order-1 md:order-3">
        <h2
          style={{ fontFamily: "var(--font-title)" }}
          className="text-xl sm:text-2xl font-bold"
        >
          Loan Companies
        </h2>
        <h4 style={{ fontFamily: "var(--font-title)" }} className="text-sm sm:text-base text-zinc-400">
          we work with
        </h4>
      </div>
    </section>
  );
}

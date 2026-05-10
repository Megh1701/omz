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
    <section className="w-full p-16 flex items-center bg-black text-white relative">
      {/* Left Side: Static Label */}
     

     
      {/* Right Side: Marquee */}
      <div className="w-3/4 relative overflow-hidden">
        {/* Transparent fade edges */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

        {/* 👇 Direction changed here */}
        <div className="inline-block whitespace-nowrap animate-marquee-reverse">
          {repeatedCompanies.map((company, idx) => (
            <span
              key={idx}
              className="mx-12 text-xl font-semibold text-neutral-600 leading-snug"
            >
              {company}
            </span>
          ))}
        </div>
      </div>

 {/* DIVIDER LINE */}
      <div className="h-16 w-[1px] bg-white mx-1 mask-t-from-50% mask-b-from-50%" />

       <div className="w-1/4 pl-6 z-10 flex flex-col items-end">
        <h2
          style={{ fontFamily: "var(--font-title)" }}
          className="text-2xl font-bold"
        >
          Loan Companies
        </h2>
        <h4 style={{ fontFamily: "var(--font-title)" }}>
          we worked with
        </h4>
      </div>
    </section>
  );
}

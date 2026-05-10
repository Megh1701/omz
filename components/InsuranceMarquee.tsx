export default function InsuranceMarquee() {
  const insuranceCompanies = [
    "LIC",
    "HDFC Life",
    "ICICI Prudential Life",
    "SBI Life",
    "Max Life",
    "ICICI Lombard",
    "HDFC ERGO",
    "Bajaj Allianz",
    "Tata AIG",
    "IFFCO Tokio",
    "New India Assurance",
    "Kotak Mahindra General",
    "Future Generali",
  ];

  // Repeat for seamless scroll
  const repeatedCompanies = [...insuranceCompanies, ...insuranceCompanies];

  return (
    
    <section className="w-full p-16 flex items-center bg-black text-white relative ">
      {/* Left Side: Static Label */}
      <div
  className="absolute top-0 left-0 w-full h-32 pointer-events-none z-10"
  style={{
    background:
      "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
  }}
/>
      <div className="w-1/4 pr-6 z-10">
        <h2  style={{
          fontFamily: "var(--font-title)"}} className="text-2xl font-bold">Insurance Companies</h2>
          <h4 style={{
          fontFamily: "var(--font-title)"}}>we worked with</h4>
      </div>

    {/* DIVIDER LINE */}
    <div className="h-16 w-[1px] bg-white mx-1 mask-t-from-50% mask-b-from-50%"></div>
      {/* Right Side: Marquee */}
      <div className="w-3/4 relative overflow-hidden">
        {/* Transparent fade edges */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

        <div className="inline-block whitespace-nowrap animate-marquee">
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
    </section>
  );
}

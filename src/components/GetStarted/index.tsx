import SectionTitle from "../Common/SectionTitle";

// Relevant SVG components for each step
const SignUpSVG = () => (
  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-3">
    <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zM12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
    <path d="M20 12h-2V8h-2v4h-4v2h4v4h2v-4h2z" fill="currentColor"/>
  </svg>
);

const KYCSVG = () => (
  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-3">
    <path d="M12 2a2 2 0 100 4 2 2 0 000-4zm-2 6h4v12h-4z" fill="currentColor"/>
    <path d="M20 12h-2V8h-2v4h-4v2h4v4h2v-4h2z" fill="currentColor"/>
  </svg>
);

const SelectionSVG = () => (
  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-3">
    <path d="M4 4h16v2H4zM4 11h16v2H4zM4 18h16v2H4z" fill="currentColor"/>
    <path d="M4 18h16v2H4zM4 11h16v2H4zM4 4h16v2H4z" fill="currentColor"/>
  </svg>
);

const PaymentSVG = () => (
  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-3">
    <path d="M3 6h18v12H3V6zm2 2v2h14V8H5zm0 4v2h6v-2H5zm0 4v2h10v-2H5z" fill="currentColor"/>
  </svg>
);

const GetStarted = () => {
  const Step = ({ SvgComponent, title, text }) => (
    <div className="relative w-full sm:w-5/12 md:w-1/4 p-5 mb-5 text-center">
      <SvgComponent />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{text}</p>
    </div>
  );

  return (
    <section id="get-started" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container mx-auto">
        <div className="pb-16 md:pb-20 lg:pb-28">
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full px-4 mb-8">
              <SectionTitle
                title="Get Started with Our Platform"
                paragraph="Follow these simple steps to start using our platform effectively and make the most out of its features."
                mb="44px"
                center
              />
            </div>
            <div className="flex flex-wrap justify-between">
              <Step
                SvgComponent={SignUpSVG}
                title="Sign-up"
                text="Create your Lifetime free account to enjoy the various products."
              />
              <Step
                SvgComponent={KYCSVG}
                title="KYC"
                text="Complete KYC process, Setup Bank Mandates and get started."
              />
              <Step
                SvgComponent={SelectionSVG}
                title="Selection"
                text="Select Mutual Funds of your choice or Curated Funds Baskets."
              />
              <Step
                SvgComponent={PaymentSVG}
                title="Pay"
                text="Complete Payment and get the Funds in your account"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
  
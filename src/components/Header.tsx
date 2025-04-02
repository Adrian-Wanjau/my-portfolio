type HeaderProps = {
  name: string;
  title: string;
  ctaText: string;
  ctaLink: string;
};

export function Header({ name, title, ctaText, ctaLink }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8 md:py-16 text-center shadow-md relative overflow-hidden">
      {/* Background pattern - using a tailwind pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat"></div>
      </div>
      
      <div className="relative z-10 px-4 md:px-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">{name}</h1>
        <p className="text-lg md:text-xl mb-4 md:mb-6" role="doc-subtitle">{title}</p>
        
        <a 
          href={ctaLink} 
          className="inline-block bg-white text-blue-700 px-4 md:px-6 py-2 md:py-3 rounded-full font-medium hover:bg-opacity-90 transition-all focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700 focus:outline-none"
          aria-label={`View ${ctaText.toLowerCase()}`}
        >
          {ctaText}
        </a>
      </div>
    </header>
  );
}

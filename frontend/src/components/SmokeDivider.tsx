import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const SmokeDivider = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div 
      ref={ref}
      className="relative h-24 flex items-center justify-center overflow-hidden bg-cream-white"
    >
      {/* Thin line */}
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-burnt-umber/20 to-transparent" />
      
      {/* Drifting smoke effect */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
        isVisible ? 'opacity-30' : 'opacity-0'
      }`}>
        <div 
          className="w-32 h-32 bg-burnt-umber/10 rounded-full blur-[60px] animate-pulse"
          style={{ animationDuration: '6s' }}
        />
        <div 
          className="w-24 h-24 bg-faded-mustard/10 rounded-full blur-[50px] animate-pulse ml-12"
          style={{ animationDuration: '7s', animationDelay: '1s' }}
        />
        <div 
          className="w-28 h-28 bg-burnt-umber/10 rounded-full blur-[55px] animate-pulse ml-16"
          style={{ animationDuration: '8s', animationDelay: '2s' }}
        />
      </div>
    </div>
  );
};

export default SmokeDivider;

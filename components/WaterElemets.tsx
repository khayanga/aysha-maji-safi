interface WaveSeparatorProps {
  color?: string;
  flip?: boolean;
  className?: string;
}

export const WaveSeparator = ({ color = "hsl(200, 20%, 98%)", flip, className = "" }: WaveSeparatorProps) => (
  <div className={`w-full overflow-hidden leading-0 ${flip ? "rotate-180" : ""} ${className}`}>
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className="w-full h-15 md:h-25"
    >
      <path
        d="M0,40 C240,100 480,0 720,50 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
        fill={color}
      />
      <path
        d="M0,60 C180,20 420,90 660,40 C900,0 1140,80 1440,30 L1440,120 L0,120 Z"
        fill={color}
        opacity="0.5"
      />
    </svg>
  </div>
);

export const WaveSeparatorTop = ({
  flip,
  className = "",
}: WaveSeparatorProps) => (
  <div className={`w-full overflow-hidden leading-0 ${flip ? "rotate-180" : ""} ${className}`}>
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className="w-full h-16 md:h-24"
    >
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E6F4FF" />
          <stop offset="50%" stopColor="#CDEBFF" />
          <stop offset="100%" stopColor="#B3E0FF" />
        </linearGradient>
      </defs>

      <path
        d="M0,40 C240,100 480,0 720,50 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
        fill="url(#waveGradient)"
      />

      <path
        d="M0,60 C180,20 420,90 660,40 C900,0 1140,80 1440,30 L1440,120 L0,120 Z"
        fill="url(#waveGradient)"
        opacity="0.6"
      />
    </svg>
  </div>
);


export const FloatingBubbles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-primary-foreground/10 animate-bubble"
        style={{
          width: `${16 + i * 12}px`,
          height: `${16 + i * 12}px`,
          left: `${10 + i * 16}%`,
          animationDelay: `${i * 0.9}s`,
          animationDuration: `${4 + i * 1.2}s`,
        }}
      />
    ))}
  </div>
);

export const WaterDroplets = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(4)].map((_, i) => (
      <svg
        key={i}
        className="absolute text-primary-foreground/8 animate-float-slow"
        style={{
          width: `${60 + i * 30}px`,
          height: `${60 + i * 30}px`,
          top: `${15 + i * 20}%`,
          right: `${5 + i * 10}%`,
          animationDelay: `${i * 1.5}s`,
        }}
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50 5 C50 5 85 45 85 65 C85 85 67 95 50 95 C33 95 15 85 15 65 C15 45 50 5 50 5Z" />
      </svg>
    ))}
  </div>
);

export const AbstractBlob = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      fill="currentColor"
      d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.7,-0.8C87.3,14.7,82,29.4,73.8,42.2C65.6,55,54.5,65.9,41.3,73.4C28.1,80.9,14.1,85,-1.4,87.4C-16.8,89.8,-33.7,90.4,-47.4,83.6C-61.1,76.8,-71.7,62.5,-78.4,47C-85.1,31.5,-87.9,15.7,-87.2,0.4C-86.5,-14.9,-82.3,-29.8,-74.1,-42.3C-65.9,-54.8,-53.7,-64.9,-40.3,-72.5C-26.9,-80.1,-13.4,-85.1,1.2,-87.1C15.9,-89.2,31.7,-88.3,44.7,-76.4Z"
      transform="translate(100 100)"
    />
  </svg>
);

import { cn } from "@/lib/utils";

interface PlaneLoaderProps {
  className?: string;
}

export function PlaneLoader({ className }: PlaneLoaderProps) {
  return (
    <div className={cn("relative w-24 h-24", className)}>
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Plane SVG with animation */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12 text-primary animate-plane"
        >
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
        </svg>
      </div>
      
      {/* Cloud particles */}
      <div className="absolute inset-0">
        <div className="cloud-particle"></div>
        <div className="cloud-particle delay-300"></div>
        <div className="cloud-particle delay-500"></div>
      </div>
    </div>
  );
}
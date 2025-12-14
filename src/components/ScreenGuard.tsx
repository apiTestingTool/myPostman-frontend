// src/components/ScreenGuard.tsx
import { type ReactNode, useEffect, useState } from "react";

interface ScreenGuardProps {
  minWidth?: number;
  children: ReactNode;
}

export default function ScreenGuard({ minWidth = 600, children }: ScreenGuardProps) {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= minWidth);
    };

    handleResize(); // check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [minWidth]);

  if (!isLargeScreen) {
    return (
      <div className="w-screen h-screen main-bg text-white px-8 py-12">
        <div className="flex items-start gap-4 max-w-xl">
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold">
              This web app is only available on screens wider than {minWidth}px.
            </p>
            <p className="text-gray-300 text-sm">
              Please use a larger device or resize your window.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

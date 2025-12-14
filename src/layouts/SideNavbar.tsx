import { useRef, useEffect, useState } from "react";

export default function SideNavbar() {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const isResizing = useRef(false);
  const startX = useRef(0);
  const startWidth = useRef(0);
  const [width, setWidth] = useState(320); // optional for final width display

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing.current || !sidebarRef.current) return;

      const delta = e.clientX - startX.current;
      const newWidth = Math.max(320, Math.min(420, startWidth.current + delta));

      // Update the DOM directly to avoid re-render lag
      sidebarRef.current.style.width = `${newWidth}px`;
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (isResizing.current && sidebarRef.current) {
        // Update React state once after drag ends
        const finalWidth = sidebarRef.current.getBoundingClientRect().width;
        setWidth(finalWidth);
      }
      isResizing.current = false;

      document.body.style.userSelect = "auto";
      document.body.style.cursor = "auto";
      document.body.style.pointerEvents = "auto";
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isResizing.current = true;
    startX.current = e.clientX;

    if (sidebarRef.current) {
      startWidth.current = sidebarRef.current.getBoundingClientRect().width;
    }

    document.body.style.userSelect = "none";
    document.body.style.cursor = "ew-resize";
    document.body.style.pointerEvents = "none";
  };

  return (
    <aside
      ref={sidebarRef}
      style={{ width: `${width}px` }} // initial width
      className="main-bg h-auto text-white relative select-none px-4 min-w-[320px] flex-shrink-0"
    >
      <div className="py-2">
        <h2 className="text-xl font-bold">Side Navbar</h2>
        <p className="text-sm opacity-80 mt-2">Current width: {width}px</p>
      </div>

      {/* Drag handle - always visible */}
      <div
        onMouseDown={handleMouseDown}
        className="absolute top-0 right-0 w-1 h-full cursor-ew-resize bg-[#505050]"
        title="Drag to resize"
      />
    </aside>
  );
}

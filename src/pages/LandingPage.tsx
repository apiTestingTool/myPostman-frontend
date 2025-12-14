import { MainNavbar, SideNavbar, MainPanel } from "@/layouts";
import { ScreenGuard } from "@/components";

export default function LandingPage() {
  return (
    <ScreenGuard minWidth={600}>
    <div className="min-h-screen flex flex-col main-bg">
      {/* Top Navbar */}
      <MainNavbar />

      {/* Main Content */}
      <div className="flex flex-1 h-[calc(100vh-60px)] overflow-x-auto">
        {/* Side Navbar */}
        <SideNavbar />

        {/* Main Panel */}
        <MainPanel />
      </div>
    </div>
    </ScreenGuard>
  );
}

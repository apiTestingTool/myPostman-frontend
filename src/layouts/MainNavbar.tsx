import { AppLogo, AuthBtns } from "@/components";


export default function MainNavbar() {
  return (
    <header className="px-4 h-[60px] flex items-center justify-between main-bg light-border-bottom">
      {/* Left: Logo / App Name */}
      <AppLogo />

      {/* Right: Auth Buttons */}
      <AuthBtns />
    </header>
  );
}

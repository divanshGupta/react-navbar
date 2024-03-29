import { NavMobile } from "./nav-mobile";
import { NavDesktop } from "./nav-desktop";

export const Topbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-amber-50 border-b border-neutral-700">
      <nav className="container flex items-center justify-between py-1 lg:py-4 lg:px-16">
        <span className="text-lg">❤</span>
        <NavMobile />
        <NavDesktop />
      </nav>
    </div>
  );
};

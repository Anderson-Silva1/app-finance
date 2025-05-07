import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <header className="flex h-14 items-center justify-between px-[4%]">
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>
      <ModeToggle />
    </header>
  );
};

export default Header;

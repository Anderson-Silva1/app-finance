import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <header className="flex h-12 items-center justify-between px-[4%]">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <ModeToggle />
    </header>
  );
};

export default Header;

import { ModeToggle } from "./mode-toggle";

const Header = ({ title }: { title: string }) => {
  return (
    <header className="flex h-14 items-center justify-between">
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
      <ModeToggle />
    </header>
  );
};

export default Header;

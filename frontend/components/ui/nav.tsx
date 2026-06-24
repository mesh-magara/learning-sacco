import { Button } from "@/components/ui/button";
export default function Nav() {
  const links = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Pricing", href: "/pricing" },
    { title: "Contact", href: "/contact" },
  ];
  return (
    <nav className="flex flex-wrap justify-between w-screen items-center bg-green-900 p-6 fixed top-0">
      <div className="text-3xl font-mono font-bold text-white">Mysacco</div>
      <ul className="flex flex-wrap justify-around items-center gap-6 text-blue-100 font-bold ">
        {links.map((link) => (
          <li
            key={link.href}
            className="hover:[border-b-2 border-amber-400 p-1rem]"
          >
            <a href={link.href}>{link.title}</a>
          </li>
        ))}
      </ul>
      <div className="flex justify-around align-middle gap-2">
        <Button variant="outline" size="lg">
          Sign up
        </Button>
        <Button variant="secondary" size="lg">
          log in
        </Button>
      </div>
    </nav>
  );
}

export { Nav };

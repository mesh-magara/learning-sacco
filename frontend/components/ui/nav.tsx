import { Button } from "@/components/ui/button";
import Link from "next/link";

//defining the data type for the nav links
type NavLink = {
  title: string;
  href: string;
  img?: string;
};
export default function Nav() {
  const links: NavLink[] = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Pricing", href: "/pricing" },
    { title: "Contact", href: "/contact" },
    { title: "FAQS", href: "/faqs" },
  ];
  return (
    <nav className="flex flex-wrap justify-between w-screen items-center bg-green-900 p-6 fixed top-0">
      <div className="text-3xl font-mono font-bold text-white">Mysacco</div>
      <ul className="flex flex-wrap justify-around items-center gap-6 text-blue-100 font-bold ">
        {links?.map((link) => (
          <li
            key={link.href}
            className="hover:[border-b-2 border-amber-400 p-1rem]"
          >
            <a
              className=" hover:bg-pink-700 p-3.5 hover:text-yellow-200  hover:scale-110 hover:shadow-lg hover:rounded-xl hover:-translate-y-1"
              href={link.href}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex justify-around align-middle gap-2">
        <Link href="/register">
          <Button variant="outline" size="lg">
            Sign up
          </Button>
        </Link>
        <Link href="/login">
          <Button variant="secondary" size="lg">
            log in
          </Button>
        </Link>
      </div>
    </nav>
  );
}

export { Nav };

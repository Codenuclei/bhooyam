import Link from "next/link";

type NavItem = { href: string; label: string };

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav
      className="flex w-fit mx-auto items-center justify-center gap-5 px-6 py-2.5 mt-4 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/70"
      style={{ boxShadow: "0 10px 15px rgba(251,191,36,0.15)" }}
    >
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm hover:text-gray-700 font-medium tracking-wide transition-colors duration-200 text-gray-900/60"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

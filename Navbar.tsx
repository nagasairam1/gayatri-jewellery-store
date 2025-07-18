import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-pink-600">Gayatri Jewellery</Link>
      <div className="space-x-6">
        <Link href="/products" className="hover:text-pink-600">Products</Link>
        <Link href="/about" className="hover:text-pink-600">About</Link>
        <Link href="/contact" className="hover:text-pink-600">Contact</Link>
      </div>
    </nav>
  );
}
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const products = [
  {
    slug: "gold-ring",
    name: "Gold Plated Ring",
    image: "/ring1.jpg",
    price: "₹1,999"
  },
  {
    slug: "silver-necklace",
    name: "Silver Heart Necklace",
    image: "/necklace1.jpg",
    price: "₹2,499"
  }
];

export default function ProductListPage() {
  return (
    <>
      <Navbar />
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {products.map((product) => (
          <Link key={product.slug} href={\`/products/\${product.slug}\`}>
            <div className="border p-4 rounded shadow hover:shadow-lg transition">
              <Image src={product.image} alt={product.name} width={300} height={300} />
              <h2 className="mt-2 font-bold">{product.name}</h2>
              <p className="text-pink-600">{product.price}</p>
            </div>
          </Link>
        ))}
      </main>
      <Footer />
    </>
  );
}
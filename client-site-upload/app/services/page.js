import Link from "next/link";

export const metadata = { title: "Services – Green Leaf Studio" };

export default function Services() {
  return (
    <section className="page">
      <h1>Our services</h1>
      <ul className="service-list">
        <li>Garden design and planning</li>
        <li>Planting and lawn setup</li>
        <li>Monthly garden care</li>
      </ul>
      <Link href="/contact" className="btn btn-primary">
        Get a quote
      </Link>
    </section>
  );
}

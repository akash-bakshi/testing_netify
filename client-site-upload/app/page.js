import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Beautiful gardens, made simple</h1>
        <p>
          Green Leaf Studio designs and builds gardens for homes and small businesses. From a small balcony to a
          full backyard, we keep it easy from the first idea to the last plant.
        </p>
        <div className="button-row">
          <Link href="/contact" className="btn btn-primary">
            Book a visit
          </Link>
          <Link href="/services" className="btn btn-outline">
            Our services
          </Link>
        </div>
      </section>

      <section className="cards">
        <div className="card">
          <h2>Garden design</h2>
          <p>A clear plan for your space, made to fit your style and budget.</p>
        </div>
        <div className="card">
          <h2>Planting</h2>
          <p>We choose plants that grow well in your garden and are easy to care for.</p>
        </div>
        <div className="card">
          <h2>Care plans</h2>
          <p>Monthly visits that keep your garden healthy all year round.</p>
        </div>
      </section>
    </>
  );
}

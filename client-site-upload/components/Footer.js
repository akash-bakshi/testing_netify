import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="footer-text">© 2026 Green Leaf Studio. All rights reserved.</p>
        <div className="footer-links">
          <Link href="/about" className="footer-link">
            About us
          </Link>
          <Link href="/contact" className="footer-link">
            Get in touch
          </Link>
        </div>
      </div>
    </footer>
  );
}

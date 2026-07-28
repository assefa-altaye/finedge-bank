import './globals.css';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'FinEdge Bank',
  description: 'Enterprise Smart Wealth Solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header class="navbar">
          <div class="logo-container">
            <Link href="/">
              <Image
                src="/images/FinEdge_Bank_Logo.png"
                alt="FinEdge Bank Logo"
                className="bank-logo"
                width={150}
                height={48}
                priority
              />
            </Link>
          </div>
          <nav>
            <ul class="nav-links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <a href="#">Accounts</a>
              </li>
              <li>
                <a href="#">Transfers</a>
              </li>
              <li>
                <Link href="/mortgage">Mortgage Calculator</Link>
              </li>
            </ul>
          </nav>
          <div>
            <button class="btn btn-outline">Sign In</button>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}

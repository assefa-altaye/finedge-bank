import Link from 'next/link';

export default function HomePage() {
  return (
    <main class="view-section">
      <section class="hero">
        <div class="hero-content">
          <h1>The Edge You Need in Modern Banking</h1>
          <p>
            Experience secure, automated asset tracking, zero-fee checking
            accounts, and optimized home loan financing tailored for your
            financial future.
          </p>
          <div class="hero-actions">
            <Link href="/mortgage" class="btn btn-primary">
              Calculate Mortgage Rates
            </Link>
            <button class="btn btn-secondary">Open an Account</button>
          </div>
        </div>
      </section>
    </main>
  );
}

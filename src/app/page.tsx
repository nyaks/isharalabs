import Image from 'next/image';
import Features from '@/components/Features';
import Approach from '@/components/Approach';
import Portfolio from '@/components/Portfolio';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Logo = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50 10L58.66 41.34L90 50L58.66 58.66L50 90L41.34 58.66L10 50L41.34 41.34L50 10Z"
      fill="#F5A623"
    />
  </svg>
);

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <header>
            <div className="logo">
              <Logo />
              <span>Sparked By ISHARA</span>
            </div>
            <nav>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Blog</a>
              <a href="#">Contact</a>
            </nav>
            <button className="header-btn">Get Started</button>
          </header>
          <main>
            <h1>An African Venture Studio</h1>
            <p>
              We are creating the playbook to building world class companies solving
              Africa&apos;s biggest problems, while actually doing it!
            </p>
            <div className="button-group">
              <button className="main-btn">Get Started</button>
              <button className="secondary-btn">Learn More</button>
            </div>
            <div className="map-container">
              <Image src="/10889393_4604200-removebg-preview.png" alt="Africa Map" width={350} height={350} />
            </div>
          </main>
        </div>
      </div>
      <div className="container">
        <Features />
        <Approach />
        <Portfolio />
        <FAQ />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}

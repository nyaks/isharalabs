const TechEnabledIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const ImpactDrivenIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v10m0 0l-4-4m4 4l4-4" />
    <path d="M20.39 12.39L12 21l-8.39-8.61" />
  </svg>
);

const EcosystemIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M12 12l-4-4m4 4l4-4m-4 4l-4 4m4-4l4 4" />
  </svg>
);

const Features = () => {
  return (
    <section>
      <div className="features-grid">
        <div className="feature-item">
          <TechEnabledIcon />
          <h3>Tech Enabled</h3>
          <p>We believe in using technology to enable and amplify impact. We embed technology in our solutions in a bid to accelerate our work.</p>
        </div>
        <div className="feature-item">
          <ImpactDrivenIcon />
          <h3>Impact Driven</h3>
          <p>Our startups have impact at the core of it, as we try to solve real world problems facing Africans, in Africa.</p>
        </div>
        <div className="feature-item">
          <EcosystemIcon />
          <h3>Ecosystem Approach</h3>
          <p>We work with partners in Academia, Government, NGO world, Private sector, ecosystem enablers, financiers and everyone looking to create an impact.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;

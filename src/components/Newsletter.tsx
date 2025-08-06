const Newsletter = () => {
  return (
    <section className="newsletter">
      <h2>Follow our journey</h2>
      <p className="section-description">
        Sign up to our free newsletter to get regular updates on what our portfolio startups are doing.
      </p>
      <form className="newsletter-form">
        <input type="email" placeholder="Your Email" />
        <button type="submit" className="main-btn">Sign Up</button>
      </form>
    </section>
  );
};

export default Newsletter;

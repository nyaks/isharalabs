const FooterLogo = () => (
  <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10L58.66 41.34L90 50L58.66 58.66L50 90L41.34 58.66L10 50L41.34 41.34L50 10Z" fill="#F5A623" />
  </svg>
);


const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <FooterLogo />
        <span>Sparked By ISHARA</span>
      </div>
      <p>We are an African venture studio dedicated to developing startups that address significant challenges across the continent. Our goal is to create a replicable playbook for building successful startups in Africa.</p>
      <div className="footer-links">
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
        <a href="#">Email</a>
      </div>
      <p>&copy; 2024 - Sparked by Ishara - all rights reserved</p>
    </footer>
  );
};

export default Footer;

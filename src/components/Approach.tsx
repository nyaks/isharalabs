const PlaceholderImage = () => (
  <svg width="100%" height="250" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="250" rx="16" fill="#2a3a3a" />
  </svg>
);


const Approach = () => {
  return (
    <section>
      <h2>Discover Our Approach To Startups</h2>
      <p className="section-description">
        We are building a process based approach to ideating, validating and launching startups in Africa.
      </p>

      <div className="approach-item">
        <div className="approach-content">
          <div className="number">01</div>
          <h3>Ideation</h3>
          <p>We carefully identify and develop innovative ideas through detailed market research, needs assessment, systems problem identification and brainstorming sessions. This structured approach helps ensure that the ideas are both original and viable, with a large enough opportunity thus setting a solid foundation for further development.</p>
          <a href="#" className="secondary-btn">Learn More</a>
        </div>
        <div className="approach-image">
          <PlaceholderImage />
        </div>
      </div>

      <div className="approach-item">
        <div className="approach-image">
          <PlaceholderImage />
        </div>
        <div className="approach-content">
          <div className="number">02</div>
          <h3>Validation</h3>
          <p>These ideas are then tested using lean startup methods, which include creating prototypes (Minimum Viable Products), gathering user feedback, and analyzing if the ideas can succeed in the market. This step helps confirm that the ideas are practical and have the potential for impact and scaling.</p>
          <a href="#" className="secondary-btn">Learn More</a>
        </div>
      </div>

       <div className="approach-item">
        <div className="approach-content">
          <div className="number">03</div>
          <h3>Launch & Scaling</h3>
          <p>Once viable, the studio puts together a team and resources to build, launch, and grow the startup. This organized approach reduces risks and boosts the chances of success by making sure each startup idea is carefully evaluated and supported throughout its development.</p>
          <a href="#" className="secondary-btn">Learn More</a>
        </div>
        <div className="approach-image">
          <PlaceholderImage />
        </div>
      </div>
    </section>
  );
};

export default Approach;

const Portfolio = () => {
  const portfolioItems = [
    { name: 'ACTV Wellness', status: 'Validated', description: 'Wellness whether physical, mental or spiritual should not be expensive. Our wellness app accessible on WhatsApp gives you access to wellness expertise on your phone.' },
    { name: 'Foleni', status: 'Validated', description: 'Road safety gamification with the aim of creating behavioural change leading to kinder roads. Involved CBC Road Safety quizzes for kids, Driving school prep and other general quizzes.' },
    { name: 'Shauri AI', status: 'Validated', description: 'AI interpretation of Lab test results whether blood test or urinalysis. All you need is a photo uploaded to our WhatsApp Chatbot.' },
    { name: 'Chuo', status: 'In Validation', description: 'Gamified learning of CBC curriculum using daily quizzes on WhatsApp. Think Duolingo for CBC from Grade 2 to 9.' },
    { name: 'Shangazi AI', status: 'In Validation', description: 'AI powered relationship coach and advisor accessed through a WhatsApp Chatbot. Navigate the complexities of relationships be it romantic or familial talking to Shangazi.' },
    { name: 'Ocula', status: 'In Validation', description: 'Affordable glasses for everyone in Africa. Bringing sight to the underserved.' },
    { name: 'Maya Health', status: 'Validated', description: 'Sexual reproductive information and services through a WhatsApp chatbot with an aim of reducing teenage pregnancies and STIs among the youth in Africa.' },
    { name: 'Wema Baby', status: 'Validated', description: 'Building virtual parenting communities with an aim of ensuring access to certified child-care expertise and information to parents in Africa.' },
    { name: 'Sura Micro-Learning', status: 'Validated', description: 'A WhatsApp based Micro-Learning platform helping you learn new skills on the go. Currently we are offering Swahili courses. Learn Swahili with Sura.' },
  ];

  return (
    <section>
      <h2>Our Portfolio</h2>
      <div className="portfolio-grid">
        {portfolioItems.map(item => (
          <div key={item.name} className="portfolio-item">
            <div className="logo">{item.name.split(' ')[0]}</div>
            <h3>{item.name}</h3>
            <div className="status">{item.status}</div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

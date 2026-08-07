import ProjectCard from '../components/ProjectCard/ProjectCard';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Reveal from '../components/Reveal/Reveal';
import { projects } from '../data/projects';

function HomePage() {
  return (
    <main>
      <section className="section about-me" id="about-me">
        <Reveal as="h1" direction="left" delay={80}>
          Rudy Zachar
        </Reveal>
        <Reveal direction="right" delay={220}>
          <p>
            Hi, I’m Rudy, a software developer with a passion for problem-solving
            and learning languages [ both programming and spoken ] With
            experience in web development and a drive to continuously expand my
            skill set, I’m always eager to take on new challenges and grow along
            the way. Welcome to my portfolio – feel free to explore my projects
            and get in touch!
          </p>
        </Reveal>
      </section>

      <section className="section portfolio" id="portfolio">
        <Reveal as="h2" direction="up" delay={40}>
          Portfolio
        </Reveal>
        <div className="portfolio-container" aria-label="Portfolio section">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              ariaLabel={project.ariaLabel}
              githubUrl={project.githubUrl}
              githubServerUrl={project.githubServerUrl}
              slug={project.slug}
              image={project.image}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 70}
            />
          ))}
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}

export default HomePage;

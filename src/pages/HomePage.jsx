import ProjectCard from '../components/ProjectCard/ProjectCard';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Reveal from '../components/Reveal/Reveal';
import { projects } from '../data/projects';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

function HomePage() {
  useDocumentTitle();

  return (
    <main id="main-content" tabIndex={-1}>
      <section
        className="section about-me"
        id="about-me"
        aria-labelledby="about-heading"
      >
        <Reveal as="h1" id="about-heading" direction="left" delay={80}>
          Rudy Zachar
        </Reveal>
        <Reveal direction="right" delay={220}>
          <p id="about-summary">
            Hi, I’m Rudy, a software developer with a passion for problem-solving
            and learning languages [ both programming and spoken ] With
            experience in web development and a drive to continuously expand my
            skill set, I’m always eager to take on new challenges and grow along
            the way. Welcome to my portfolio – feel free to explore my projects
            and get in touch!
          </p>
        </Reveal>
      </section>

      <section
        className="section portfolio"
        id="portfolio"
        aria-labelledby="portfolio-heading"
      >
        <Reveal as="h2" id="portfolio-heading" direction="up" delay={40}>
          Portfolio
        </Reveal>
        <p className="visually-hidden" id="portfolio-instructions">
          Project cards follow. Tab to each project to hear its name, then tab
          again to open details or visit its GitHub repository.
        </p>
        <ul
          className="portfolio-container"
          aria-labelledby="portfolio-heading"
          aria-describedby="portfolio-instructions"
        >
          {projects.map((project, index) => (
            <li key={project.id} className="portfolio-item">
              <ProjectCard
                title={project.title}
                githubUrl={project.githubUrl}
                githubServerUrl={project.githubServerUrl}
                slug={project.slug}
                image={project.image}
                index={index}
                total={projects.length}
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={index * 70}
              />
            </li>
          ))}
        </ul>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}

export default HomePage;

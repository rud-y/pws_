import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import ProjectListing from '../components/ProjectListing/ProjectListing';
import { getProjectBySlug } from '../data/projects';
import styles from './ProjectPage.module.css';

function ProjectPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <main className={styles.page}>
        <div className={styles.notFound}>
          <h1>Project not found</h1>
          <p>That project endpoint does not exist.</p>
          <Link className={styles.backLink} to="/#portfolio">
            ← Back to portfolio
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.backRow}>
        <Link className={styles.backLink} to="/#portfolio">
          ← Back to portfolio
        </Link>
      </div>
      <div className={styles.content}>
        <ProjectListing project={project} />
      </div>
      <Footer />
    </main>
  );
}

export default ProjectPage;

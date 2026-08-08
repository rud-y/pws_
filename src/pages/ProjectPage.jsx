import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import ProjectListing from '../components/ProjectListing/ProjectListing';
import { getProjectBySlug } from '../data/projects';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import styles from './ProjectPage.module.css';

function ProjectPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useDocumentTitle(project ? project.listing.heading : 'Project not found');

  if (!project) {
    return (
      <main id="main-content" className={styles.page} tabIndex={-1}>
        <div className={styles.notFound}>
          <h1>Project not found</h1>
          <p>That project endpoint does not exist.</p>
          <Link className={styles.backLink} to="/#portfolio">
            <span aria-hidden="true">← </span>
            Back to portfolio projects
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main
      id="main-content"
      className={styles.page}
      tabIndex={-1}
      aria-labelledby={`${project.slug}-detail-heading`}
    >
      <div className={styles.backRow}>
        <Link className={styles.backLink} to="/#portfolio">
          <span aria-hidden="true">← </span>
          Back to portfolio projects
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

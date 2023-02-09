import { Container } from 'react-basics';
import Head from 'next/head';
import NavBar from 'components/layout/NavBar';
import useRequireLogin from 'hooks/useRequireLogin';
import styles from './AppLayout.module.css';

export default function AppLayout({ title, children }) {
  const { user } = useRequireLogin();

  if (!user) {
    return null;
  }

  return (
    <div className={styles.layout}>
      <Head>
        <title>{title ? `${title} | umami` : 'umami'}</title>
      </Head>
      <div className={styles.nav}>
        <NavBar />
      </div>
      <div className={styles.body} id="layout-body">
        <Container>
          <main>{children}</main>
        </Container>
      </div>
    </div>
  );
}
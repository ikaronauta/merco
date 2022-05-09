import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src="https://www.bpmco.co/wp-content/uploads/2018/02/logo-merco-slider.png" alt="Merco" width="400"></img>    
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/">
            Documentación 📚
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Documentación BPMco.">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        <dir id='home'>
          <img src="https://www.bpmco.co/wp-content/uploads/2021/02/logo_bpm_10.png" alt="BPMco" width="400"></img>
        </dir>
      </main>
    </Layout>
  );
}

import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          White-label PPC reporting software
        </Heading>
        <p className="hero__subtitle">
          Advertising Intelligence brings your clients' PPC and digital ad campaigns from multiple platforms under one roof for easy comparison. Get the metrics that matter the most, automate reporting, and find out what's making your clients money.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/overview">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

function TestimonialSection() {
  return (
    <section className={styles.testimonialSection}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <div className={styles.testimonial}>
              <blockquote>
                "All time for me is saved by not having to go into Google & Facebook platforms to look at stats. I'd say per month I save maybe 30 minutes per campaign."
              </blockquote>
              <cite>— Jason, Eighty6</cite>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.testimonial}>
              <blockquote>
                "For us it's that the clients can view both accounts at the same time while being inside the platform. Also for clients that aren't tech savvy its very easy for them to understand the metrics."
              </blockquote>
              <cite>— Josh, Digital Marketing Collective Inc.</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AdditionalFeatures() {
  return (
    <section className={styles.additionalFeatures}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <div className={styles.featureCard}>
              <Heading as="h3">Serve Multi-location</Heading>
              <p>Better serve your multi-location clients by providing a high-level overview of PPC ad campaign performance across locations.</p>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.featureCard}>
              <Heading as="h3">Management Markup</Heading>
              <p>Include your management fee in your client's spend budget so their final cost is clear. Set your markup per client and be sure your services are reflected in their final reporting.</p>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.featureCard}>
              <Heading as="h3">White-label Fulfillment</Heading>
              <p>Regardless of your agency's experience or size, our team of strategists are able to fulfill and deliver. Use our great white labelled team in conjunction with Advertising Intelligence.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Advertising Intelligence - White-label PPC Reporting Software"
      description="Unified PPC reporting for easy ad performance insights. Track and analyze multiple PPC campaigns from different ad platforms in one place.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <TestimonialSection />
        <AdditionalFeatures />
      </main>
    </Layout>
  );
}

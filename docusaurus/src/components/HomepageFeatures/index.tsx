import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
  icon: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Multi-platform Digital Ad Reporting',
    icon: '📊',
    description: (
      <>
        Track and analyze multiple PPC campaigns from different ad platforms, for both multi-location and single-location businesses. Report on Google Search and Display Ads, YouTube ads, Facebook ads, Instagram ads, and more.
      </>
    ),
  },
  {
    title: 'Automated Reporting',
    icon: '🤖',
    description: (
      <>
        Cut down on overhead with automated reporting. Advertising Intelligence provides your clients with real-time performance reporting across their favorite ad networks. Keep your clients in the know without lifting a finger.
      </>
    ),
  },
  {
    title: 'Smart Comparison Tools',
    icon: '📈',
    description: (
      <>
        Look at your advertising data with confidence. Smart insights and comparison tools help you become the expert at interpreting what types of ads are giving your clients the best results.
      </>
    ),
  },
];

function Feature({title, description, icon}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureIcon}>{icon}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Serve Multi-location',
    description: (
      <>
        Better serve your multi-location clients by providing a high-level overview of PPC ad campaign performance across locations.
      </>
    ),
  },
  {
    title: 'Management Markup',
    description: (
      <>
        Include your management fee in your client's spend budget so their final cost is clear. Set your markup per client and be sure your services are reflected in their final reporting.
      </>
    ),
  },
  {
    title: 'White-label Fulfillment',
    description: (
      <>
        Regardless of your agency's experience or size, our team of strategists are able to fulfill and deliver. Use our great white labelled team in conjunction with Advertising Intelligence.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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

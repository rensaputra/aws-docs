import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "AWS Developer",
    Svg: require("@site/static/img/undraw_aws_server.svg").default,
    description: (
      <>
        Comprehensive notes covering design resilient architectures,
        high-performing architectures, and secure applications on AWS.
      </>
    ),
  },
  {
    title: "Exam-Oriented",
    Svg: require("@site/static/img/undraw_certification.svg").default,
    description: (
      <>
        Structured to align with the DVA-C02 exam domains: compute, storage,
        data lakes, and security. Go ahead and explore each section.
      </>
    ),
  },
  {
    title: "Community Driven",
    Svg: require("@site/static/img/undraw_community.svg").default,
    description: (
      <>
        Built as open notes from my learning journey. Contributions and
        corrections are welcome — we grow together.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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

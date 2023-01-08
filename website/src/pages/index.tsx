import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import CopySvg from "@site/static/svg/copy.svg";
import DarkImage from "@site/static/img/masked-dark-phone.png";
import LightImage from "@site/static/img/masked-light-phone.png";
// import useThemeContext from "@theme/hooks/useThemeContext";

// import styles from "./index.module.css";
import styles from "../css/header.module.css";

function Content() {
  const isDarkTheme = true;

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <section className={styles.hero}>
          <div className={styles.heroWrapper}>
            <h1 className={styles.heading}>
              Make your components more intractable
            </h1>
            <h2 className={styles.subHeading}>
              A performant, easy to use
              <strong> hold to open context menu</strong> for React Native
              powered by Reanimated.
            </h2>
            <div className={`${styles.flex} ${styles.buttonsWrapper}`}>
              <div className={styles.flexItem}>
                <Link className={styles.button} to="/docs">
                  Get Started
                </Link>
              </div>
              <div className={styles.flexItem}>
                <button
                  className={styles.copyPaste}
                  onClick={() => navigator.clipboard.writeText("npm i lulinjs")}
                >
                  npm i lulinjs
                  <CopySvg className={styles.copyIcon} />
                </button>
              </div>
            </div>
          </div>
          <div className={styles.phoneImageWrapper}>
            <img
              src={isDarkTheme ? DarkImage : LightImage}
              style={{ maxHeight: 450 }}
            />
          </div>
        </section>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const isDarkTheme = true;
  return (
    <Layout>
      <Content />
    </Layout>
  );
}

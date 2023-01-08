import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import CopySvg from "@site/static/svg/copy.svg";
import LulinJSSvg from "@site/static/svg/lulinjs.svg";
import LogoSvg from "@site/static/svg/LJS.svg";
import styles from "../css/header.module.css";

const renderContent = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logoContainer}>
          <LogoSvg className={styles.logoSvg} />
          <LulinJSSvg className={styles.lulinjs} />
        </div>
        <section className={styles.hero}>
          <div className={styles.heroWrapper}>
            <h1 className={styles.heading}>
              Save time with day-to-day use functions
            </h1>
            <h2 className={styles.subHeading}>
              Easy to use,
              <strong> save hours for day-to-day </strong> use javascript
              helper\utils functions for any javascript, typescript projects.
            </h2>
            <h3 className={styles.subHeading}>
              It is fully tested with jest, new functions are adding
              continuously.
            </h3>
            <h3 className={styles.subHeading}>
              LulinJS is an open source project to help everyone to save time
              with day to day use functions on every project.
            </h3>
            <div className={`${styles.flex} ${styles.buttonsWrapper}`}>
              <div className={styles.flexItem}>
                <Link className={styles.button} to="/docs/category/features/">
                  Getting Started
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
        </section>
      </div>
    </header>
  );
};

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const isDarkTheme = true;
  return <Layout>{renderContent()}</Layout>;
}

import { FunctionComponent, useCallback } from "react";
import styles from "./TopHeader.module.css";

const TopHeader: FunctionComponent = () => {
  const onFickleflightLogoClick = useCallback(() => {
    // Please sync "Homepage" to the project
  }, []);

  const onExploreTextClick = useCallback(() => {
    // Please sync "Homepage" to the project
  }, []);

  const onHotelsTextClick = useCallback(() => {
    // Please sync "Hotels Page" to the project
  }, []);

  return (
    <header className={styles.topHeader}>
      <div className={styles.topContainer}>
        <button
          className={styles.fickleflightLogo}
          onClick={onFickleflightLogoClick}
        >
          <img className={styles.symbolsIcon} alt="" src="/symbols.svg" />
        </button>
        <div className={styles.navigationRight}>
          <div className={styles.navigationMenu}>
            <div className={styles.explore} onClick={onExploreTextClick}>
              Explore
            </div>
            <button className={styles.search}>Search</button>
            <div className={styles.explore} onClick={onHotelsTextClick}>
              Hotels
            </div>
            <button className={styles.offers}>Offers</button>
          </div>
          <div className={styles.accountSection}>
            <img
              className={styles.hamburgerMenuIcon}
              alt=""
              src="/notification.svg"
            />
            <img
              className={styles.notificationBellIcon}
              alt=""
              src="/notification1.svg"
            />
            <img
              className={styles.unsplashd1upkifd04aIcon}
              alt=""
              src="/top_avatar@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;

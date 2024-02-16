import { FunctionComponent, useState, useCallback } from "react";
import MatterhornPopup from "/";
import PortalPopup from "./PortalPopup";
import styles from "./FilteredResultsContainer.module.css";

export type FilteredResultsContainerType = {
  imageDimensions?: string;
  roomTypeDescription?: string;
  hotelImageUrl?: string;
  productDimensions?: string;
  imageDimensionsAlt?: string;
};

const FilteredResultsContainer: FunctionComponent<
  FilteredResultsContainerType
> = ({
  imageDimensions,
  roomTypeDescription,
  hotelImageUrl,
  productDimensions,
  imageDimensionsAlt,
}) => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.resultsCard}>
        <img className={styles.resultsImageIcon} alt="" src={imageDimensions} />
        <div className={styles.resultsDetails}>
          <div className={styles.resultsWithVideo}>
            <div className={styles.resultsTitle}>
              <div className={styles.deluxeKing}>{roomTypeDescription}</div>
              <b className={styles.theRitzCarltonL}>{hotelImageUrl}</b>
              <div className={styles.reviews}>
                <div className={styles.reviews1}>(1,136 reviews)</div>
                <div className={styles.stars}>
                  <div className={styles.div}>4.7</div>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src={productDimensions}
                  />
                </div>
              </div>
            </div>
            <img
              className={styles.featureVideoIcon}
              alt=""
              src={imageDimensionsAlt}
              onClick={openMatterhornPopup}
            />
          </div>
          <div className={styles.priceAndCta}>
            <div className={styles.s286Parent}>
              <b className={styles.s286}>$S 286</b>
              <div className={styles.night}>/night</div>
            </div>
            <button className={styles.primaryButton}>
              <div className={styles.primaryButtonChild} />
              <div className={styles.searchFlights}>View Details</div>
            </button>
          </div>
        </div>
      </div>
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default FilteredResultsContainer;

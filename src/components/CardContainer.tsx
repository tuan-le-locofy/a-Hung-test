import { FunctionComponent } from "react";
import styles from "./CardContainer.module.css";

export type CardContainerType = {
  imageDimensions?: string;
  hotelName?: string;
  roomTypeDescription?: string;
  reviewCount?: string;
  rating?: string;
  productDimensions?: string;
  carPriceCarBrandPricePric?: string;
};

const CardContainer: FunctionComponent<CardContainerType> = ({
  imageDimensions,
  hotelName,
  roomTypeDescription,
  reviewCount,
  rating,
  productDimensions,
  carPriceCarBrandPricePric,
}) => {
  return (
    <div className={styles.resultsCard}>
      <img className={styles.resultsImageIcon} alt="" src={imageDimensions} />
      <div className={styles.resultsDetails}>
        <div className={styles.resultsTitle}>
          <div className={styles.result}>
            <b className={styles.freehandLosAngeles}>{hotelName}</b>
            <div className={styles.bedInQuad}>{roomTypeDescription}</div>
            <div className={styles.review}>
              <div className={styles.reviews}>{reviewCount}</div>
              <div className={styles.stars}>
                <div className={styles.div}>{rating}</div>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src={productDimensions}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.priceAndCta}>
          <div className={styles.pricing}>
            <b className={styles.s198}>{carPriceCarBrandPricePric}</b>
            <div className={styles.night}>/night</div>
          </div>
          <button className={styles.viewDetailsButton}>
            <div className={styles.viewDetailsButtonChild} />
            <div className={styles.searchFlights}>View Details</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;

import { FunctionComponent } from "react";
import FilteredResultsContainer from "./FilteredResultsContainer";
import CardContainer from "./CardContainer";
import styles from "./HotelResultsContainer.module.css";

const HotelResultsContainer: FunctionComponent = () => {
  return (
    <div className={styles.hotelResults}>
      <div className={styles.resultsSumamry}>
        <div className={styles.results}>200+ results</div>
        <div className={styles.filters}>
          <img className={styles.filtersIcon} alt="" src="/filters.svg" />
          <div className={styles.filters1}>Filters</div>
        </div>
      </div>
      <div className={styles.resultsSection}>
        <div className={styles.resultCardsCol}>
          <FilteredResultsContainer
            imageDimensions="/results-image@2x.png"
            roomTypeDescription="1 king bed standard"
            hotelImageUrl="Holiday Inn Expre..."
            productDimensions="/vector.svg"
            imageDimensionsAlt="/video.svg"
          />
          <CardContainer
            imageDimensions="/results-image1@2x.png"
            hotelName="Freehand Los Angeles"
            roomTypeDescription="Bed in Quad"
            reviewCount="(1,941 reviews)"
            rating="4.2"
            productDimensions="/vector1.svg"
            carPriceCarBrandPricePric="$S 198"
          />
          <CardContainer
            imageDimensions="/results-image2@2x.png"
            hotelName="The Westin Bonavent..."
            roomTypeDescription="1 King, City view"
            reviewCount="(1,002 reviews)"
            rating="4.1"
            productDimensions="/vector2.svg"
            carPriceCarBrandPricePric="$S 289"
          />
          <FilteredResultsContainer
            imageDimensions="/results-image3@2x.png"
            roomTypeDescription="Deluxe King"
            hotelImageUrl="The Ritz-Carlton, L..."
            productDimensions="/vector3.svg"
            imageDimensionsAlt="/feature-video.svg"
          />
          <iframe
            className={styles.map}
            src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
          />
        </div>
        <iframe
          className={styles.map1}
          src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
        />
      </div>
    </div>
  );
};

export default HotelResultsContainer;

import { FunctionComponent } from "react";
import FlightCard2 from "./FlightCard2";
import FlightCard1 from "./FlightCard1";
import FlightCard from "./FlightCard";
import styles from "./FlightCards.module.css";

const FlightCards: FunctionComponent = () => {
  return (
    <div className={styles.flightCards}>
      <div className={styles.results}>10 out of 177 Results</div>
      <FlightCard2 s730="S$ 723" />
      <FlightCard1
        sIA="/sia.svg"
        singaporeAirlines="Singapore Airlines"
        aM="8:45 PM"
        h55MNonStop="15H 10M, 2-stops"
        aM1="7:55 PM"
        s730="S$ 900"
      />
      <FlightCard
        japan="/japan.svg"
        singaporeAirlines="Japan Airlines"
        aM="8:20 PM"
        h55MNonStop="17H 30M, 1-stop"
        s730="S$ 859"
      />
      <FlightCard
        japan="/ana.svg"
        singaporeAirlines="ANA"
        aM="6:35 PM"
        h55MNonStop="19H 15M, 1-stop"
        s730="S$ 936"
        propPadding="unset"
        propWidth="20%"
      />
      <FlightCard1
        sIA="/americanairlines.svg"
        singaporeAirlines="American Airlines"
        aM="8:20 PM"
        h55MNonStop="17H 30M, 1-stop"
        aM1="9:50 PM"
        s730="S$ 936"
        propRight="unset"
        propGap="unset"
      />
      <FlightCard2 s730="S$ 673" />
      <div className={styles.flightCard}>
        <div className={styles.airlineSection}>
          <img className={styles.japanIcon} alt="" src="/japan.svg" />
          <div className={styles.singaporeAirlines}>Japan Airlines</div>
        </div>
        <div className={styles.flightDetailsSection}>
          <div className={styles.departureDetails}>
            <div className={styles.am}>10:25 PM</div>
            <div className={styles.sin}>SIN</div>
          </div>
          <div className={styles.flightduration}>
            <img className={styles.flighticon} alt="" src="/flighticon.svg" />
            <div className={styles.h55mNonStop}>26H 45M, 1-stop</div>
          </div>
          <div className={styles.arrivalDetails}>
            <div className={styles.am}>9:10 AM</div>
            <div className={styles.sin1}>LAX</div>
          </div>
        </div>
        <div className={styles.priceSection}>
          <img
            className={styles.priceSectionChild}
            alt=""
            src="/vector-1.svg"
          />
          <b className={styles.s730}>S$ 859</b>
        </div>
      </div>
      <div className={styles.primaryButton}>
        <div className={styles.primaryButtonChild} />
        <div className={styles.searchFlights}>Show more results</div>
      </div>
    </div>
  );
};

export default FlightCards;

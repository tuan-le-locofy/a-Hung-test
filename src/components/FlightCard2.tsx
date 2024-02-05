import { FunctionComponent } from "react";
import styles from "./FlightCard2.module.css";

type FlightCard2Type = {
  s730?: string;
};

const FlightCard2: FunctionComponent<FlightCard2Type> = ({ s730 }) => {
  return (
    <div className={styles.flightCard}>
      <div className={styles.airlineSection}>
        <img className={styles.turkishIcon} alt="" src="/turkish.svg" />
        <div className={styles.singaporeAirlines}>Turkish Airlines</div>
      </div>
      <div className={styles.flightDetailsSection}>
        <div className={styles.departureDetails}>
          <div className={styles.am}>11:35 PM</div>
          <div className={styles.sin}>SIN</div>
        </div>
        <div className={styles.flightduration}>
          <img className={styles.flighticon} alt="" src="/flighticon.svg" />
          <div className={styles.h55mNonStop}>33H 10M, 1-stop</div>
        </div>
        <div className={styles.arrivalDetails}>
          <div className={styles.am}>4:45 PM</div>
          <div className={styles.sin1}>LAX</div>
        </div>
      </div>
      <div className={styles.priceSection}>
        <img className={styles.priceSectionChild} alt="" src="/vector-1.svg" />
        <b className={styles.s730}>{s730}</b>
      </div>
    </div>
  );
};

export default FlightCard2;

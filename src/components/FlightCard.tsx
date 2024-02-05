import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FlightCard.module.css";

type FlightCardType = {
  japan?: string;
  singaporeAirlines?: string;
  aM?: string;
  h55MNonStop?: string;
  s730?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
};

const FlightCard: FunctionComponent<FlightCardType> = ({
  japan,
  singaporeAirlines,
  aM,
  h55MNonStop,
  s730,
  propPadding,
  propWidth,
}) => {
  const airlineSectionStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      width: propWidth,
    };
  }, [propPadding, propWidth]);

  return (
    <div className={styles.flightCard}>
      <div className={styles.airlineSection} style={airlineSectionStyle}>
        <img className={styles.japanIcon} alt="" src={japan} />
        <div className={styles.singaporeAirlines}>{singaporeAirlines}</div>
      </div>
      <div className={styles.flightDetailsSection}>
        <div className={styles.departureDetails}>
          <div className={styles.am}>{aM}</div>
          <div className={styles.sin}>SIN</div>
        </div>
        <div className={styles.flightduration}>
          <img className={styles.flighticon} alt="" src="/flighticon.svg" />
          <div className={styles.h55mNonStop}>{h55MNonStop}</div>
        </div>
        <div className={styles.arrivalDetails}>
          <div className={styles.am}>9:50 PM</div>
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

export default FlightCard;

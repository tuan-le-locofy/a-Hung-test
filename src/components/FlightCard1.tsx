import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FlightCard1.module.css";

type FlightCard1Type = {
  sIA?: string;
  singaporeAirlines?: string;
  aM?: string;
  h55MNonStop?: string;
  aM1?: string;
  s730?: string;

  /** Style props */
  propRight?: CSSProperties["right"];
  propGap?: CSSProperties["gap"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FlightCard1: FunctionComponent<FlightCard1Type> = ({
  sIA,
  singaporeAirlines,
  aM,
  h55MNonStop,
  aM1,
  s730,
  propRight,
  propGap,
  propMinWidth,
}) => {
  const singaporeAirlinesStyle: CSSProperties = useMemo(() => {
    return {
      right: propRight,
    };
  }, [propRight]);

  const flightDetailsSectionStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div className={styles.flightCard}>
      <div className={styles.airlineSection}>
        <img className={styles.siaIcon} alt="" src={sIA} />
        <div
          className={styles.singaporeAirlines}
          style={singaporeAirlinesStyle}
        >
          {singaporeAirlines}
        </div>
      </div>
      <div
        className={styles.flightDetailsSection}
        style={flightDetailsSectionStyle}
      >
        <div className={styles.departureDetails}>
          <div className={styles.am}>{aM}</div>
          <div className={styles.sin}>SIN</div>
        </div>
        <div className={styles.flightduration}>
          <img className={styles.flighticon} alt="" src="/flighticon.svg" />
          <div className={styles.h55mNonStop}>{h55MNonStop}</div>
        </div>
        <div className={styles.arrivalDetails}>
          <div className={styles.am}>{aM1}</div>
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

export default FlightCard1;

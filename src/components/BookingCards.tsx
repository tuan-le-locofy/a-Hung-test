import { FunctionComponent } from "react";
import BookingCard from "./BookingCard";
import styles from "./BookingCards.module.css";

const BookingCards: FunctionComponent = () => {
  return (
    <div className={styles.bookingCards}>
      <BookingCard
        airlineLogo="/icon.svg"
        singaporeAirlines="Singapore Airlines"
        price="$1128"
        depCode="SIN"
        depName="Singapore"
        arrCode="LAX"
        arrName="Los Angeles"
        flightClass="Economy"
        numPeople="2 Adults"
        expedia="Expedia"
        timeAgo="1s ago!"
      />
      <BookingCard
        airlineLogo="/icon1.svg"
        singaporeAirlines="American Airlines"
        price="$1024"
        depCode="SFO"
        depName="San Francisco"
        arrCode="SIN"
        arrName="Singapore"
        flightClass="First Class"
        numPeople="1 Adults"
        expedia="Kayak"
        timeAgo="2s ago!"
        propPadding="8px 22px"
        propTextAlign="right"
      />
      <BookingCard
        airlineLogo="/icon2.svg"
        singaporeAirlines="Japan Airlines"
        price="$2996"
        depCode="PHX"
        depName="Phoenix"
        arrCode="DXB"
        arrName="Dubai"
        flightClass="Economy"
        numPeople="3 Adults"
        expedia="Skyscanner"
        timeAgo="3s ago!"
        propPadding="8px 22px"
        propTextAlign="left"
      />
      <div className={styles.showMore}>
        <div className={styles.showMore1}>Show more</div>
        <img className={styles.iconBack} alt="" src="/icon--back@2x.png" />
      </div>
    </div>
  );
};

export default BookingCards;

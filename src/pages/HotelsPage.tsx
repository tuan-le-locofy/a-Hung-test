import { FunctionComponent } from "react";
import Header from "../components/Header";
import LosAngelesContainer from "../components/LosAngelesContainer";
import HotelResultsContainer from "../components/HotelResultsContainer";
import NewsletterFormContainer from "../components/NewsletterFormContainer";
import Footer from "../components/Footer";
import styles from "./HotelsPage.module.css";

const HotelsPage: FunctionComponent = () => {
  return (
    <div className={styles.hotelsPage}>
      <Header />
      <LosAngelesContainer />
      <HotelResultsContainer />
      <div className={styles.footerSection}>
        <NewsletterFormContainer />
        <Footer />
      </div>
    </div>
  );
};

export default HotelsPage;

import { FunctionComponent, useState } from "react";
import { TextField, Icon, Checkbox, FormControlLabel } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import TopHeader from "../components/TopHeader";
import InputGroup from "../components/InputGroup";
import FlightCards from "../components/FlightCards";
import BookingCards from "../components/BookingCards";
import NewsletterFormSection from "../components/NewsletterFormSection";
import Footer from "../components/Footer";
import styles from "./ResultsPage.module.css";

const ResultsPage: FunctionComponent = () => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.resultsPage}>
        <TopHeader />
        <div className={styles.searchFormSection}>
          <div className={styles.searchContainer}>
            <div className={styles.bannerGradient} />
            <img
              className={styles.bannerBackgroundIcon}
              alt=""
              src="/banner-background@2x.png"
            />
            <div className={styles.searchSection}>
              <div className={styles.title}>
                <div className={styles.whereAreYou}>Where are you off too?</div>
              </div>
              <div className={styles.searchForm}>
                <div className={styles.inputsRow}>
                  <InputGroup />
                  <InputGroup />
                  <div className={styles.inputGroup}>
                    <div className={styles.dateField}>
                      <DatePicker
                        label="Date"
                        value={dateFieldDateTimePickerValue}
                        onChange={(newValue: any) => {
                          setDateFieldDateTimePickerValue(newValue);
                        }}
                        sx={{}}
                        slotProps={{
                          textField: {
                            variant: "outlined",
                            size: "medium",
                            fullWidth: true,
                            required: false,
                            autoFocus: false,
                            error: false,
                            color: "primary",
                            placeholder: "Date",
                          },
                          openPickerIcon: {
                            component: () => <></>,
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.buttonGroup}>
                  <button className={styles.searchFlightsButton}>
                    <div className={styles.button}>Search flights</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.searchResults}>
          <div className={styles.searchFilters}>
            <div className={styles.resultsSummary}>
              <div className={styles.resultsParent}>
                <div className={styles.results}>10 out of 177 Results</div>
                <img className={styles.frameChild} alt="" src="/vector-2.svg" />
              </div>
            </div>
            <div className={styles.stops}>
              <b className={styles.results1}>Stops</b>
              <FormControlLabel
                className={styles.component1formcheckbox}
                label="1 Stop"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
              <FormControlLabel
                className={styles.component1formcheckbox1}
                label="2 Stops"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
            </div>
            <div className={styles.bookingOptions}>
              <b className={styles.results2}>Booking Options</b>
              <FormControlLabel
                className={styles.component1formcheckbox}
                label="Book on Fickleflight"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
              <FormControlLabel
                className={styles.component1formcheckbox1}
                label="Official Airline Websites"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
            </div>
            <div className={styles.flightExperience}>
              <b className={styles.results3}>Flight Experience</b>
              <FormControlLabel
                className={styles.component1formcheckbox}
                label="No overnight flights"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
              <FormControlLabel
                className={styles.component1formcheckbox1}
                label="No long stop-overs"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
            </div>
            <img className={styles.frameChild} alt="" src="/vector-2.svg" />
            <div className={styles.airlines}>
              <b className={styles.results4}>Airlines</b>
              <FormControlLabel
                className={styles.component1formcheckbox}
                label="Singapore Airlines"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
              <FormControlLabel
                className={styles.component1formcheckbox1}
                label="Qatar Airways"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
            </div>
          </div>
          <div className={styles.resultsSection}>
            <FlightCards />
            <div className={styles.recentlyBooked}>
              <div className={styles.recentlyBookedTitle}>
                <b className={styles.results5}>Recently booked</b>
                <img
                  className={styles.recentlyBookedTitleChild}
                  alt=""
                  src="/vector-21.svg"
                />
              </div>
              <BookingCards />
            </div>
          </div>
        </div>
        <div className={styles.footerSection}>
          <div className={styles.footerSection}>
            <NewsletterFormSection />
            <Footer />
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default ResultsPage;

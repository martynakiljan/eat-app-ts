/** @format */


import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Help.scss";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <>
      <div className="help-wrapper">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#FFFFFF" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ backgroundColor: "#0D9276", color: "#FFFFFF" }}
          >
            Is my data secured?
          </AccordionSummary>
          <AccordionDetails>
            Yes. To ensure our customer's data are secure, we use end-to-end
            encryption.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#FFFFFF" }} />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{ backgroundColor: "#0D9276", color: "#FFFFFF" }}
          >
            How do I make payment?
          </AccordionSummary>
          <AccordionDetails>
            You can make payments through several means all supported by the
            app. Paypal and the rest.
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#FFFFFF" }} />}
            aria-controls="panel3-content"
            id="panel3-header"
            sx={{ backgroundColor: "#0D9276", color: "#FFFFFF" }}
          >
            what services do you provide?
          </AccordionSummary>
          <AccordionDetails>
            We will deliver your order as quickly as possible to the address
            provided at no additional cost. A place where you can eat there will
            also be opened soon.
          </AccordionDetails>
        </Accordion>

        <h2 className="help__question">Still have questions?</h2>
        <p className="help__text">
          Can't find the answer you're looking for? Please fill out the form
          below. Want to file a complaint? Fill out the form to get answers
          ASAP.
          <br></br>
          <Link to="/Contact" className="form__link">
            [Link to the form]
          </Link>
        </p>
      </div>
    </>
  );
};

export default Help;

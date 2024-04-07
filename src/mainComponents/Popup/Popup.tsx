/** @format */
import { ReactNode } from "react";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import { Modal, useMediaQuery } from "@mui/material";
import "./Popup.scss";
import { useBasket } from "../../context/BasketContext";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type PopupProps = {
  children: ReactNode;
  handleClose: () => void;
};
const Popup: React.FC<PopupProps> = ({ children, handleClose }) => {
  const { open } = useBasket();
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isSmallScreen ? "90%" : "70%",
    backgroundColor: "background.paper",
    border: "2px solid #000",
    boxShadow: "0 3px 5px rgba(0, 0, 0, 0.2)",
    p: isSmallScreen ? 1 : 4,
  };

  return open ? (
    <div className="shopping__modal">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box sx={style}>
            <FontAwesomeIcon icon={faXmark} onClick={handleClose} />
            {children}
          </Box>
        </Fade>
      </Modal>
    </div>
  ) : null;
};

export default Popup;

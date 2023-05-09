import "./Modal.css";
import { useEffect } from "react";

const Modal = ({ notifContent, closeNotif }) => {
  // useEffect(() => {
  //  let setTimeoutID = setTimeout(() => {
  //     closeNotif();
  //   }, 5000);

  //   return () => {
  //     clearTimeout(setTimeoutID);
  //   };

  // }, []);

  return (
    <div className="modal-box">
      <div className="notification">{notifContent}</div>
      <button onClick={closeNotif}>X</button>
    </div>
  );
};

export default Modal;

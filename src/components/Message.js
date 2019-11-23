import React from "react";
import Toast from "react-bootstrap/Toast";

const Message = () => (
  <Toast>
    <Toast.Header>
      <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
      <strong className="mr-auto">Success</strong>
    </Toast.Header>
    <Toast.Body>Successfully added song to queue</Toast.Body>
  </Toast>
);

export default Message;

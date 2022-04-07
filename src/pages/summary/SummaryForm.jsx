import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import {
  Form,
  FormCheck,
  OverlayTrigger,
  Popover,
  PopoverBody,
} from "react-bootstrap";

const SummaryForm = () => {
  const [tcChecked, setTcChecked] = useState(false);
  const popoverRight = (
    <Popover id="popover-basic">
      <PopoverBody> no icecream will actually be delivered</PopoverBody>
    </Popover>
  );
  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popoverRight}>
        <span style={{ color: "blue" }}>terms and conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <FormCheck
          type="checkbox"
          checked={tcChecked}
          onChange={() => setTcChecked(!tcChecked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!tcChecked}>
        confirm order
      </Button>
    </Form>
  );
};

export default SummaryForm;

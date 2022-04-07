import React, { useEffect, useState } from "react";
import axios from "axios";
import ScoopOption from "./ScoopOption";
import { Row } from "react-bootstrap";
import ToppingOption from "./ToppingOption";
import AlertBanner from "../common/AlertBanner";
const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    const run = async () => {
      try {
        const res = await axios.get(`http://localhost:3030/${optionType}`);
        setItems(res.data);
      } catch (error) {
        setAlert(true);
      }
    };
    run();
  }, [optionType]);
  if (alert) {
    return <AlertBanner />;
  }
  const ItemComponet = optionType === "scoops" ? ScoopOption : ToppingOption;
  const optionItems = items.map((item) => (
    <ItemComponet key={item.name} name={item.name} imagePath={item.imagePath} />
  ));
  return (
    <div>
      <Row>{optionItems}</Row>
    </div>
  );
};

export default Options;

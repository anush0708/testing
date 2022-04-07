import React, { useEffect, useState } from "react";
import axios from "axios";
import ScoopOption from "./ScoopOption";
import { Row } from "react-bootstrap";
const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const run = async () => {
      try {
        const res = await axios.get(`http://localhost:3030/${optionType}`);
        setItems(res.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    run();
  }, [optionType]);
  const ItemComponet = optionType === "scoops" ? ScoopOption : null;
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

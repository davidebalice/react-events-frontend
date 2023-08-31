import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { EventData, Event } from "./types";
import apiUrls, { demoMode } from "../../apiConfig";
import classes from "./Card.module.css";
import Loading from "../../common/Loading/Loading";

interface SearchProps {
  onResults: (results: Event[]) => void;
}

const Search: React.FC<SearchProps> = ({ onResults }) => {
  const [category, setCategory] = useState("");
  const [text, setText] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSearch = () => {
    const queryString = `?category=${category}&text=${text}&startDate=${startDate}&endDate=${endDate}`;

    axios
      .get<Event[]>(apiUrls.getHomeEvents)
      .then((response) => {
        console.log("API Response:", response.data);
        onResults(response.data);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Text</Form.Label>
        <Form.Control
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Start Date</Form.Label>
        <Form.Control
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>End Date</Form.Label>
        <Form.Control
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" onClick={handleSearch}>
        Search
      </Button>
    </Form>
  );
};

export default Search;

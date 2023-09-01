import React, { useState, useCallback, useMemo, useContext } from "react";
import axios from "axios";
import { Form, Button, Col } from "react-bootstrap";
import { EventData, Event } from "./types";
import apiUrls, { demoMode } from "../../config";
import classes from "./Search.module.css";
import { Context } from "../../context";

interface SearchProps {
  onResults: (results: Event[]) => void;
  onLoading: (loadingSearch: any) => void;
}

const Search: React.FC<SearchProps> = ({ onResults, onLoading }) => {
  const [category, setCategory] = useState("");
  const [text, setText] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startSearch, setStartSearch] = useState(false);
  const { categories } = useContext(Context);
  const memoizedOnResults = useMemo(() => onResults, [onResults]);

  const handleSearch = useCallback(() => {
    setStartSearch(true);
    const queryString = `?limit=20&category=${category}&key=${text}&startDate=${startDate}&endDate=${endDate}`;
    onLoading(true);
    axios
      .get<EventData>(`${apiUrls.getSearchEvents}${queryString}`)
      .then((response) => {
        console.log("API Response:", response.data);

        const filteredEvents: Event[] = response.data.events.filter(
          (event: Event) => {
            const startDate = new Date(event.startDate);
            const today = new Date();

            if (demoMode) {
              return true;
            } else {
              return startDate >= today;
            }
          }
        );
        memoizedOnResults(filteredEvents);
        onLoading(false);
        setStartSearch(false);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, [category, text, startDate, endDate, onResults]);

  const handleSearchClick = () => {
    handleSearch();
  };

  return (
    <section>
      <div className="container">
        <Form className={classes.searchContainer}>
          <Col md={3} xs={12}>
            <Form.Group className={classes.col}>
              <Form.Group controlId="exampleSelect">
                <Form.Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className={classes.input}
                >
                  <option value=""> - Category - </option>
                  {categories.map((category) => (
                    <option value={category._id}>{category.name}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Form.Group>
          </Col>
          <Col md={3} xs={12}>
            <Form.Group className={classes.col}>
              <Form.Control
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className={classes.input}
                placeholder="Text"
              />
            </Form.Group>
          </Col>
          <Col md={2} xs={12}>
            <Form.Group className={classes.col}>
              <Form.Control
                type="date"
                value={startDate}
                className={classes.input}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={2} xs={12}>
            <Form.Group className={classes.col}>
              <Form.Control
                type="date"
                value={endDate}
                className={classes.input}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={2} xs={12} className={classes.buttonContainer}>
            <Button
              variant="primary"
              onClick={handleSearchClick}
              className={classes.button}
              disabled={startSearch}
            >
              Search
            </Button>
          </Col>
        </Form>
      </div>
    </section>
  );
};

export default Search;

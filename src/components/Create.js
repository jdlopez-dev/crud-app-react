import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [headLine, setHeadLine] = useState("");
  const [body, setBody] = useState("");

  // Using useNavigation for redirecting to pages
  let history = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uni = ids.slice(0, 8);
    let a = headLine,
      b = body;

    let news = JSON.parse(localStorage.getItem("listaNoticias")) || [];
    news.push({
      id: uni,
      HeadLine: a,
      Body: b,
    });
    localStorage.setItem("listaNoticias", JSON.stringify(news));

    history("/crud-app-react");
  };

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formBasicHeadLine">
          <Form.Control
            onChange={(e) => setHeadLine(e.target.value)}
            type="text"
            placeholder="Enter headLine"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicBody">
          <Form.Control
            onChange={(e) => setBody(e.target.value)}
            type="text"
            placeholder="Enter body"
            required
          />
        </Form.Group>

        <Button
          onClick={(e) => handelSubmit(e)}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>

        <Link className="d-grid gap-2" to="/">
          <Button variant="info" size="lg">
            Home
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Create;

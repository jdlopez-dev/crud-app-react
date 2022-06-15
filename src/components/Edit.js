import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Edit() {

  const [headLine, setHeadLine] = useState("");
  const [body, setBody] = useState("");
  const [news, setNews] = useState([]);

  let history = useNavigate();
  let { id } = useParams();

  const handelSubmit = (e) => {
    e.preventDefault();
    // update the values in localstorage
    let index = news.findIndex((item) => item.id === id);
    news[index].HeadLine = headLine;
    news[index].Body = body;
    localStorage.setItem("listaNoticias", JSON.stringify(news));

    history("/");
  };

  useEffect(() => {
    // fetching the data from localstorage
    let newsData = JSON.parse(localStorage.getItem("listaNoticias")) || [];
    let item = newsData.find((item) => item.id === id);
    setHeadLine(item.HeadLine);
    setBody(item.Body);
    setNews(newsData);
  }, []);

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        {/* setting a name from the input textfiled */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            value={headLine}
            onChange={(e) => setHeadLine(e.target.value)}
            type="text"
            placeholder="Enter new headLine"
          />
        </Form.Group>

        {/* setting a age from the input textfiled */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            value={body}
            onChange={(e) => setBody(e.target.value)}
            type="text"
            placeholder="Enter new body"
          />
        </Form.Group>

        <Button
          onClick={(e) => handelSubmit(e)}
          variant="primary"
          type="submit"
          size="lg"
        >
          Update
        </Button>

        {/* Redirecting to main page after editing */}
        <Link className="d-grid gap-2" to="/">
          <Button variant="warning" size="lg">
            Home
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Edit;

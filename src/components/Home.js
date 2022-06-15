import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  let history = useNavigate();
  const [news, setnews] = useState([]);

  function deleted(id) {
    let index = news.findIndex((item) => item.id === id);
    news.splice(index, 1);
    localStorage.setItem("listaNoticias", JSON.stringify(news));
    setnews(news);
    history("/");
  }

  useEffect(() => {
    // fetching the data from localstorage
    let news = JSON.parse(localStorage.getItem("listaNoticias")) || [];
    setnews(news);
  }, []);

  return (
    <div style={{ margin: "10rem" }}>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Titular</th>
            <th>Contenido</th>
          </tr>
        </thead>
        <tbody>
          {news.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.HeadLine}</td>
                <td>{item.Body}</td>
                <td>
                  <Link to={`/edit/${item.id}`}>
                    <Button variant="info">Update</Button>
                  </Link>
                </td>

                <td>
                  <Button onClick={(e) => deleted(item.id)} variant="danger">
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Link className="d-grid gap-2" to="/create">
        <Button variant="warning" size="lg">
          Create
        </Button>
      </Link>
    </div>
  );
}

export default Home;

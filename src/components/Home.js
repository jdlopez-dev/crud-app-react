import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import array from "./array";

function Home() {
  const [news, setNews] = useState([]);

  const deleted = (id) => {
    const filterData = news.filter((n) => id !== n.id);
    setNews(filterData);
    localStorage.setItem("listaNoticias", JSON.stringify(filterData));
  };

  useEffect(() => {
    let newsData = localStorage.getItem("listaNoticias");
    if (newsData) {
      setNews(JSON.parse(newsData));
    } else {
      localStorage.setItem("listaNoticias", JSON.stringify(array));
      setNews(array);
    }
  }, []);

  return (
    <div style={{ margin: "10rem" }}>
      <Link className="d-grid gap-2" to="/crud-app-react/create">
        <Button variant="warning" size="lg">
          Create
        </Button>
      </Link>
      <br></br>
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
                  <Link to={`/crud-app-react/edit/${item.id}`}>
                    <Button variant="info">Update</Button>
                  </Link>
                </td>

                <td>
                  <Button onClick={() => deleted(item.id)} variant="danger">
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Home;

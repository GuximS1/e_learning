import { Card, Rate } from "antd";
import React from "react";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import { myCourses } from "../database/courses";
import Router from "next/router";
function Courses() {
  const { Meta } = Card;
  return (
    <div className={styles.courses}>
      <Header />
      <div className={styles.cards}>
        {myCourses.map((item) => (
          <Card
            hoverable
            key={item.id}
            style={{ width: 300 }}
            cover={<img alt="example" src={item.img} height={250} />}
            onClick={() =>
              Router.router!.push({
                pathname: "[id]",
                query: {
                  id: item.id,
                },
              })
            }
          >
            <Meta title={item.title} />
            <br />
            <Meta title={`Price: $${item.price.toFixed(2)}`} />
            <br />
            <Meta title={`Rating: ${item.stars}`} />
            <Rate disabled defaultValue={item.stars} allowHalf />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Courses;

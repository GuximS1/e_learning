import Router, { useRouter } from "next/router";
import React, { useState } from "react";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import { myCourses } from "../database/courses";
import { Button, Card, Input, Modal, Radio, Rate, Select } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { saveAs } from "file-saver";
import Link from "next/link";

function SingleCourse() {
  const router = useRouter().query;
  const data = myCourses[Number(router.id) - 1];
  const [bought, setBought] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<Number>(1);
  const [comments, setComments] = useState(data?.comments);
  const [review, setReview] = useState({
    email: "",
    gender: "",
    comment: "",
    star: 0,
  });

  const success = () => {
    setBought(true);
    Modal.success({
      content: "Congratulations! You bought this course.",
    });
  };

  const saveFile = () => {
    saveAs("../database/certificate.pdf", "certificate.pdf");
  };

  return (
    <div className={styles.courses}>
      <Header />
      {!bought && (
        <div className={styles.courseData}>
          <h1>{data?.title}</h1>
          <p className={styles.description}>{data?.description}</p>
          <h2 className={styles.price}>Price: ${data?.price?.toFixed(2)}</h2>
          <Button
            type="default"
            onClick={success}
            style={{
              width: "250px",
              height: "40px",
              marginLeft: "39.5%",
              marginTop: "2%",
            }}
          >
            Buy Course
          </Button>
        </div>
      )}
      {bought && (
        <div className={styles.courseunlocked}>
          <div className={styles.leftcourse}>
            <h1>{data?.title}</h1>
            <Radio.Group
              defaultValue={0}
              buttonStyle="solid"
              onChange={(e) => {
                setPageNumber(e.target.value as Number);
                console.log(e.target.value);
              }}
            >
              <Radio.Button value={0}>1</Radio.Button>
              <Radio.Button value={1}>2</Radio.Button>
              <Radio.Button value={2}>3</Radio.Button>
              <Radio.Button value={3}>4</Radio.Button>
            </Radio.Group>
            <p style={{ width: "70%", color: "white", fontSize: "25px" }}>
              {data?.content[Number(pageNumber)]}
            </p>
            {pageNumber === 3 && (
              <Button type="primary">
                <a href="/certificate.pdf" target="_blank" download>
                  Get Certificate
                </a>
              </Button>
            )}
          </div>
          <div className={styles.rightcourse}>
            <h1>Reviews</h1>
            {comments?.map((item) => (
              <Card
                title={
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      columnGap: "20px",
                    }}
                  >
                    <Avatar
                      src={
                        item.gender === "male"
                          ? "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png"
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw3npIq7me4nmUuH1qN6b1_3wLTwRn250nQQ&usqp=CAU"
                      }
                    />
                    <p>{item.email}</p>
                  </div>
                }
                bordered
              >
                <h1>{item.comment}</h1>
                <h2>
                  Rating: {item.star}
                  <Rate disabled defaultValue={1} count={1} />
                </h2>
              </Card>
            ))}
            <div
              style={{
                border: "1px solid black",
                borderRadius: "4px",
                padding: "15px",
              }}
            >
              <p>Email</p>
              <Input
                placeholder="Email"
                onChange={(e) =>
                  setReview((old) => ({
                    ...old,
                    email: e.target.value,
                  }))
                }
              />
              <p>Gender</p>
              <Select
                style={{ width: "100%" }}
                onChange={(e) =>
                  setReview((old) => ({
                    ...old,
                    gender: e,
                  }))
                }
              >
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="female">Female</Select.Option>
              </Select>
              <p>Rating</p>
              <Rate
                allowHalf
                onChange={(e) =>
                  setReview((old) => ({
                    ...old,
                    star: e,
                  }))
                }
              />
              <p>Comment</p>
              <Input.TextArea
                placeholder="Comment"
                onChange={(e) =>
                  setReview((old) => ({
                    ...old,
                    comment: e.target.value,
                  }))
                }
              />
              <br />
              <br />
              <Button
                type="primary"
                onClick={() => setComments((old) => [...old, review])}
              >
                Add Comment
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleCourse;

import {
  MailOutlined,
  NumberOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Col, Divider, Image, Menu, Row } from "antd";
import moment from "moment";
import Link from "next/link";
import { useState } from "react";
import Frame from "../components/frame";
import db from "../utils/db";

const App = ({ posts }) => {
  const { SubMenu } = Menu;
  const [selected, setSelected] = useState("Feed");
  console.log(posts);

  const feed = posts.map((i) => (
    <Row>
      <Col
        span={24}
        style={{ padding: "20px" }}
        className="feed-item"
        onClick={() => console.log(i.title)}
      >
        <Link href={`/post/${i.id}`}>
          <div>
            <div style={{ display: "flex" }}>
              <h3
                style={{
                  flex: "0 0 65%",
                }}
              >
                {i.title}
              </h3>
              <i
                style={{
                  flex: 1,
                  marginTop: "5px",
                  textAlign: "right",
                  color: "gray",
                }}
              >
                {moment(i.date).format("MM-DD-YY")}
              </i>
            </div>
            <p>{i.body}</p>
            <a href="#">read more</a>
          </div>
        </Link>
      </Col>
    </Row>
  ));

  return (
    <>
      <Frame content={feed}></Frame>
    </>
  );
};

export async function getStaticProps() {
  const posts = await db
    .collection("posts")
    .orderBy("date", "desc")
    .limit(5)
    .get();

  console.log(posts.docs);
  return {
    props: {
      posts: posts.docs.map((doc) => {
        const data = doc.data();
        return { id: doc.id, ...data, date: moment(data.date).toISOString() };
      }),
    },
  };
}

export default App;

import {
  MailOutlined,
  NumberOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Col, Divider, Image, Menu, Row } from "antd";
import Link from "next/link";
import { useState } from "react";
import Frame from "../components/frame";
import feedItems from "../content/posts.json";

const App = () => {
  const { SubMenu } = Menu;
  const [selected, setSelected] = useState("Feed");

  const feed = feedItems.map((i) => (
    <Row>
      <Col
        span={24}
        style={{ padding: "20px 0 20px 20px" }}
        className="feed-item"
        onClick={() => console.log(i.title)}
      >
        <Link href={`/post/${i.title}`}>
          <div>
            <h3>{i.title}</h3>
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

export default App;

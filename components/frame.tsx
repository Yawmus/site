import {
  MailOutlined,
  NumberOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Col, Divider, Image, Menu, Row } from "antd";
import Link from "next/link";
import { useState } from "react";

const Frame = ({ content }) => {
  const { SubMenu } = Menu;
  const [selected, setSelected] = useState("Feed");
  const [showAlt, setShowAlt] = useState(false);

  const navItems = [
    { name: "Feed", icon: <ProfileOutlined /> },
    {
      name: "Projects",
      icon: <NumberOutlined />,
      subMenu: [
        { group: "Games", items: ["Test", "ABC"] },
        {
          group: "Software",
          items: ["Charlotte Sarte extension", "Mexican bread speed-loader"],
        },
      ],
    },
    { name: "Contact", icon: <MailOutlined /> },
  ].map((e) => {
    if (e.subMenu != null) {
      const subMenu = e.subMenu.map((s) => (
        <Menu.ItemGroup title={s.group}>
          {s.items.map((i) => (
            <Menu.Item key={i}>{i}</Menu.Item>
          ))}
        </Menu.ItemGroup>
      ));
      return (
        <SubMenu key="SubMenu" icon={e.icon} title={e.name}>
          {subMenu}
        </SubMenu>
      );
    } else {
      return (
        <Menu.Item
          onClick={(e) => {
            setSelected(e.key);
          }}
          key={e.name}
          icon={e.icon}
          style={{}}
        >
          {e.name}
        </Menu.Item>
      );
    }
  });

  const feedItems = [
    {
      title: "Ambition",
      body: "Thinking that different feed elements should load their own respective [slug]. How to save posts appropriately? Will they be perputually managed by code changes?",
    },
    {
      title: "The best Jerry! The best!",
      body: `Another year, another new personal website. I decided this time to throw everything out of the window and start fresh. Decided to try out NextJS and Vercel - so far effortless! The design style I went with is antd which is very common. The ideal state to achieve would be to replicate my prior functionality, but make it look more personal.
	    `,
    },
    { title: "Martha Lincoln", body: `asdf` },
    {
      title: "French Dip",
      body: `
      containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of
      Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard
      dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. It`,
    },
  ];

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
      <Row style={{ marginTop: "80px" }}></Row>
      <Row>
        <Col span={7} offset={2} style={{ marginTop: "150px" }}>
          <Row>
            <Col span={22} style={{ textAlign: "right" }}>
              <Link href="/">
                <div className="main-pic-wrapper">
                  <Image
                    className="alt-pic"
                    src={"/scourge-color.jpeg"}
                    style={{ padding: "0px 5px" }}
                    preview={false}
                  />
                  <Image
                    className="main-pic"
                    src={"/scourge-bw.jpeg"}
                    style={{ padding: "0px 5px" }}
                    preview={false}
                  />
                </div>
              </Link>
              <h1>Peter Jacobsen</h1>
              <p>API Developer</p>
              <p>Graphics Programmer</p>
            </Col>
            <Col span={1} offset={1}>
              <Divider type="vertical" dashed={true} />
            </Col>
          </Row>
        </Col>
        <Col span={8} offset={0}>
          <Row>
            <Col span={23} offset={1}>
              <Menu
                selectedKeys={[selected]}
                mode="horizontal"
                style={{ marginBottom: "45px" }}
                inlineIndent={24}
              >
                {navItems}
              </Menu>
              {content}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Frame;

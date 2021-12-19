import { Col, Row, PageHeader } from "antd";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import Frame from "../../components/frame";
import db from "../../utils/db";

const Post = ({ data }) => {
  console.log(data);
  const router = useRouter();
  const { title, subTitle, body } = data;

  const content = (
    <div>
      <PageHeader
        className="site-page-header"
        onBack={() => router.back()}
        title={title}
        subTitle={subTitle}
      />
      <p>{body}</p>
    </div>
  );

  return (
    <>
      <Frame content={content}></Frame>
    </>
  );
};

export async function getStaticProps({ params }) {
  const post = await db.collection("posts").doc(params.id).get();
  let data = post.data();
  data = {
    ...data,
    date: moment(data.date).toISOString(),
  };

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  let posts = await db.collection("posts").get();
  const paths = posts.docs.map((doc) => ({ params: { id: doc.id } }));

  return { paths, fallback: "blocking" };
}

export default Post;

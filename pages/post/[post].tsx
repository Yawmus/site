import { Col, Row, PageHeader } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import Frame from "../../components/frame";

const Post = ({ title }) => {
  const router = useRouter();

  const post = {
    title: "Ambition",
    subTitle: "Chip off the ol' block",
    body: "Thinking that different feed elements should load their own respective [slug]. How to save posts appropriately? Will they be perputually managed by code changes?",
  };
  const content = (
    <div>
      <PageHeader
        className="site-page-header"
        onBack={() => router.back()}
        title={post.title}
        subTitle={post.subTitle}
      />
      <p>{post.body}</p>
    </div>
  );

  return (
    <>
      <Frame content={content}></Frame>
    </>
  );
};

// export async function getStaticProps() {
// 	// Call an external API endpoint to get posts.
// 	// You can use any data fetching library
// 	// const res = await fetch('https://.../posts')
// 	// const posts = await res.json()

// 	// By returning { props: { posts } }, the Blog component
// 	// will receive `posts` as a prop at build time
// 	return {
// 	  props: {
// 	    posts,
// 	  },
// 	}
//       }

export default Post;

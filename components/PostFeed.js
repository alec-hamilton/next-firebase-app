import PostItem from "./PostItem";

const PostFeed = ({ posts, admin }) => {
  return posts
    ? posts.map((post) => {
        return <PostItem post={post} key={post.slug} admin={admin} />;
      })
    : null;
};

export default PostFeed;

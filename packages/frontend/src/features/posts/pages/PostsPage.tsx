import { useQuery } from "urql";
import { graphql } from "src/lib/generated/gql";
import { PostCard } from "../components/PostCard";
import { Spinner } from "@nextui-org/react";

// 利用されるクエリの定義
const GetAllPostsQuery = graphql(`
  query GetAllPostsQuery {
    getAllPosts(limit: 10) {
      post_uuid
      ...PostFragment
    }
  }
`);

const PostsPage = () => {
  // graphqlに対してクエリを実行
  const [result] = useQuery({
    query: GetAllPostsQuery,
  });

  // クエリの結果を取得
  const { data, fetching } = result;

  // ローディング中であれば
  if (fetching)
    return (
      <div className="flex items-center justify-center">
        <Spinner label="読み込み中..." color="warning" />
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-between">
      <div className="flex flex-col w-8/12 space-y-4">
        {data?.getAllPosts.map((post) => (
          <PostCard key={post.post_uuid} post={post} />
        ))}
      </div>
    </div>
  );
};

export { PostsPage };

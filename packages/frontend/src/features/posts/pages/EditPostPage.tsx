import { useRef } from "react";
import { useQuery, useMutation } from "urql";
import { graphql } from "src/lib/generated/gql";
import { Button, Spinner, Card, CardHeader, CardBody, CardFooter, Input, Textarea } from "@nextui-org/react";
import { useParams, useNavigate } from "@tanstack/react-router";
import toast from "react-hot-toast";

// 自分のユーザを取得するクエリ
const GetMeQuery = graphql(`
  query GetMeQuery {
    getMyUser {
      user_uuid
    }
  }
`);

// 記事の内容を取得するクエリ
// クエリするフラグメントを定義
const PostDetailForEditQuery = graphql(`
  query PostDetailForEditQuery($post_uuid: UUID!) {
    getPostByUUID(uuid: $post_uuid) {
      post_uuid
      title
      body
      created_at
      updated_at
      is_public
      user {
        user_uuid
      }
    }
  }
`);

// 記事の更新を行うミューテーション
const UpdatePostMutation = graphql(`
  mutation UpdatePostMutation($post_uuid: UUID!, $title: TitleString!, $body: BodyString!) {
    updatePost(post_uuid: $post_uuid, input: { title: $title, body: $body }) {
      post_uuid
    }
  }
`);

const EditPostPage = () => {
  // 自分がauthorである記事であれば編集可能となる

  // パラメータを取得
  const post_uuid = useParams({
    from: "/auth/posts/$post_uuid/edit",
  })?.post_uuid;

  // クエリ用のフックを実行
  const [result] = useQuery({
    query: PostDetailForEditQuery,
    variables: {
      post_uuid: post_uuid,
    },
  });
  // 自分のユーザを取得するクエリを実行
  const [myUserResult] = useQuery({
    query: GetMeQuery,
    requestPolicy: "cache-first",
  });
  // ミューテーションを行うためのフックを実行
  const [, executeMutation] = useMutation(UpdatePostMutation);

  // Inputに相当する参照の取得
  const titleInputRef = useRef<HTMLInputElement>(null);
  const bodyInputRef = useRef<HTMLInputElement>(null);

  // 読み込み中であれば
  if (result.fetching) {
    return (
      <div className="flex items-center justify-center">
        <Spinner label="読み込み中..." color="warning" />
      </div>
    );
  }

  const post = result.data?.getPostByUUID;

  if (result.error || !post) {
    toast.error("記事の取得に失敗しました。");
    return (
      <div className="flex items-center justify-center">
        <p>記事の取得に失敗しました。</p>
      </div>
    );
  }

  // もしauthorが自分でなければ
  if (result.data?.getPostByUUID.user.user_uuid !== myUserResult.data?.getMyUser.user_uuid) {
    toast.error("この記事は編集できません。");
    return (
      <div>
        <p>この記事は編集できません。</p>
      </div>
    );
  }

  const handle_form_onsubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = await executeMutation({
      post_uuid: post.post_uuid,
      title: titleInputRef.current?.value || "",
      body: bodyInputRef.current?.value || "",
    });

    if (result.error) {
      toast.error("記事の更新に失敗しました。");
      return;
    }

    toast.success("記事を更新しました。");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-6 flex-row gap-2 w-3/4">
        <Card isBlurred className="w-full bg-secondary col-span-5" shadow="sm">
          <CardHeader>
            <div className="flex">
              <h1 className="text-2xl font-bold truncate">{post.title}</h1>
            </div>
          </CardHeader>
          <form className="flex flex-col gap-2" onSubmit={handle_form_onsubmit}>
            <CardBody>
              <Input type="text" className="w-full bg-background rounded-lg" defaultValue={post.title} ref={titleInputRef} />
              <Textarea className="w-full bg-background rounded-lg" defaultValue={post.body} ref={bodyInputRef} />
            </CardBody>
            <CardFooter className="justify-end">
              <Button type="submit" color="primary" variant="shadow" size="lg" className="hover:-translate-y-1">
                更新する
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export { EditPostPage };

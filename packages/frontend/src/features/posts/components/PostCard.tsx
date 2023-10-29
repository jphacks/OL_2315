import { Link } from "@tanstack/react-router";
import { Card, CardBody, CardFooter, Button, Dropdown, DropdownItem, DropdownTrigger, DropdownMenu, CardHeader, Image, Spacer } from "@nextui-org/react";
import { FragmentType, useFragment } from "src/lib/generated";
import { UserCardForPost } from "./UserCardForPost";
import { graphql } from "src/lib/generated/gql";
import { Details, DotsVertical, Heart, MessageChatbot } from "tabler-icons-react";

// クエリするフラグメントを定義
const PostFragment = graphql(`
  fragment PostFragment on Post {
    post_uuid
    title
    body
    user {
      screen_name
      handle
      image_url
      ...UserPopupFragment
    }
  }
`);

const PostCard = ({ post: post_frag }: { post: FragmentType<typeof PostFragment> }) => {
  // フラグメントの型を指定して対応するデータを取得
  const post = useFragment(PostFragment, post_frag);

  return (
    <div className="grid grid-cols-3 flex-row  gap-2">
      <Card isBlurred className="col-span-2 w-full bg-secondary" shadow="sm">
        <CardHeader>
          <div className="flex">
            <h1 className="text-2xl font-bold truncate">{post.title}</h1>
          </div>
        </CardHeader>
        <CardBody>
          <div className="flex justify-between bg-background rounded-lg divide-x-2">
            <div className="flex m-2">
              <p className="text-xl line-clamp-3">{post.body}</p>
            </div>
            <div className="flex flex-col justify-end m-2">
              <div className="flex flex-row gap-2">
                <Heart size={24} strokeWidth={1.5} />
                10
              </div>
              <div className="flex flex-row gap-2">
                <MessageChatbot size={24} strokeWidth={1.5} />
                10
              </div>
              <Button isIconOnly variant="light" radius="full">
                <DotsVertical size={24} strokeWidth={1.5} />
              </Button>
            </div>
          </div>
        </CardBody>
        <CardFooter className="justify-end">
          <div className="flex flex-row gap-2">
            <Dropdown className="h-min">
              <DropdownTrigger>
                <div className="flex flex-row gap-2 hover:-translate-y-1 duration-75">
                  <Image src={post.user.image_url} className="rounded-full h-unit-4xl" />
                  <div className="flex flex-col justify-start m-4">
                    <p className="text-xl">{post.user.screen_name}</p>
                    <p className="text-xl">@{post.user.handle}</p>
                  </div>
                </div>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>
                  <UserCardForPost user={post.user} />
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Button color="primary" variant="shadow" size="lg" className="h-unit-4xl hover:-translate-y-1">
              <Link
                to="/auth/posts/$post_uuid"
                params={{
                  post_uuid: post.post_uuid,
                }}
              >
                <Details size={24} strokeWidth={1.5} />
                詳細を見る
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
      <Card isBlurred className="col-span-1 h-full shadow-sm" shadow="sm">
        <Image src="https://picsum.photos/400" width={400} height={400} className="h-full overflow-hidden" />
      </Card>
    </div>
  );
};

export { PostCard };

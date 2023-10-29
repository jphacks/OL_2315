import { useMutation } from "urql";
import { graphql } from "src/lib/generated/gql";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Button, useDisclosure } from "@nextui-org/react";
import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import toast from "react-hot-toast";

const CreatePostMutation = graphql(`
  mutation CreatePostMutation {
    createPost {
      post_uuid
      title
      body
    }
  }
`);

const CreatePostPage = () => {
  // このページは単にポストを作成するだけ
  // ポストを作成するか問いかけるモーダルを表示し、許可されたらポストを作成
  // ポストが作成されたら、ユーザーをポストの詳細ページにリダイレクト

  // ミューテーションを行うためのフックを実行
  const [_, executeMutation] = useMutation(CreatePostMutation);

  // モーダルの表示状態を管理するフックを実行
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // ページ遷移を行うためのフックを実行
  const navigate = useNavigate({
    from: "/auth/posts/create",
  });

  useEffect(() => {
    onOpen();
  }, []);

  const handle_onclick_cancel = () => {
    onOpenChange();
    navigate({
      to: "/auth/posts",
    });
  };

  const handle_onclick_ok = async () => {
    const result = await executeMutation({});

    if (result.error) {
      toast.error("投稿の作成に失敗しました。");
      return;
    }

    toast.success("投稿を作成しました。");

    navigate({
      to: `/auth/posts/${result.data?.createPost.post_uuid}`,
    });

    onOpenChange();
  };

  return (
    <div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader>Create Post</ModalHeader>
          <ModalBody>投稿を作成しますか？</ModalBody>
          <ModalFooter>
            <Button onClick={handle_onclick_cancel}>Cancel</Button>
            <Button color="primary" onClick={handle_onclick_ok}>
              OK
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export { CreatePostPage };

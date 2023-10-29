import { Button, Image, Spacer } from "@nextui-org/react";
import { Link } from "@tanstack/react-router";

export const RootIndexPage = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <Image src="/digicrie.png" className="w-unit-6xl" />
        <h1 className="text-4xl font-bold">DIGICRIE</h1>
        <p className="text-xl">技術者の個人開発とサポーターを繋ぐ架け橋となるSNS。</p>
        <Spacer y={4} />
        <Button color="primary" variant="shadow" className="rounded-full hover:-translate-y-1">
          <Link to="/auth/posts">投稿一覧の表示</Link>
        </Button>
      </div>
    </>
  );
};

import { RootRoute, Route, Router } from "@tanstack/react-router";
import { Document } from "./_document";
import { RootIndexPage } from "./features/index/pages/IndexPage";
import { NotFoundPage } from "./404";
import { ProtectedRouter } from "./lib/route/ProtectedRouter";
import { UsersPage } from "./features/users/pages/UsersPage";
import { UserDetailPage } from "./features/users/pages/UserDetailPage";
import { PostsPage } from "./features/posts/pages/PostsPage";
import { PostDetailPage } from "./features/posts/pages/PostDetailPage";
import { CallBackPage } from "./callback";
import { CreatePostPage } from "./features/posts/pages/CreatePostPage";
import { EditPostPage } from "./features/posts/pages/EditPostPage";

// 以下、ルーティングの設定
const callStackRootRoute = new RootRoute({
  // まずは外側のコンポーネント
  component: () => <Document />,
});

// 根本ルートの設定
const indexRoute = new Route({
  // 親ルートを指定
  getParentRoute: () => callStackRootRoute,
  path: "/",
  // ここに内側のコンポーネントを指定
  component: () => <RootIndexPage />,
});

// 404ルートの設定
const notFoundRoute = new Route({
  // 親ルートを指定
  getParentRoute: () => callStackRootRoute,
  path: "*",
  // ここに内側のコンポーネントを指定
  component: () => <NotFoundPage />,
});

// コールバックページの設定
const callbackRoute = new Route({
  // 親ルートを指定
  getParentRoute: () => callStackRootRoute,
  path: "auth/callback",
  // ここに内側のコンポーネントを指定
  component: () => <CallBackPage />,
});

// authルートの設定
const protectedRoute = new Route({
  // 親ルートを指定
  getParentRoute: () => callStackRootRoute,
  path: "auth",
  // 保護された外枠コンポーネントを指定
  // Outletが指定されているので、このコンポーネントの中に子ルートが表示される
  component: () => <ProtectedRouter />,
});

// auth/usersルートの設定
const authenticatedUserRoute = new Route({
  // 親ルートを指定
  getParentRoute: () => protectedRoute,
  path: "users",
});

// auth/postsルートの設定
const authenticatedPostRoute = new Route({
  // 親ルートを指定
  getParentRoute: () => protectedRoute,
  path: "posts",
});
// auth/usersルート インデックスの設定
const usersRoute = new Route({
  // 親ルートを指定
  getParentRoute: () => authenticatedUserRoute,
  path: "/",
  component: () => <UsersPage />,
});

// auth/users/$user_uuidルートの設定
const userDetailRoute = new Route({
  // 親ルートを指定
  getParentRoute: () => authenticatedUserRoute,
  path: "$user_uuid",
  component: () => <UserDetailPage />,
});

// auth/postsルート インデックスの設定
const postsRoute = new Route({
  // 親ルートを指定
  getParentRoute: () => authenticatedPostRoute,
  path: "/",
  component: () => <PostsPage />,
});

// auth/posts/createルートの設定
const postCreateRoute = new Route({
  // 親ルートを指定
  getParentRoute: () => authenticatedPostRoute,
  path: "create",
  component: () => <CreatePostPage />,
});

// auth/posts/$post_uuidルートの設定
const postDetailRoute = new Route({
  // 親ルートを指定
  getParentRoute: () => authenticatedPostRoute,
  path: "$post_uuid",
  component: () => <PostDetailPage />,
});

// auth/posts/$post_uuid/editルートの設定
const postEditRoute = new Route({
  // 親ルートを指定
  getParentRoute: () => authenticatedPostRoute,
  path: "$post_uuid/edit",
  component: () => <EditPostPage />,
});

// ルータの設定
const router = new Router({
  // 根本ルート
  routeTree: callStackRootRoute.addChildren([
    // /
    indexRoute,
    // *
    notFoundRoute,
    // /auth/callback
    callbackRoute,
    // /auth
    protectedRoute.addChildren([
      // /auth/users
      authenticatedUserRoute.addChildren([
        // /auth/users/
        usersRoute,
        // /auth/users/$user_uuid
        userDetailRoute,
      ]),
      authenticatedPostRoute.addChildren([
        // /auth/posts/
        postsRoute,
        // /auth/posts/create
        postCreateRoute,
        // /auth/posts/$post_uuid
        postDetailRoute,
        // /auth/posts/$post_uuid/edit
        postEditRoute,
      ]),
    ]),
  ]),
});

// tanstack routerを型安全に利用するための型定義
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export { router };

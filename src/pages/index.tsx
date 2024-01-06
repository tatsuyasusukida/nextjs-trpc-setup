import { trpc } from "@/utils/trpc";
import { FC } from "react";

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <h1 className="mt-4 mb-4 text-2xl">Next.js + tRPC Setup</h1>
      <Result></Result>
    </main>
  );
}

const Result: FC = () => {
  const { isLoading, data } = trpc.post.get.useQuery({ id: 1 });

  if (isLoading || !data) {
    return <p>Loading...</p>;
  }

  return (
    <dl className="mb-4">
      <dt className="font-bold">Post ID</dt>
      <dd className="mb-2">{data.id}</dd>
      <dt className="font-bold">Content</dt>
      <dd className="mb-2">{data.content}</dd>
      <dt className="font-bold">User ID</dt>
      <dd className="mb-2">{data.userId}</dd>
    </dl>
  );
};

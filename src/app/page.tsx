import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Welcome to My Next.js Project</h1>
        <p className="mt-4">
          This is a simple page to test your Next.js, tRPC, and pnpm setup.
        </p>
      </div>
      <nav className="flex flex-wrap space-x-4">
        <Link
          href="todolist"
          className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-violet-500 font-mono"
        >
          Main Content
        </Link>
      </nav>
    </>
  );
};

export default HomePage;

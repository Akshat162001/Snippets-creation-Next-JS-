import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const snippets = await prisma.snippet.findMany();
  return (
    <div>
    <h1 className="font-bold text-4xl mb-6 text-center">Home Page (Snippets List)</h1>
      <div className="flex items-center justify-between mb-9">
        <h1 className="text-2xl font-semibold">Snippets</h1>
        <Link href="/snippet/new">
          <Button className="bg-blue-600 text-white hover:bg-blue-700">
            New
          </Button>
        </Link>
      </div>

      {snippets.map((snippet) => (
        <div
          key={snippet.id}
          className="flex items-center justify-between bg-gray-200 p-2 rounded-md my-2"
        >
          <h1 className="text-lg font-medium">{snippet.title}</h1>
          <Link href={`/snippet/${snippet.id}`}>
            <Button variant="link">View</Button>
          </Link>
        </div>
      ))}
    </div>
  );
}

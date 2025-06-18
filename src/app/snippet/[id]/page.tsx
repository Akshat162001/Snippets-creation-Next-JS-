import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as actions from "@/action";
import { notFound } from "next/navigation";

interface SnippetDetailsProps {
  params: { id: string };
}

const SnippetDetailPage = async ({ params }: SnippetDetailsProps) => {
  const id = parseInt(params.id);
  await new Promise((r)=>
    setTimeout(r,2000)
  )
  const snippet = await prisma.snippet.findUnique({
    where: { id },
  });

  if (!snippet) notFound();

  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl">{snippet.title}</h1>
        <div className="flex items-center gap-2">
          <Link href={`/snippet/${snippet.id}/edit`}>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md shadow">
              Edit
            </Button>
          </Link>
          <form action={deleteSnippetAction}>
            <Button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md shadow"
            >
              Delete
            </Button>
          </form>
        </div>
      </div>
      <pre className="p-3 bg-gray-200 rounded mt-4">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetDetailPage;

"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

// Save Snippet
export const saveSnippet = async (id: number, code: string) => {
  await prisma.snippet.update({
    where: { id },
    data: { code },
  });
  redirect(`/snippet/${id}`);
};

// Delete Snippet
export const deleteSnippet = async (id: number) => {
  await prisma.snippet.delete({
    where: { id },
  });
  redirect("/");
};

// Create Snippet with Form Validation
export async function CreateSnippet(
  prevState: { message: string },
  formData: FormData
) {
 
    const title = formData.get("title");
    const code = formData.get("code");

    if (!title || typeof title !== "string") {
      return { message: "Title is required" };
    }

    if (!code || typeof code !== "string") {
      return { message: "Code is required" };
    }

   await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });
   

 
  redirect("/");
}

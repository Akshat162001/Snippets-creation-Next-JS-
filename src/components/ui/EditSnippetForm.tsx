"use client";
import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Snippet } from "@/generated/prisma";
// import type {Snippet} from "@prisma/client"
import { saveSnippet } from "@/action";

const EditSnippetForm = ({ snippet }: { snippet: Snippet }) => {
  const [code, setCode] = useState(snippet.code);
  const ChangeEvenHandler=(value:string="")=>{
    setCode(value)
  }
  const saveSnippetAction = saveSnippet.bind(null, snippet.id, code);
  return (
    <div className="flex flex-col gap-4">
      <form
        action={saveSnippetAction}
        className="flex items-center justify-between"
      >
        <h1 className="font-bold text-xl">Your Code Editor:</h1>
        <Button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md shadow"
        >
          Save
        </Button>
      </form>
      <Editor
        height="40vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={code}
        onChange={ChangeEvenHandler}
      />
    </div>
  );
};

export default EditSnippetForm;

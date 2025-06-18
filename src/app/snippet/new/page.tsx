"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import React, { useActionState } from "react";
import * as actions from "@/action"
const CreatePage = () => {
  const [formStateData,abc]=useActionState(actions.CreateSnippet,{message:""});
   
  return (
    <form action={abc}>
      <div className="my-4">
        <Label htmlFor="title" className="block mb-2 " style={{fontSize:18}}>
          Title
        </Label>
        <Input type="text" name="title" id="title" className="w-full" />
      </div>

      <div className="my-4">
        <Label htmlFor="code" className="block mb-2 " style={{fontSize:18}}>
          Code
        </Label>
        <Textarea name="code" id="code" className="w-full" />
      </div>{formStateData.message && <div className="p-2 bg-red-300 border-2 border-red-600">{formStateData.message}</div>}
      
      <Button
        type="submit"
        className="my-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        New
      </Button>
    </form>
  );
};

export default CreatePage;

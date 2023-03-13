// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import connect from "@/utils/connect";
import ToDoModel from "@/models/todoModel";

export default async function get(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connect();

    const todo = await ToDoModel.find();
    res.json(todo);    
} catch (err) {}
}

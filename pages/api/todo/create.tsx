// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import connect from "@/utils/connect";
import ToDo from "@/models/todoModel";

export default async function create(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connect();
    console.log("connection established");

    console.log("creating document");  

    const doc = await ToDo.create(req.body);

    console.log("document created");

    res.status(200).json({ doc });
  } catch (err) {
    res.json({ err: err });
  }
}

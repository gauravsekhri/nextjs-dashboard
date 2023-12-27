"use server";

import Posts from "@/models/postsModel";
import User from "@/models/userModel";
import { connect } from "@/utils/dbConfig";
import { revalidatePath } from "next/cache";

connect();

export const totalPosts = async () => {
  try {
    const count = await Posts.countDocuments();
    return count;
  } catch {
    return null;
  }
};

export const fetchPosts = async (search: string, page: number) => {
  const regex = new RegExp(search, "i");

  const itemsLimit = 10;

  try {
    const count = await Posts.find({
      title: { $regex: regex },
    }).countDocuments();
    const posts = await Posts.find({ title: { $regex: regex } })
      .limit(itemsLimit)
      .skip(itemsLimit * (page - 1))
      .sort({ createdAt: -1 });
    return { posts, count };
  } catch (err: any) {
    console.log(err);
    throw new Error("err");
  }
};

export const newPost = async (formData: any) => {
  const { title, content, createdBy } = formData;

  try {
    const postData = new Posts({ title, content, createdBy });

    return await postData.save();

    // revalidatePath("/blogs");
    // redirect("/blogs");
  } catch (err: any) {
    console.log(err);
  }
};

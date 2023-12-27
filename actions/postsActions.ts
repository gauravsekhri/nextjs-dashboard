"use server";

import Posts from "@/models/postsModel";
import User from "@/models/userModel";
import { connect } from "@/utils/dbConfig";
import { revalidatePath } from "next/cache";
import { v4 as uuidv4 } from "uuid";

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
  const { title, content, createdBy, isPublished } = formData;

  try {
    const postId = uuidv4();
    console.log(postId);
    const postData = new Posts({
      postId,
      isPublished,
      title,
      content,
      createdBy,
    });

    revalidatePath("/blogs");
    return await postData.save();

    // redirect("/blogs");
  } catch (err: any) {
    console.log(err);
  }
};

export const deletePost = async (postId: any) => {
  try {
    const res = await Posts.deleteOne({ postId: postId });

    revalidatePath("/blogs");
    return res;

    // redirect("/blogs");
  } catch (err: any) {
    console.log(err);
  }
};

export const postById = async (postId: any) => {
  try {
    const res = await Posts.findOne({ postId: postId });

    return res ?? null;
  } catch (err: any) {
    console.log(err);
  }
};

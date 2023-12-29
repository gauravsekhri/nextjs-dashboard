"use server";

import Posts from "@/models/postsModel";
import User from "@/models/userModel";
import { connect } from "@/utils/dbConfig";
import { getRouteLink } from "@/utils/helperFunctions";
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
  const {
    title,
    img,
    content,
    createdBy,
    isPublished,
    metaDescription,
    metaKeywords,
  } = formData;

  try {
    const postId = await uuidv4();
    const routeLink = getRouteLink(title);

    // console.log("metaDescription", metaDescription);

    const reqMetaKeywords = JSON.parse(JSON.stringify(metaKeywords));
    console.log("payload", {
      postId,
      img,
      title,
      content,
      routeLink,
      createdBy,
      isPublished,
      metaDescription,
      metaKeywords: reqMetaKeywords,
    });

    const postData = await new Posts({
      postId,
      img,
      title,
      content,
      routeLink,
      createdBy,
      isPublished,
      metaDescription,
      metaKeywords: "reqMetaKeywords",
    });

    // const res = await postData.save();
    // console.log(res);

    // revalidatePath("/dashboard/blogs");
    // return res;
    return postData;

    // redirect("/blogs");
  } catch (err: any) {
    console.log("err", err);
    return err;
  }
};

export const deletePost = async (postId: any) => {
  try {
    const res = await Posts.deleteOne({ postId: postId });

    revalidatePath("/dashboard/blogs");
    return res;

    // redirect("/blogs");
  } catch (err: any) {
    console.log(err);
  }
};

export const updatePost = async (payload: any) => {
  try {
    const { postId, title, content, metaDescription, metaKeywords } = payload;

    console.log("update payload", payload);

    const res = await Posts.updateOne(
      { postId: postId },
      {
        $set: {
          title: title,
          content: content,
          metaDescription: metaDescription,
          metaKeywords: metaKeywords,
        },
      }
    );

    revalidatePath("/dashboard/blogs");
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
    return null;
  }
};

export const postByRouteLink = async (routeLink: any) => {
  try {
    const res = await Posts.findOne({
      routeLink: routeLink,
    });

    return res ?? null;
  } catch (err: any) {
    console.log(err);
    return null;
  }
};

export const postPublicData = async (routeLink: any) => {
  try {
    const res = await Posts.findOne({
      routeLink: routeLink,
      isPublished: true,
    });

    return res ?? null;
  } catch (err: any) {
    console.log(err);
    return null;
  }
};

export const lastFivePosts = async () => {
  try {
    const posts = await Posts.find({ isPublished: true })
      .sort({ createdAt: -1 })
      .limit(5);
    return posts;
  } catch (err: any) {
    console.log(err);
    throw new Error("err");
  }
};

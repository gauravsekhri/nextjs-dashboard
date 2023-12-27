"use server";

import User from "@/models/userModel";
import { connect } from "@/utils/dbConfig";

connect();

export const toalUsers = async () => {
  try {
    const count = await User.countDocuments();
    return count;
  } catch {
    return null;
  }
};

export const fetchUsers = async (search: string, page: number) => {
  const regex = new RegExp(search, "i");

  const itemsLimit = 10;

  try {
    const count = await User.find({
      fullName: { $regex: regex },
    }).countDocuments();
    const users = await User.find({ fullName: { $regex: regex } })
      .limit(itemsLimit)
      .skip(itemsLimit * (page - 1))
      .sort({ createdAt: -1 });
    return { users, count };
  } catch (err: any) {
    console.log(err);
    throw new Error("err");
  }
};

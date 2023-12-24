import User from "@/models/userModel";
import { connect } from "@/utils/dbConfig";

connect();

export const toalUsers = async () => {
  const count = await User.countDocuments();
  return count;
};

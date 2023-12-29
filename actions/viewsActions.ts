"use server";

import Views from "@/models/viewsModel";
import { connect } from "@/utils/dbConfig";

connect();

export const viewCapture = async (formData: any) => {
  const { postId, userData } = formData;

  console.log("called");

  try {
    const postData = await Views.findOne({ postId: postId });

    if (postData) {
      let updatedViewsData = [...postData.viewsData];
      updatedViewsData.push(userData);

      const res = await Views.updateOne(
        { postId: postId },
        {
          $set: {
            viewsData: updatedViewsData,
          },
        }
      );

      return res;
    } else {
      const newViewDoc = new Views({
        postId: postId,
        viewsData: [userData],
      });

      const res = await newViewDoc.save();
      return res;
    }
  } catch (err: any) {
    console.log("err", err);
    return err;
  }
};

export const totalViews = async () => {
  try {
    const agg = await Views.aggregate([
      {
        $group: {
          _id: null,
          count: {
            $sum: { $size: "$viewsData" },
          },
        },
      },
    ]);

    if (agg && agg?.length > 0) {
      return agg?.[0]?.count;
    } else {
      return 0;
    }
  } catch (err: any) {
    return 0;
  }
};

export const viewActivity = async () => {
  try {
    const recents = await Views.aggregate([
      {
        $unwind: "$viewsData",
      },
      {
        $sort: { "viewsData.time": -1 },
      },
      {
        $project: {
          postId: 1,
          city: "$viewsData.city",
          country: "$viewsData.country",
          time: "$viewsData.time",
        },
      },
    ]);
    return recents;
  } catch (err: any) {
    console.log(err);
    return [];
  }
};

export const viewChartData = async () => {
  try {
    const chartData = await Views.aggregate([
      {
        $unwind: "$viewsData",
      },
      { $replaceRoot: { newRoot: "$viewsData" } },

      {
        $addFields: {
          date: {
            $dateToString: {
              format: "%Y-%m-%d",
              date: "$time",
            },
          },
        },
      },
      {
        $group: {
          _id: "$date",
          // list: { $push: "$$ROOT" },
          count: { $sum: 1 },
        },
      },
      {
        $sort: { _id: 1 },
      },
      {
        $project: {
          _id: 0,
          date: "$_id",
          count: 1,
        },
      },
    ]);
    return chartData;
  } catch (err: any) {
    console.log(err);
    return [];
  }
};

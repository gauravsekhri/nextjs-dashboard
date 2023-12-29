"use client";

import React, { useEffect } from "react";
import axios from "axios";
import { getIpAndCountry } from "@/utils/helperFunctions";
import { viewCapture } from "@/actions/viewsActions";

const PostActivityTracker = ({ postId }: { postId: string }) => {
  const storeTracking = async () => {
    try {
      const data: any = await getIpAndCountry();

      const userData = {
        ...data,
        time: new Date(),
      };

      const capture = await viewCapture({
        postId,
        userData,
      });
      console.log(data);
    } catch (err: any) {
      console.log(err);
    }
  };

  useEffect(() => {
    storeTracking();
  }, []);

  return <></>;
};

export default PostActivityTracker;

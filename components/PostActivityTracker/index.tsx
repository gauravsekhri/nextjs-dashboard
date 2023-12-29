"use client";

import React, { useEffect } from "react";
import axios from "axios";
import { getIpAndCountry } from "@/utils/helperFunctions";
import { viewCapture } from "@/actions/viewsActions";

const PostActivityTracker = ({ postId }: { postId: string }) => {
  const storeTracking = async () => {
    try {
      const localValue = localStorage.getItem(postId);

      if (!localValue) {
        const data: any = await getIpAndCountry();

        const userData = {
          ...data,
          time: new Date(),
        };

        const capture = await viewCapture({
          postId,
          userData,
        });

        localStorage.setItem(postId, "1");
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  useEffect(() => {
    storeTracking();
    console.log("effect");
  }, []);

  return <></>;
};

export default PostActivityTracker;

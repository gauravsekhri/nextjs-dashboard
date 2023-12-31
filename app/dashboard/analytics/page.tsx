import { toalUsers } from "@/actions/userActions";
import {
  totalViews,
  viewActivity,
  viewChartData,
} from "@/actions/viewsActions";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { TrafficChart } from "@/components/AnalyticsModule/TrafficChart";
import { lastFivePosts, totalPosts } from "@/actions/postsActions";
import { getLastUploadTime } from "@/utils/helperFunctions";
import { ScrollArea } from "@/components/ui/scroll-area";
import TargetChart from "@/components/AnalyticsModule/TargetChart";

const Analytics = async () => {
  const [
    users,
    posts,
    fivePosts,
    viewsCount,
    recentActivity,
    trafficData,
  ]: any = await Promise.all([
    toalUsers(),
    totalPosts(),
    lastFivePosts(),
    totalViews(),
    viewActivity(),
    viewChartData(),
  ]);
  return (
    <>
      <div className="p-4 sm:p-4 sm:m-4">
        <div className="flex items-center justify-between mb-4 md:mb-8 lg:mb-12">
          <div className="space-y-1">
            <h2 className="text-2xl text-foreground font-semibold tracking-tight">
              Analytics
            </h2>
            <p className="text-sm text-muted-foreground">
              Quick Analysis of our blogs
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-start space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{posts}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-start space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{viewsCount}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-start space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Ads</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-start space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Registered Users
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{users}</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-5">
          <Card className="col-span-4">
            <CardHeader className="mb-8">
              <CardTitle>Traffic</CardTitle>
              <CardDescription>Traffic analysis on each date.</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <TrafficChart data={trafficData} />
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Popular Posts</CardTitle>
              <CardDescription>You have total {posts} posts.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mt-5">
                {fivePosts.map((ele: any) => (
                  <div className="mb-2 bg-gray-100 px-4 py-3 rounded-md flex justify-between items-center gap-4 dark:bg-gray-800">
                    <span>{ele.title}</span>
                    <span className="italic text-gray-500 text-sm">
                      {getLastUploadTime(ele?.createdAt)}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-5">
          <Card className="col-span-3">
            <CardHeader className="mb-4">
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>
                Realtime view activity of your posts.
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-4">
              <ScrollArea className="h-[400px]">
                <div className="mt-5 pl-2">
                  {recentActivity.map((ele: any) => (
                    <div className="mb-2 bg-gray-100 px-4 py-3 rounded-md dark:bg-gray-800 italic text-gray-500 text-sm lowercase">
                      Someone
                      {" viewed a post " +
                        getLastUploadTime(ele?.time) +
                        " in " +
                        ele?.city +
                        "," +
                        ele?.country +
                        "."}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
          <Card className="col-span-4">
            <CardHeader className="mb-8">
              <CardTitle>Target</CardTitle>
              <CardDescription>
                See your current traget progress
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <TargetChart currentViews={viewsCount} totalViewsTarget={300} />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Analytics;

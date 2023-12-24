import AppLayout from "@/components/layouts/app";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <AppLayout>
      <div className="p-4 sm:p-4 sm:m-4">
        <div className="flex items-center justify-between mb-4 md:mb-8 lg:mb-12">
          <div className="space-y-1">
            <h2 className="text-2xl text-foreground font-semibold tracking-tight">
              Dashboard
            </h2>
            <p className="text-sm text-muted-foreground">
              All the figures have been fetched from the database
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-start space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Blogs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-start space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,000</div>
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
              <div className="text-2xl font-bold">15</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}

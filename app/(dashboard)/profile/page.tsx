import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const ProfilePage = () => {
  return (
    <>
      <div className="p-4 sm:p-4 sm:m-4">
        <div className="flex items-center justify-between mb-4 md:mb-8 lg:mb-12">
          <div className="space-y-1">
            <h2 className="text-2xl text-foreground font-semibold tracking-tight">
              Profile
            </h2>
            <p className="text-sm text-muted-foreground">
              Update your settings
            </p>
          </div>
        </div>
        <div className="space-y-6 max-w-3xl">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Full Name</Label>
            <Input type="text" placeholder="John Cena" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="text" placeholder="email@example.com" disabled />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;

import type { Metadata } from "next";
import AppLayout from "@/components/layouts/app";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Crafted with love by Gaurav Sekhri",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppLayout>{children}</AppLayout>;
}

import Sidebar from "../Sidebar";
import authOptions from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { ScrollArea } from "../ui/scroll-area";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <ScrollArea className="h-screen">
      <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50 dark:bg-black">
        <Sidebar session={session} />
        <div className="lg:m-2 grow w-full bg-white dark:bg-gray-800 rounded-xl ring-1 ring-gray-200 dark:ring-gray-800">
          {children}
        </div>
      </div>
    </ScrollArea>
  );
}

import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
    error: "/notfound",
  },
});

export const config = {
  matcher: [
    // "/users/:path*" //use this syntax for nested routes,
    "/analytics",
    "/blogs",
    "/users",
  ],
};

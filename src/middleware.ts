"use server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define que todas as rotas precisam de autenticação
const isProtectedRoute = createRouteMatcher(["/(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect(); // Exige login para acessar qualquer rota
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)", // Protege também as rotas API
  ],
};

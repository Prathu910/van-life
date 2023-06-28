import { redirect } from "react-router-dom";

export async function requireAuth() {
  const isLoggedIn = localStorage.getItem("login") ?? false;

  if (!isLoggedIn) {
    throw redirect("/login?message=You must need to login first.");
  }
}

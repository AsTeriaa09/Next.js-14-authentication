"use server";

import { sessionOptions, SessionData, defaultSession } from "@/lib";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

let username = "aster";
let isPro = true;
let isBlocked = true;

export const getSession = async () => {
  const session = await getIronSession<SessionData>(
    await cookies(),
    sessionOptions
  );
  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }
  return session;
};

export const login = async (formData: FormData) => {
  const session = await getSession();
  const formUsername = formData.get("username") as string;
  const formPassword = formData.get("password") as string;

  // const user = await db.getUser({username,password})

  if (formUsername !== username) {
    return { error: "invalid credentials" };
  }

  session.userId = "1";
  session.username = formUsername;
  session.isPro = isPro;
  session.isLoggedIn = true;

  await session.save();
  redirect("/");
};

export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/");
};

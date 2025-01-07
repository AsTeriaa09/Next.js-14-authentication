import { SessionOptions } from "iron-session";

export interface SessionData {
  userId?: string;
  username?: string;
  ing?: string;
  isPro?: boolean;
  isLoggedIn:boolean,
}

export const sessionOptions: SessionOptions = {
  password: process.env.SECRET_KEY!,
  cookieName: "asteria",
  cookieOptions:{
    httpOnly:true,
    secure:process.env.NODE_ENV === "production"
  }
};

export const defaultSession: SessionData ={
    isLoggedIn: false
}

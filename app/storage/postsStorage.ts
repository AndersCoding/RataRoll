import AsyncStorage from "@react-native-async-storage/async-storage";
import { IUserPost } from "../interface/IUserPost";

const KEY = "user_posts_v1";
const imageKEY = "profileImage"
const backgroundColor = "backgroundColor"
const titleKEY = "profileTitle"
const userName = "userName"

export function changeUserName(name: string):Promise<void>{
  return AsyncStorage.setItem(userName, name);
}

// Profile title
export function changeProfileTitle(title:string): Promise<void>{
  return AsyncStorage.setItem(titleKEY, title);
}

export function getUserName(): Promise<string | null> {
  return AsyncStorage.getItem(userName);
}

export function getUserTitle(): Promise<string | null> {
  return AsyncStorage.getItem(titleKEY);
}

// Background color
export function changeBackgroundColor(color: string): Promise<void> {
  return AsyncStorage.setItem(backgroundColor, color);
}

export function getProfileImage(): Promise<string | null> {
  return AsyncStorage.getItem(imageKEY);
}

export async function getUserPosts(): Promise<IUserPost[]> {
  const raw = await AsyncStorage.getItem(KEY);
  return raw ? (JSON.parse(raw) as IUserPost[]) : [];
}

export async function addUserPost(post: IUserPost): Promise<IUserPost[]> {
  const current = await getUserPosts();
  const next = [post, ...current];
  await AsyncStorage.setItem(KEY, JSON.stringify(next));
  return next;
}

export async function clearUserPosts() {
  await AsyncStorage.removeItem(KEY);
}

export async function deleteUserPost(id: string | number): Promise<IUserPost[]> {
  const current = await getUserPosts();
const next = current.filter((p) => String(p.id) !== String(id));
  await AsyncStorage.setItem(KEY, JSON.stringify(next));
  return next;
}

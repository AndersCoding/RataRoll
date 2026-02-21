import AsyncStorage from "@react-native-async-storage/async-storage";
import { IUserPost } from "../interface/IUserPost";

const KEY = "user_posts_v1";
const imageKEY = "profileImage"

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

export async function deleteUserPost(id: number): Promise<IUserPost[]> {
  const current = await getUserPosts();
  const next = current.filter((p) => p.id !== id);
  await AsyncStorage.setItem(KEY, JSON.stringify(next));
  return next;
}

import { User } from "../types/user.interface";

export function createUser(
  username: User["username"],
  password: User["password"],
  pond: User["userPond"] = null,
  ducks: User["ducksOwned"] = [],
): User {
  return {
    id: crypto.randomUUID(),
    username,
    password,
    userPond: pond,
    ducksOwned: ducks,
  };
}

import { Duck, Pond } from "../../3/types";
import { BaseUser } from "./base-user.interface";

export interface User extends BaseUser {
  userPond: Pond | null;
  ducksOwned: Duck[];
}

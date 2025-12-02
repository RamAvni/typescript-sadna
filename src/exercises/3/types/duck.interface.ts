import { WaterBird } from "./waterBird.interface";

// Do NOT add properties to this interface, there's another way
export interface Duck extends WaterBird {
  quackWord: string;
}

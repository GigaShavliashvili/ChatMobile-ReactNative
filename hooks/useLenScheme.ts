import { en, geo } from "@/assets/Texts/authText";
import { useLenStore } from "@/globalStore/globalStore";
const lengs = { en, geo };
export const useLenScheme = () => lengs[useLenStore().len];

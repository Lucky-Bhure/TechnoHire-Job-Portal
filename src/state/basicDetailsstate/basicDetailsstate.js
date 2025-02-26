import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const basicDetailsAtop=atom({
    key:"basicDetails",
    default:null,
    effects_UNSTABLE:[persistAtom]
})
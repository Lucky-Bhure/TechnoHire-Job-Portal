import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const userAuthState = atom({
    key: "userAuthState",
    default: {
        isAuthenticated: false,
    },
    effects_UNSTABLE: [persistAtom],
});

export const employeeLoginDetailsAtom = atom({
    key: "employeeLoginDetails",
    default: null,
    effects_UNSTABLE: [persistAtom],
});

export const userForgotPasswordAtom = atom({
    key: "userForgotPassword",
    default: null,
    effects_UNSTABLE: [persistAtom],
});

export const confirmPasswordAtom = atom({
    key: "confirmPassword",
    default: null,
    effects_UNSTABLE: [persistAtom],
});

export const verifyOtpAtom = atom({
    key: "verifyOtp",
    default: null,
    effects_UNSTABLE: [persistAtom],
});

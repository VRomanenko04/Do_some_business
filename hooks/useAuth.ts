import { RootState } from "@/app/globalRedux/store";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const useAuth = () => {
    const { email, uid } = useSelector((state: RootState) => state.auth);
    let isAuth;

    if (email === null || email === undefined) {
        isAuth = false
    } else {
        isAuth = true
    }

    return {
        isAuth,
        email,
        uid
    }
}
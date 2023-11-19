import { firebaseDatabase } from "@/app/firebase";
import { IUserData } from "@/app/globalRedux/Features/userData.slice";
import { get, ref } from "firebase/database";

export const fetchDbData = async (uid: string): Promise<IUserData | null> => {
    try {
        const userRef = ref(firebaseDatabase, 'users/' + uid);
        const snapshot = await get(userRef);
    
        if (snapshot.exists()) {
            if (snapshot.exists()) {
                const userData = snapshot.val();
                return userData as IUserData;
            }
        }
        return null
    } catch(err) {
        console.log(`UserData not found ${err}`);
        return null;
    }
}
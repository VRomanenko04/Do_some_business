import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { actions as UserAuthActions } from "@/app/globalRedux/Features/userAuth.slice";
import { actions as UserDataActions } from "@/app/globalRedux/Features/userData.slice";

const rootActions = {
    ...UserAuthActions,
    ...UserDataActions,
}

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => 
    bindActionCreators(rootActions, dispatch)
    ,[dispatch])
}
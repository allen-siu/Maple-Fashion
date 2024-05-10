import { RootState } from "../store/store";
import { useEffect } from "react"
import { useSelector } from "react-redux";
import { renderAvatar } from "../store/storeController";

export default function Avatar() {
    const avatar = useSelector((state: RootState) => state.avatar)

    useEffect(() => {
        renderAvatar(avatar);
    }, [avatar]);


    return (
        <img
            src=""
        >
            Filler text
        </img>
    )
}
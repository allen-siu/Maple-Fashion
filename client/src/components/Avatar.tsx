import { RootState } from "../store/store";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { renderAvatar } from "../store/storeController";

export default function Avatar() {
    const avatar = useSelector((state: RootState) => state.avatar)

    const [avatarImageSrc, setAvatarImageSrc] = useState<string>("");

    useEffect(() => {
        async function getRenderedAvatar() {
            const avatarSrc = await renderAvatar(avatar);
            setAvatarImageSrc(avatarSrc)
        }
        getRenderedAvatar();
    }, [avatar]);


    return (
        <div className="w-full h-full flex justify-center items-center">
            <img className=" w-1/4" src={avatarImageSrc} />
        </div>
    )
}
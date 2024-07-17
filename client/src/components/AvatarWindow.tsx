import Avatar from "./Avatar";
import Wardrobe from "./Wardrobe";

export default function AvatarWindow() {


    return (

        <div className="flex-col flex-auto w-2/5 h-[calc(100vh-72px)] max-h-[calc(100vh-72px)]">
            <Avatar />
            <Wardrobe />
        </div>

    )
}
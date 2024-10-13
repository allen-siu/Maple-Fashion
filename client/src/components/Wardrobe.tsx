import { useSelector } from "react-redux"
import { RootState } from "../store/store/store"
import { AvatarState } from "../store/store/reducers/avatarSlice"
import WardrobePiece from "./WardrobePiece"


export default function Wardrobe() {

    const avatar: AvatarState = useSelector((state: RootState) => state.avatar)

    return (
        <div className="bg-gray-100 h-[calc(100vh-72px-45vh)] mt-[3vh]">
            <div className="grid grid-rows-4 grid-cols-3 gap-2">
                <WardrobePiece piece={avatar.Hair} />
                <WardrobePiece piece={avatar.Face} />
                <WardrobePiece piece={avatar["Face Accessory"]} />
                <WardrobePiece piece={avatar["Eye Decoration"]} />
                <WardrobePiece piece={avatar.Hat} />
                <WardrobePiece piece={avatar.Top} />
                <WardrobePiece piece={avatar.Bottom} />
                <WardrobePiece piece={avatar.Overall} />
                <WardrobePiece piece={avatar.Earrings} />
                <WardrobePiece piece={avatar.Glove} />
                <WardrobePiece piece={avatar.Cape} />
                <WardrobePiece piece={avatar.Shoes} />
                <WardrobePiece piece={avatar.Weapon} />
            </div>
        </div>
    )
}
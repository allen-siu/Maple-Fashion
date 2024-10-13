import { useDispatch } from "react-redux";
import { Cosmetic } from "../store/storeTypes";
import { removeEquip } from "../store/store/reducers/avatarSlice";

interface WardrobePieceProp {
    piece: Cosmetic | null
}


export default function WardrobePiece({piece}: WardrobePieceProp) {

    const dispatch = useDispatch();
    const callRemoveEquip = () => {
        if (piece) {
            dispatch(removeEquip(piece.cosmeticCategory))
        }
    }

    let itemCard: any = ""
    if (piece != null) {
        itemCard = (
            <div 
                className="flex items-center p-4 border rounded-lg shadow-md max-w-md hover:bg-gray-300"
                onClick={callRemoveEquip}
            >
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img className="w-16 h-16 object-cover rounded-md" src={piece.icon} />
                    </div>
                    <div className="max-h-30 flex-row ml-4 overflow-y-clip">
                        <div className="w-24 max-h-14 line-clamp-2 text-md text-clip font-bold">{piece.name}</div>
                        <div className="w-24 h-5 line-clamp-1 text-sm text-gray-500">{piece.cosmeticCategory}</div>
                    </div>
                </div>
                <button className=" ml-4 p-2 text-red-500 hover:text-red-700">
                    &times;
                </button>
            </div>
        )
    }

    return (
        itemCard
    )
}
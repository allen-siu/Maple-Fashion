import { useSelector } from "react-redux"
import { saveAvatar } from "../store/store/storeController"
import { RootState } from "../store/store/store"
import { AvatarState } from "../store/store/reducers/avatarSlice"


export default function HeaderBar() {

    const avatar: AvatarState = useSelector((state: RootState) => state.avatar)

    const uploadAvatar = () => {
        const name = 'Test Name'
        saveAvatar(name, avatar)
    }

    return (
        <div className="h-[72px] ">
            <header className="bg-red-400 text-white p-4 flex justify-between items-center">
                <div className="md:flex w-3/5">
                    <div className=" w-48 h-10 md:me-0 mb-4 md:mb-0 flex items-center justify-center">
                        
                        <span className="text-2xl">Maple Fashion</span>
                    </div>

                    <div className="w-full flex-grow px-4 pl-10">
                        <input
                            type="text"
                            className="w-full px-4 py-2 rounded-full text-black"
                            placeholder="Search..."
                        />
                    </div>
                </div>
                <div className="flex items-center space-x-4">

                    <button onClick={uploadAvatar}>
                        Click here
                    </button>

                    <button className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center">
                    {/* Profile Icon Placeholder */}
                    <span className="text-xl font-bold">P</span>
                    </button>
                </div>
            </header>
        </div>
    )
}
import { useSelector } from "react-redux"
import { saveAvatar } from "../store/store/storeController"
import { RootState } from "../store/store/store"
import { AvatarState } from "../store/reducers/avatarSlice"
import { useDispatch } from "react-redux"
import { changeModal, ModalType } from "../store/reducers/modalSlice"
import { useEffect, useState } from "react"
import { User } from "../store/auth/authTypes"
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated"
import useAuthUser from "react-auth-kit/hooks/useAuthUser"
import useSignOut from "react-auth-kit/hooks/useSignOut"

export default function AccountOptions() {

    const isAuthenticated = useIsAuthenticated();
    const [authStatus, setAuthStatus] = useState(isAuthenticated);

    const authUser = useAuthUser<User>()

    const [dropdownOpen, setDropdownOpen] = useState(false)

    const dispatch = useDispatch()
    const avatar: AvatarState = useSelector((state: RootState) => state.avatar)

    const signOut = useSignOut()

    useEffect(() => {
        setAuthStatus(isAuthenticated)
    }, [isAuthenticated])

    const handleSignOut = () => {
        setDropdownOpen(false)
        signOut()
    }

    const uploadAvatar = () => {
        // open modal to name the avatar
    }

    const openLogin = () => {
        dispatch(changeModal(ModalType.LOGIN))
    }
    const openRegister = () => {
        dispatch(changeModal(ModalType.REGISTER))
    }

    return (
        <div className="flex items-center space-x-4">
            
            {!authStatus && 
            <div>
                <button 
                    className="text-black font-medium hover:underline"
                    onClick={openLogin}
                >
                    Log in
                </button>

                <button 
                    className="bg-black text-white font-medium rounded-full px-6 py-2 hover:bg-gray-800"
                    onClick={openRegister}
                >
                    Sign up
                </button>
            </div>
            }

            {authStatus && 
            <div className="flex items-center">
                <button
                    className="bg-black text-white font-medium rounded-full px-6 py-2 hover:bg-gray-800"
                    onClick={uploadAvatar}
                >
                    Save
                </button>

                <div
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="cursor-pointer text-white hover:text-gray-900"
                >
                    {authUser?.username}{' ▼'}
                </div>
                <div className="relative inline-block text-left">
                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1">
                            {/* Option 1: My Avatars */}
                            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                                My Avatars
                            </button>
            
                            {/* Option 2: Sign Out */}
                            <button 
                                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                                onClick={handleSignOut}
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                    )}
                </div>
            </div>
            }
        </div>
    )
}
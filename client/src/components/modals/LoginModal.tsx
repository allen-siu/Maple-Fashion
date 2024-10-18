import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../../store/store/store";
import { changeModal, ModalType } from "../../store/reducers/modalSlice";
import { useState } from "react";
import { login } from "../../store/auth/authController";
import useSignIn from "react-auth-kit/hooks/useSignIn";


export default function LoginModal() {

    const dispatch = useDispatch()
    const currentModal = useSelector((state: RootState) => state.modal.currentModal)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const signIn = useSignIn()


    const openRegisterModal = () => {
        dispatch(changeModal(ModalType.REGISTER))
        document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
    }

    const closeModal = () => {
        dispatch(changeModal(ModalType.NONE))
        document.body.style.overflow = "auto"; // Re-enable scrolling when modal is closed
    }

    const handleLogin = async () => {
        const data = await login(username, password)
        console.log(data)
        if (data.status == 200) {
            const test = signIn({
                auth: {
                    token: data.token,
                    type: 'Bearer'
                },
                userState: {
                    username: data.username
                }
            })

            console.log(test)
        }
    }

    const isOpen = (currentModal == ModalType.LOGIN)
    return (
        <div>
            {isOpen && (
            <div className="modal-overlay" onClick={closeModal}>
                { /* Stops clicks from propagating from modal-content to modal-overlay */}
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    {/* Login Form */}
                    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                        <div className="flex justify-center items-center space-x-3">
                            <img src="./image.png" alt="Logo" className="h-12" />
                            <h1>Maple Fashion</h1>
                        </div>
                        <div className="text-center">
                            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Welcome back!</h2>
                        </div>

                        <h1 className="text-center">{errorMessage}</h1>
                        <div className="mt-8 space-y-6">
                            <div className="rounded-md shadow-sm">
                                <div>
                                    <input
                                        placeholder="Username"
                                        className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        required
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="mt-4">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={handleLogin}
                                >
                                    Sign in
                                </button>
                            </div>
                        </div>

                        <div className="text-sm text-center mt-4">
                            {"Don't have an account? "}
                            <button
                                onClick={openRegisterModal}
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}
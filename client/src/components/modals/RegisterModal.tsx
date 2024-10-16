import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../../store/store/store";
import { changeModal, ModalType } from "../../store/reducers/modalSlice";
import { useState } from "react";
import { register } from "../../store/auth/authController";

export default function RegisterModal() {
    
    const dispatch = useDispatch()
    const currentModal = useSelector((state: RootState) => state.modal.currentModal)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const openLoginModal = () => {
        dispatch(changeModal(ModalType.LOGIN))
        document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
    }

    const closeModal = () => {
        dispatch(changeModal(ModalType.NONE))
        document.body.style.overflow = "auto"; // Re-enable scrolling when modal is closed
    }

    const handleRegister = () => {
        register(username, password)
    }

    const isOpen = (currentModal == ModalType.REGISTER)
    return (
        <div>
            {isOpen && (
            <div className="modal-overlay" onClick={closeModal}>
                {/* <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"> */}
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md" onClick={(e) => e.stopPropagation()}>
                        <h2 className="text-center text-2xl font-bold mb-4">Sign Up</h2>
                        <div className="text-center space-y-4">
                            <h1>{errorMessage}</h1>
                            <div>
                                <input
                                    placeholder="Username"
                                    className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    required
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            <button
                                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                onClick={handleRegister}
                            >
                                Sign up
                            </button>
                        </div>
                        <button
                            onClick={closeModal}
                            className="mt-4 text-indigo-600 hover:text-indigo-500"
                        >
                            Close
                        </button>
                    </div>
                {/* </div> */}
            </div>
            )}
        </div>
    )
}
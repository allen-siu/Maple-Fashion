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
    const [feedbackMessage, setFeedbackMessage] = useState('')

    const openLoginModal = () => {
        dispatch(changeModal(ModalType.LOGIN))
        document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
    }

    const closeModal = () => {
        dispatch(changeModal(ModalType.NONE))
        document.body.style.overflow = "auto"; // Re-enable scrolling when modal is closed
    }

    const handleRegister = async () => {
        const data = await register(username, password, confirmPassword)
        setFeedbackMessage(data.message)

        if (data.status == 200) {
            setUsername('')
            setPassword('')
            setConfirmPassword('')
        }
    }

    const isOpen = (currentModal == ModalType.REGISTER)
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
                            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Create an Account</h2>
                            <h2>{feedbackMessage}</h2>
                        </div>

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
                                <div className="mt-4">
                                    <input
                                        type="password"
                                        placeholder="Confirm Password"
                                        className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        required
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={handleRegister}
                                >
                                    Sign in
                                </button>
                            </div>
                        </div>

                        <div className="text-sm text-center mt-4">
                            {"Already have an account? "}
                            <button
                                onClick={openLoginModal}
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Sign in
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
        // <div>
        //     {isOpen && (
        //     <div className="modal-overlay" onClick={closeModal}>
        //         {/* <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"> */}
        //             <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md" onClick={(e) => e.stopPropagation()}>
        //                 <h2 className="text-center text-2xl font-bold mb-4">Sign Up</h2>
        //                 <div className="text-center space-y-4">
        //                     <h1>{errorMessage}</h1>
        //                     <div>
        //                         <input
        //                             placeholder="Username"
        //                             className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        //                             required
        //                             value={username}
        //                             onChange={(e) => setUsername(e.target.value)}
        //                         />
        //                     </div>
        //                     <div>
        //                         <input
        //                             type="password"
        //                             placeholder="Password"
        //                             className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        //                             required
        //                             value={password}
        //                             onChange={(e) => setPassword(e.target.value)}
        //                         />
        //                     </div>
        //                     <div>
        //                         <input
        //                             type="password"
        //                             placeholder="Confirm Password"
        //                             className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        //                             required
        //                             value={confirmPassword}
        //                             onChange={(e) => setConfirmPassword(e.target.value)}
        //                         />
        //                     </div>
        //                     <button
        //                         className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        //                         onClick={handleRegister}
        //                     >
        //                         Sign up
        //                     </button>
        //                 </div>
        //                 <button
        //                     onClick={closeModal}
        //                     className="mt-4 text-indigo-600 hover:text-indigo-500"
        //                 >
        //                     Close
        //                 </button>
        //             </div>
        //         {/* </div> */}
        //     </div>
        //     )}
        // </div>
    )
}
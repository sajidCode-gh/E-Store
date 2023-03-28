import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <div>sign In</div>;<button onClick={logGoogleUser}>LogIn</button>
        </div>
    );
};

export default SignIn;

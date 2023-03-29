import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <div>sign In</div>;<button onClick={logGoogleUser}>LogIn</button>
            <SignUpForm />
        </div>
    );
};

export default SignIn;

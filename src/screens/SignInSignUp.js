import Header from "../Header";
import SignInComponent from "../SignInComponent";

function SignInSignUp() {
    return (
        <div style={{ display: "flex", flexDirection: "row", height: "100vh", overflow: "hidden" }}>
            <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
                <SignInComponent />
            </div>
            <div style={{}}>
                <img src="HeroBackground.png" alt="" style={{ height: "100vh" }} />
            </div>
        </div>
    );
}

export default SignInSignUp;

import useAuth from "../auth/useAuth";


const userCredentials = {}

export default function LoginPage() {

    const { login } = useAuth();

    return (
        <div>
            <h1>Login page</h1>
            <button
                className="btn btn-primary"
                onClick={()=>login(userCredentials)}
            >
                Login
            </button>
        </div>
    )
}

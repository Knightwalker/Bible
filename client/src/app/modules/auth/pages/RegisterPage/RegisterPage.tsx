import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

type TUserRegisterRequest = {
    username: string,
    password: string,
    repeatPassword: string,
    email: string,
    verifyTos: string
}

const RegisterPage = () => {
    const navigateFunc = useNavigate();
    const { mutate, status: registerStatus } = useMutation({
        mutationFn: async (userRegisterRequest: TUserRegisterRequest) => {
            const response = await fetch("http://localhost:5000/api/v1/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userRegisterRequest)
            })
            if (!response.ok) {
                throw new Error();
            }
            const result = await response.json();
            console.log("RegisterPage: ", result);
            return result;
        }
    })

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const userRegisterRequest: TUserRegisterRequest = {
            username: formData.get("username")!.toString(),
            password: formData.get("password")!.toString(),
            repeatPassword: formData.get("repeatPassword")!.toString(),
            email: formData.get("email")!.toString(),
            verifyTos: formData.get("verifyTos")!.toString()
        };

        mutate(userRegisterRequest, {
            onSuccess: (data) => {
                console.log('Mutation successful:', data);
                navigateFunc("/");
            },
            onError: (error) => {
                console.log('Mutation error:', error);
            }
        });
    }

    return (
        <div className="RegisterPage">

            {registerStatus === "error" ? (
                <div>There was an error processing the request</div>
            ) : null}

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input name="username" type="text" />
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type="password" />
                </div>
                <div>
                    <label>Repeat Password</label>
                    <input name="repeatPassword" type="password" />
                </div>
                <div>
                    <label>Email</label>
                    <input name="email" type="email" />
                </div>
                <div>
                    <label>Verify TOS</label>
                    <input id="verifyTos" name="verifyTos" type="checkbox" value="yes" />
                </div>
                <button type="submit">Register</button>
            </form>

        </div>
    )
}

export default RegisterPage;
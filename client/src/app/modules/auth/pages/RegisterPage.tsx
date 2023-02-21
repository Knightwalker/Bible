const RegisterPage = () => {

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const payload = JSON.stringify({
            username: formData.get("username"),
            password: formData.get("password"),
            repeatPassword: formData.get("repeat-password"),
            email: formData.get("email"),
            verifyAge: formData.get("verify-age"),
            verifyTos: formData.get("verify-tos")
        });

        fetch("http://localhost:5000/api/v1/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: payload
        });

    }

    return (
        <div className="RegisterPage">

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
                    <input name="repeat-password" type="password" />
                </div>
                <div>
                    <label>Email</label>
                    <input name="email" type="email" />
                </div>
                <div>
                    <label>Verify Age</label>
                    <input id="verify-age" name="verify-age" type="checkbox" value="yes" />
                </div>
                <div>
                    <label>Verify Tos</label>
                    <input id="verify-tos" name="verify-tos" type="checkbox" value="yes" />
                </div>
                <button type="submit">Register</button>
            </form>

        </div>
    )
}

export default RegisterPage;
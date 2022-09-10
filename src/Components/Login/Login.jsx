const Login = () => {
    return (
        <div>
            <h2>Login</h2>
            <form>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='text' placeholder='Email' required />
                </div>
                <div>
                    <label htmlFor='password'>Email</label>
                    <input type='password' placeholder='Password' required />
                </div>
                <div>
                    <button>Login</button>
                </div>
                <div>
                    <p>Don't have an account yet</p>
                </div>
            </form>
        </div>
    );
};

export default Login;

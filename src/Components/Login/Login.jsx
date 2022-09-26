import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { auth } from '../../services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useLoginErrors } from './useLoginErrors';

const Login = () => {
    const navigate = useNavigate();
    const { loginErrors, logErrors } = useLoginErrors();
    const initialValues = {
        email: '',
        password: ''
    };

    const onSubmit = () => {
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then(userCredential => {
                const user = userCredential.user;
                localStorage.setItem('logged', true);
                localStorage.setItem('useName', user)
                // Se redirige a las memories del usuario que se registra
                navigate('/');
            })
            .catch(error => {
                if (error.code === logErrors.WRONG_PASS)
                    loginErrors('Wrong password', 'error');
                if (error.code === logErrors.USER_NOT_FOUND)
                    loginErrors('User not found', 'warning');
                if (error.code === logErrors.TOO_MANY_REQUESTS)
                    loginErrors(
                        'Too many requests, access to this account has been temporarily disabled',
                        'warning'
                    );
            });
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Required field'),
        password: Yup.string().required('Required field')
    });

    const formik = useFormik({ initialValues, onSubmit, validationSchema });
    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = formik;

    return (
        <section className='login-section'>
            <div className='login-img-container'>
                <img src={require('../../img/logo.png')} alt='Logo' />
            </div>
            <div className='login-container'>
                <h2 className='login-title'>Welcome!</h2>
                <form onSubmit={handleSubmit}>
                    <div className='input-container'>
                        <label htmlFor='email'>Email</label>
                        <input
                            id='email'
                            type='text'
                            name='email'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder='Type your email'
                            required
                        />
                        {errors.email && touched.email ? (
                            <div className='input-error'>{errors.email}</div>
                        ) : null}
                    </div>
                    <div className='input-container'>
                        <label htmlFor='password'>Password</label>
                        <input
                            id='password'
                            type='password'
                            name='password'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            placeholder='Type your password'
                            required
                        />
                        {errors.password && touched.password ? (
                            <div className='input-error'>{errors.password}</div>
                        ) : null}
                    </div>
                    <div className='submit-container'>
                        <button className='submit-btn' type='submit'>
                            Login
                        </button>
                    </div>
                    <div className='register-link'>
                        <p>Not a member?</p>
                        <Link className='link' to='/register'>
                            register
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Login;

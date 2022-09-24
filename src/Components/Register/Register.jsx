import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { auth } from '../../services/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Swal from 'sweetalert2';

const Register = () => {
    const navigate = useNavigate();
    const initialValues = {
        email: '',
        password: ''
    };

    const onSubmit = () => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then(userCredential => {
                const user = userCredential.user;
                localStorage.setItem('logged', true);
                localStorage.setItem('userName', user)
                // Se redirige a las memories del usuario que se registra
                navigate('/');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    Swal.fire({
                        title: 'Error!',
                        text: `Ya existe una cuenta con el email ${values.email}`,
                        icon: 'warning',
                        confirmButtonText: 'OK'
                    });
                }
            });
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Required field'),
        password: Yup.string().required('Required field')
    });

    const formik = useFormik({ initialValues, onSubmit, validationSchema });
    const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
        formik;

    return (
        <section className='login-section'>
            <div className='login-img-container'>
                <img src={require('../../img/logo.png')} alt='Logo' />
            </div>
            <div className='login-container'>
                <h2 className='login-title'>Register</h2>
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
                            Register
                        </button>
                    </div>
                    <div className='login-link'>
                        <Link className='link' to='/login'>
                            Back to login
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Register;

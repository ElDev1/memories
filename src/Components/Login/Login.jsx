import './Login.css';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
    const initialValues = {
        email: '',
        password: ''
    };

    const onSubmit = values => console.log(values);

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
        <section className='login'>
            <h2 className='login-title'>Login</h2>
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
                        <div>{errors.email}</div>
                    ) : null}
                </div>
                <div className='input-container'>
                    <label htmlFor='password'>Email</label>
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
                        <div>{errors.password}</div>
                    ) : null}
                </div>
                <div className='submit-container'>
                    <button type='submit'>Login</button>
                </div>
                <div>
                    <p>Don't have an account yet</p>
                    <Link to='/register'>Register</Link>
                </div>
            </form>
        </section>
    );
};

export default Login;

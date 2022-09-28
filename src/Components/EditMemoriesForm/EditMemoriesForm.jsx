import { useFormik } from 'formik';
import * as Yup  from 'yup'
import { uploadFile } from '../../services/firebase'
import { useState, useRef } from 'react';
import { updateMemorie } from '../../services/firebase';
import { useNavigate } from 'react-router-dom';

export const EditMemoriesForm = () => {

    const [file, setFile] = useState(null)
    const tags = useRef('')

    const memorieId = localStorage.getItem('memorieId')
    const navigate = useNavigate()

    const onSubmit = async (e) => {
        const tagsText = tags.current.value
        const tagsList = tagsText.trim().toLowerCase().split(',')
        const userName = localStorage.getItem("userName")
        const email = localStorage.getItem('email')
        const createdBy = {
            userName,
            email
        }
        try {
            const result = await uploadFile(file)
            updateMemorie(memorieId,{title:values.title, text:values.text, tags:tagsList, image:result, createdBy})
            console.log(result)
        } catch (error) {
            console.error(error)
        }
    }

    const initialValues = {
        title: '',
        text: '',
    };

    const validationSchema = Yup.object({
        title: Yup.string()
            .required('this field is required'),
        text: Yup.string()
            .required('this field is required'),
    })

    const formik = useFormik({ initialValues, onSubmit, validationSchema });

    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = formik;

    return (
    <div className='bg-sky-100'>
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
            <div className="bg-sky-600 w-full p-6 m-auto rounded-md shadow-xl shadow-green-600/40 ring-2 ring-cyan-600 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-white uppercase">
                    Change your memorie
                </h1>                
                <form className="mt-6" onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label>
                        <span className="text-white">Title*</span>
                        <input
                            type="text"
                            name="title"
                            className="
                                w-full
                                block px-4 py-2 mt-2
                                border-gray-300
                                rounded-md
                                shadow-sm
                                focus:border-indigo-300
                                focus:ring
                                focus:ring-indigo-200
                                focus:ring-opacity-50
                            "
                            placeholder={`title`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                        />
                        {errors.title && touched.title ? (
                            <div className='text-red-300'>{errors.title}</div>
                        ) : null}
                        </label>
                    </div>
                    <div className="mb-2">
                        <label>
                        <span className="text-white">Message</span>
                        <textarea
                            name="text"
                            className="
                                block
                                w-full
                                mt-2 py-5
                                border-gray-300
                                rounded-md
                                shadow-sm
                                focus:border-indigo-300
                                focus:ring
                                focus:ring-indigo-200
                                focus:ring-opacity-50
                            "
                            rows="5"
                            placeholder={'Tell us about'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.text}
                        >
                        </textarea>
                        {errors.text && touched.text ? (
                            <div className='text-red-300'>{errors.text}</div>
                        ) : null}
                        </label>
                    </div>
                    <div className="mb-2">
                        <label>
                        <span className="text-white">Tags (separated by commas)</span>
                        <input
                            type="text"
                            name="name"
                            className="
                                w-full
                                block px-4 py-2 mt-2
                                border-gray-300
                                rounded-md
                                shadow-sm
                                focus:border-indigo-300
                                focus:ring
                                focus:ring-indigo-200
                                focus:ring-opacity-50
                            "
                            placeholder="College, Graduation, Education"
                            ref={tags} 
                        />
                        </label>
                    </div>
                    <div className='mb-4 mt-4'>
                        <label className="block">
                            <span className="sr-only">Choose Image</span>
                            <input 
                                type="file" 
                                name='file' 
                                id='file' 
                                onChange={e => {setFile(e.target.files[0])}} 
                                className="block w-full text-white text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                required
                            />
                        </label>
                    </div>
                    <div className="mb-6 flex">
                        <button
                            type="submit"
                            className="
                                h-10
                                px-5
                                text-indigo-100
                                bg-cyan-500
                                rounded-lg
                                transition-colors
                                duration-150
                                focus:shadow-outline
                                hover:bg-cyan-800
                                mr-1
                            "
                        >
                            Change
                        </button>
                        <button
                            onClick={() => navigate('/mymemories')}
                            className="
                                h-10
                                px-5
                                text-indigo-100
                                bg-red-700
                                rounded-lg
                                transition-colors
                                duration-150
                                focus:shadow-outline
                                hover:bg-red-800
                            "
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div> 
    </div>
  )
}

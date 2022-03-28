import React, { useEffect } from 'react';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './ValidateForm.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Pagination from './Pagination';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('FirstName is required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Lastname is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
    confirmPassword: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });
  
 function ValidateForm() {

    const [show, setShow] = useState(false);
    const [avatar, setAvatar] = useState()
    console.log(avatar)

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];

        file.preview = URL.createObjectURL(file);
        console.log(file.preview)

        setAvatar(file);
    }

    const handleSubmit = () => {
        <Route path="/pagination" component={Pagination} />
    }

     return (
        <div className='container-fluid'>
      
        {/* ------------------------------- */}
            <Formik
                initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                // same shape as initial values
                console.log(values);
                }}
            >
                {({ errors, touched }) => (

                <Form className = "formUp">
                    <div className='addImage'>
                        <h1>Signup</h1>
                        <div className='custom-file'>
                            <input
                                class="custom-file-input"
                                type="file"
                                onChange={handlePreviewAvatar}
                            />
                        </div>
                        
                        { avatar && (
                            <img src={avatar.preview} alt="" style={{width:"20%",marginTop: "32px", marginLeft:"40%"}}/>
                        )}
                    </div>
                    <div className='inputs-form'>
                        <label htmlFor='firstname'>Enter your firstName</label>
                        <Field name="firstName"/>
                        <div className='messErrors'>
                            <ErrorMessage name="firstName" />
                        </div>
                    </div>  

                    <div className='inputs-form'>
                        <label htmlFor='lastname'>Enter your LastName</label>
                        <Field name="lastName" />
                        <div className='messErrors'>
                            <ErrorMessage name="lastName" />
                        </div>
                    </div>

                    <div className='inputs-form'>
                        <label htmlFor='email'>Enter your Email</label>
                        <Field name="email" type="email" />
                        <div className='messErrors'>
                            <ErrorMessage name="email" />
                        </div>
                    </div>

                    <div className='inputs-form'>
                        <label htmlFor='password'>Enter your Password</label>
                        <Field name="password" type="password" />
                        <div className='messErrors'>
                            <ErrorMessage name="password" />
                        </div>
    
                    </div>

                    <div className='inputs-form'>
                        <label htmlFor='confirmPassword'>Enter your Confirm Password</label>
                        <Field name="confirmPassword" type="confirmPassword" />
                        <div className='messErrors'>
                            <ErrorMessage name="confirmPassword" />
                        </div>
                        
                    </div>
                    <div className='submit'>
                        <button type="submit" className='btn btn-dark'  onClick={handleSubmit}>Submit</button>
                    </div>
                    
                </Form>
                )}
            </Formik>
        </div>
     )
    
 }
export default ValidateForm;
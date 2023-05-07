/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';



const Register = () => {
    const { createUser,updateUserProfile } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const handleRegister = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                handleUpdateUser(data.name)
                toast.success('successfully register')

            })
            .catch(error => {
                console.log(error)
            })

    }
    const handleUpdateUser = (name, email) => {
        const profile = {
            displayName: name,
            email
        }
        updateUserProfile(profile)
            .then(() => {

            })
            .catch(error => {
                console.error(error)

            })

    }
    return (
        <div>
            <div className='flex justify-center items-center pt-8'>
                <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                    <div className='mb-8 text-center'>
                        <h1 className='my-3 text-4xl font-bold'>Signup</h1>
                        <p className='text-sm text-gray-400'>Create a new account</p>
                    </div>
                    <form
                        onSubmit={handleSubmit(handleRegister)}
                        noValidate=''
                        action=''
                        className='space-y-12 ng-untouched ng-pristine ng-valid'
                    >
                        <div className='space-y-4'>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Name
                                </label>
                                <input
                                    {...register("name")}
                                    type='text'
                                    name='name'
                                    id='name'
                                    required
                                    placeholder='Enter Your Name Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Email address
                                </label>
                                <input
                                    {...register("email")}
                                    required
                                    type='email'
                                    name='email'
                                    id='email'
                                    placeholder='Enter Your Email Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            <div>
                                <div className='flex justify-between mb-2'>
                                    <label htmlFor='password' className='text-sm'>
                                        Password
                                    </label>
                                </div>
                                <input
                                    {...register("password")}
                                    type='password'
                                    name='password'
                                    id='password'
                                    required
                                    placeholder='*******'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900'
                                />
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <div>
                                <PrimaryButton
                                    type='submit'
                                    classes='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
                                >
                                    Sign up
                                </PrimaryButton>
                            </div>
                        </div>
                    </form>
                    <div className='flex items-center pt-4 space-x-1'>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    </div>
                    <p className='px-6 text-sm text-center text-gray-400'>
                        Already have an account yet?{' '}
                        <Link to='/login' className='hover:underline text-gray-600'>
                            Sign In
                        </Link>
                        .
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Register;
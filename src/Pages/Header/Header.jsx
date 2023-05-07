/* eslint-disable no-unused-vars */

import { Link, useNavigate } from 'react-router-dom';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';


const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const navigate=useNavigate()
    const { user,logOut } = useContext(AuthContext)
    const handleSignOut=()=>{
        logOut()
        .then(result=>{
            toast.success('you have logged out')
            navigate('/login')
        })
        .catch(error=>console.log(error))

    }

    return (
        <div>
            <header className='text-gray-900 body-font shadow-sm'>
                <div className=' mx-auto flex flex-wrap py-5 px-20 flex-col md:flex-row items-center'>
                    <Link
                        to='/'
                        className='flex title-font font-medium items-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-500 mb-4 md:mb-0'
                    >
                        <span className='ml-3 text-4xl font-bold '><img className='h-14' src='data:image/jpeg;base64,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c25kBBbLa+k36kBpdqNJB/Cy9zWte0xljhZrgdQ5WUtw1xMEJdz3bf7QopLkeWpkjOIVpqIWWIh06AXDkTbnxUza0AADkBYDqA5IDDxr+mm+w63psVAsn4nizaOFowxjm3dZ+po1N1HjZWJW0+9jfHe2ppbq6ri11EMKypidPC2FmLd629rxNuASTZAS+jc8xtL2aHkcWDk1fVwBBB5EWPoWPh0MscTGTS7yQDvpLW1exfd7Q4Fp5EEH0HmgK8GE12H1E81HHHWUsxMj4iWao3Acr9KkuTMUp6mJ74o91IHWmh6I5OpauDJlTTvm+RV5ihlN904a9BI6CVu8r5fZQxObq1yvOuWW1t4/rt0IDdNUBweWqbiNbuYtcW8Oo3tZynoK1WE4NuJqibeat8/Xpt4PmQERppah2Y4TPHo/wL9Ive4vxVhrTy4CHYhHiOviyAwbu3MON73W4QBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAf//Z'></img></span>
                    </Link>
                    <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
                        {user?.uid ? <>
                            <div className='relative inline-block '>
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className='relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40  focus:ring-blue-300  focus:ring  focus:outline-none'
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='w-5 h-5'
                                        viewBox='0 0 20 20'
                                        fill='currentColor'
                                    >
                                        <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                                    </svg>
                                </button>

                                {isDropdownOpen && (
                                    <div className='absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl '>
                                        <Link
                                            to='/dashboard'
                                            className='flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 '
                                        >
                                            <svg
                                                className='w-5 h-5 mx-1'
                                                viewBox='0 0 24 24'
                                                fill='none'
                                                xmlns='http://www.w3.org/2000/svg'
                                            >
                                                <path
                                                    d='M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z'
                                                    fill='currentColor'
                                                ></path>
                                                <path
                                                    d='M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z'
                                                    fill='currentColor'
                                                ></path>
                                            </svg>

                                            <span className='mx-1'>Dashboard</span>
                                        </Link>

                                        <hr className='border-gray-200' />
                                        <div className='flex items-center cursor-pointer p-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 '>
                                            <svg
                                                className='w-5 h-5 mx-1'
                                                viewBox='0 0 24 24'
                                                fill='none'
                                                xmlns='http://www.w3.org/2000/svg'
                                            >
                                                <path
                                                    d='M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z'
                                                    fill='currentColor'
                                                ></path>
                                            </svg>

                                            <span onClick={handleSignOut} className='mx-1'>Sign Out</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </> :
                            <>
                                <Link to='/login' className='mr-5 hover:text-green-600'>
                                    Login
                                </Link>
                                <Link to='/register' className='mr-5'>
                                    <PrimaryButton classes='rounded-full px-2 py-1'>
                                        Signup
                                    </PrimaryButton>
                                </Link>
                            </>}

                    </nav>
                </div>
            </header>

        </div>
    );
};

export default Header;
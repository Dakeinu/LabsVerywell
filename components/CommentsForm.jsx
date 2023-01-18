import React, { useRef, useState, useEffect } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import { submitComment } from '../services';
import onChange from '../pages'



const CommentsForm = ({ slug }) => {
    const [error, setError] = useState(false);
    const [localStorage, setLocalStorage] = useState(null);
    const [showSuccesMessage, setShowSuccesMessage] = useState(false);
    const commentEl = useRef();
    const nameEl = useRef();
    const emailEl = useRef();
    const storeDataEl = useRef();

    useEffect(() => {
        nameEl.current.value = window.localStorage.getItem('name');
        emailEl.current.value = window.localStorage.getItem('email');

    }, [])

    const handleCommentSubmission = async () => {
        setError(false);
        const { value: comment } = commentEl.current;
        const { value: name } = nameEl.current;
        const { value: email } = emailEl.current;
        const { checked: storeData } = storeDataEl.current;


        if (!comment || !name || !email) {
            setError(true);
            return;

        }

        const commentObj = { name, email, comment, slug }

        if (storeData) {
            window.localStorage.setItem('name', name)
            window.localStorage.setItem('email', email)
        } else {
            window.localStorage.removeItem('name', name)
            window.localStorage.removeItem('email', email)
        }

        submitComment(commentObj)
            .then((res) => {
                setShowSuccesMessage(true);
                setTimeout(() => {
                    setShowSuccesMessage(false);
                }, 3000)
            })
        const recaptchaValue = recaptchaRef.current.getValue();
        this.props.onSubmit(recaptchaValue);
    }
    const recaptchaRef = React.createRef();

    return (
        <div className='container mx-auto px-40 mb-8'>
            <form>
                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6Lfnw9cjAAAAADcK9IeWgTf17-OeSRt7Ec-HNp8m"
                    onChange={onChange}
                />

                <div className='bg-[#191919] shadow-lg rounded-lg p-8 pb12 mb-8 text-white '>
                    <h3 className='text-xl mb-8 font-semibold border-b pb-4 '>Laissez un commentaire</h3>
                    <div className='grid grid-cols-1 gap-4 mb-4'>
                        <textarea
                            ref={commentEl}
                            className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-neutral-700 '
                            placeholder='Commentaire'
                            name='comment'
                        />
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols2 gap-4 mb-4 text-white'>
                        <input
                            type="text"
                            ref={nameEl}
                            className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-neutral-700 text-white'
                            placeholder='Nom'
                            name='name'
                        />
                        <input
                            type="text"
                            ref={emailEl}
                            className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-neutral-700 text-white'
                            placeholder='Email'
                            name='email'
                        />

                    </div>
                    <div className='grid grid-cols-1 gap-4 mb-4'>
                        <div>
                            <input type="checkbox" ref={storeDataEl} id='storeData' name='storeData' value='true' />
                            <label className='text-gray-500 cursor-pointer ml-2' htmlFor='storeData'>Sauvegarder mon e-mail pour mes prochain commentaires</label>

                        </div>
                    </div>
                    {/* <div>
                <ReCaptcha sitekey={process.env.REACT_APP_SITE_KEY} ref={captchaRef} />
            </div> */}
                    {error && <p className='text-xs text-red-500'>Tout les champs sont requis.</p>}
                    <div className='mt-8'>
                        <button
                            type='button'
                            onClick={handleCommentSubmission}
                            className='transition duration-500 ease hover:bg-indigo-900 inline-block bg-[#f9004d] text-lg rounded-2xl text-white px-8 py-3 cursor-pointer'
                        >
                            Poster le commentaire
                        </button>
                        {showSuccesMessage && <span className='text-xl float-right font-semibold mt-3 text-green-500'>Commentaire soumis pour examen</span>}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CommentsForm

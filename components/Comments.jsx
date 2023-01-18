import React, { useState, useEffect } from 'react'
import moment from 'moment'
import 'moment/locale/fr'

import parse from 'html-react-parser'
import { getComments } from '../services'
import { comment, Result } from 'postcss'


const Comments = ({ slug }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments(slug)
            .then((result) => setComments(result))
    }, [])

    return (
        <>
            {comments.length > 0 && (
                <div className='container mx-auto px-40 mb-8'>

                    <div className='bg-[#191919] shadow-lg rounded-lg p-8 pb-12 mb-8 text-white'>
                        <h3 className='text-xl mb-8 font-semibold border-b pb-4 text-white'>
                            {comments.length}
                            {' '}
                            {/* génrer le s automatiquement en 
                        fonctrion de si il y a un comentaire 
                        ou plusieurs Commentaires */}
                        </h3>
                        {comments.map((comment) => (
                            <div key={comment.createdAt} className='border-b border-gray-100 mb-4 pb-4 '>
                                <p className='mb-4'>
                                    <span className='font-semibold'>{comment.name}</span>
                                    {' '}
                                    le
                                    {' '}
                                    {moment(comment.createdAt).format('DD MMMM YYYY')}
                                </p>
                                <p className='whitespace-pre-line w-full '>{parse(comment.comment)}</p>
                            </div>
                        ))}
                    </div>
                </div>

            )}
        </>
    )
}

export default Comments

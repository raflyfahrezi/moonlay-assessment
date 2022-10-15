import React, { useEffect } from 'react'

import { XmarkIcon } from '@/assets'
import { Wrapper } from '@/components'

import { ModalProps } from './types'

const Modal = ({ title, isOpen, children, onClose }: ModalProps) => {
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    }, [isOpen])

    return (
        <>
            {isOpen && (
                <div className='fixed w-full min-h-screen py-10 bg-black bg-opacity-60 flex justify-center items-center z-50'>
                    <Wrapper>
                        <div className='w-full p-6 bg-gray-900 rounded flex flex-col'>
                            <div className='w-full flex justify-between items-center'>
                                <div>
                                    <p className='font-bold text-lg'>{title}</p>
                                </div>
                                <div>
                                    <button
                                        onClick={onClose}
                                        className='p-2 bg-gray-600 rounded active:scale-95'
                                    >
                                        <XmarkIcon />
                                    </button>
                                </div>
                            </div>
                            <div className='pt-10'>{children}</div>
                        </div>
                    </Wrapper>
                </div>
            )}
        </>
    )
}

export default Modal

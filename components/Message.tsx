import React from 'react'
// import PropTypes from 'prop-types'
// import Image from 'next/image'
import { formatDistanceStrict } from 'date-fns'
import { enUS } from 'date-fns/locale'
const formatDate = (date) => {
    return formatDistanceStrict(date, new Date(), { locale: enUS, addSuffix: true }) || ''
}

function Message({
    // userId = '',
    nickname = '',
    message = '',
    createdAt = null,
    isMe = false,
}: any) {
    if (!message) return null

    return (
        <div className="rounded-md hover:bg-gray-50 dark:hover:bg-coolDark-600 overflow-hidden flex items-start">
            {/* {photoURL ? (
                <Image
                    src={photoURL}
                    alt="Avatar"
                    className="rounded-full"
                    width={45}
                    height={45}
                />
            ) : null} */}
            <div className="ml-4">
                <div className="flex items-center mb-1">
                    <p className={`mr-2 text-xs font-bold ${isMe?'text-blue':''}`}>{nickname}</p>
                    {createdAt?.seconds ? (
                        <span className="text-gray-500 text-xs font-semibold">
                            {formatDate(new Date(createdAt.seconds * 1000))}
                        </span>
                    ) : null}
                </div>
                <p className="text-sm font-medium">
                    {message}
                </p>
            </div>
        </div>
    )
}

export default Message
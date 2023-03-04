import React from 'react';
const ImageCard = ({ id, src, creator, creatorImg, tag, likes, sponsor }) => {
    return (
        <div key={id} className='flex flex-col relative w-full h-fit bg-white rounded-lg shadow-lg hover:shadow-xl dark:bg-black cursor-pointer'>
            {/* <Modal /> */}
            <img className='w-full h-96 object-cover rounded-t-lg' src={src} alt="" />
            {sponsor && <div className='absolute p-1 top-1 left-1 bg-indigo-500 text-white rounded-md'>Sponsered</div>}
            <div className='flex p-4 gap-x-4 items-center justify-between'>
                <div className='flex items-center'>
                    <div><img src={creatorImg} alt="" className='rounded-full w-2/3' /></div>
                    <div className='flex flex-col justify-center items-start'>
                        <h4 className='text-md font-semibold text-darkBg dark:text-lightBg'>{creator}</h4>
                        <p className='text-sm font-regular text-darkBg dark:text-lightBg'>{`@${tag}`}</p>
                    </div>
                </div>
                <div className='text-xl font-semibold text-darkBg dark:text-lightBg'>
                    <div className='flex gap-x-3 items-center'>
                        <i className="fa-solid fa-heart text-red-400"></i>
                        {likes}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageCard
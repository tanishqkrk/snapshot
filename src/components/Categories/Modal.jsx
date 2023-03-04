import React from 'react'
import { useEffect, useState } from 'react'

const Modal = ({ id }) => {
    const [data, setData] = useState();
    const [popup, setPopup] = useState(true)
    useEffect(() => {
        setPopup(true)
        try {
            fetch(`https://api.unsplash.com/photos/${id}?client_id=Xkhv6_V5vL4TSH-ZPclJ_S7SqnJxWL1LELDQusZLvVs`)
                .then((response) => response.json())
                .then((response) => setData(response))
        }
        catch (err) {
            console.log(err);
        }
    }, [id])



    if (data && popup) {
        return (
            <div className='w-screen h-screen z-50 left-0 fixed flex justify-center items-center top-0 bg-black bg-opacity-60 backdrop-blur-sm '>
                <div className="p-5 flex flex-col gap-y-9 items-center  bg-lightBg w-3/4 h-[90%] overflow-y-scroll rounded-lg dark:bg-darkBg max-sm:w-full max-sm:h-full max-sm:rounded-none" >
                    <div className='flex items-center gap-x-5 justify-between w-full'>
                        <div className='flex items-center gap-x-5 '>
                            <img className='rounded-full ' src={data?.user?.profile_image ? data?.user?.profile_image?.medium : ""} />
                            <div>
                                <h4 className='text-darkBg dark:text-lightBg'>{data?.user?.name}</h4>
                                {data?.user?.for_hire && <div className='text-green-600'>Available for hire</div>}
                            </div>
                        </div>
                        <div className='flex gap-x-3 items-center'>
                            <button className='bg-green-600 text-white rounded-lg p-2 shadow-md hover:bg-green-700'>Download</button>
                            <div onClick={() => setPopup(false)} className='bg-red-400 text-darkBg text:bg-lightBg rounded-sm cursor-pointer flex items-center justify-center w-8 h-8 text-xl'><i class="fa-solid fa-xmark"></i></div>
                        </div>
                    </div>
                    <div className="my-6 flex justify-center">
                        <img src={data?.urls?.regular} alt="" className="w-1/2 " />
                    </div>
                    <div className='flex justify-center items-center gap-x-12'>
                        <div className='flex flex-col text-center'>
                            <span className='font-bold text-darkBg dark:text-lightBg'>Views</span>
                            <span className='text-darkBg dark:text-lightBg'>{data?.views}</span>
                        </div>
                        <div className='flex flex-col text-center'>
                            <span className='font-bold text-darkBg dark:text-lightBg'>Downloads</span>
                            <span className='text-darkBg dark:text-lightBg'>{data?.downloads}</span>
                        </div>
                        <div className='flex flex-col text-center'>
                            <span className='font-bold text-darkBg dark:text-lightBg'>Likes</span>
                            <span className='text-darkBg dark:text-lightBg'>{data?.likes}</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-4 w-full'>
                        {data?.location.name && <div className='text-darkBg dark:text-lightBg flex gap-x-5 items-center'><i class="fa-solid fa-location-dot"></i>{data?.location?.name}</div>}
                        {data?.exif?.name && <div className='text-darkBg dark:text-lightBg flex gap-x-5 items-center'><i class="fa-solid fa-camera"></i>{data?.exif?.name}, {data?.exif?.exposure_time}</div>}
                    </div>
                    <div className="flex flex-wrap">
                        {/* <h6 className='text-darkBg dark:text-lightBg'>Tags</h6> */}
                        {data?.tags?.map((tag) => <div className='bg-darkBg dark:bg-lightBg m-2 p-2 opacity-60 rounded-md hover:opacity-100 text-lightBg dark:text-darkBg'>{tag.title}</div>)}
                    </div>
                    {/* <div className="flex flex-col justify-center items-center gap-y-5"> */}
                    {/* <h6 className='text-2xl text-darkBg dark:text-lightBg'>Related photos</h6> */}
                    {/* <div className='flex justify-center items-center gap-x-6'> */}
                    {/* {data.related_collections.results.map((item) => <img className='w-1/4 h-64 object-cover' src={item.cover_photo.urls.regular} />)} */}
                    {/* </div> */}
                    {/* </div> */}
                </div>
            </div>
        )
    }
}

export default Modal
import React from 'react'
import { useEffect, useState } from 'react'
// import data from "../sampledata.json"
import ImageCard from './ImageCard'
import Modal from './Categories/Modal'

const Images = () => {
    const [data, setData] = useState([]);
    const [scrollBottom, setScrollBottom] = useState(0);
    const [imageId, setImageId] = useState("");

    // console.log(scrollBottom);
    useEffect(() => {
        window.addEventListener(("scroll"), (e) => {
            window.innerHeight >= document.body.getBoundingClientRect().bottom && setScrollBottom(scrollBottom + 2)
        });
        try {
            fetch(`https://api.unsplash.com/photos?page=${scrollBottom}&per_page=50&client_id=Xkhv6_V5vL4TSH-ZPclJ_S7SqnJxWL1LELDQusZLvVs`)
                .then((response) => response.json())
                .then((response) => setData((prevData) => [...prevData, ...Object.entries(response)]))
        }
        catch (err) {
            console.log(err);
        }
    }, [scrollBottom])

    return (
        <div className="p-5 flex justify-center items-center-w-full  bg-lightBg dark:bg-darkBg">
            {imageId !== "" && <Modal id={imageId}></Modal>}
            <div className=' grid grid-cols-3 gap-12  w-full justify-center max-lg:grid-cols-2 max-md:grid-cols-1'>
                {
                    data && data.map((item) => {
                        return (
                            <div onClick={() => setImageId(item[1].id)}><ImageCard sponsor={item[1].sponsorship ? true : false} src={item[1].urls.small} creator={item[1].user.name} creatorImg={item[1].user.profile_image.medium ? item[1].user.profile_image.medium : ""} tag={item[1].user.username ? item[1].user.username : ""} likes={item[1].likes} /></div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Images
import React from 'react'
import { useEffect, useState } from 'react'
// import data from "../sampledata.json"
import ImageCard from '../ImageCard'
import Modal from '../Categories/Modal'
const ExperimentalCategory = () => {
    const [data, setData] = useState([]);
    const [scrollBottom, setScrollBottom] = useState(0);
    const [imageId, setImageId] = useState("");

    // console.log(scrollBottom);
    useEffect(() => {
        window.addEventListener(("scroll"), (e) => {
            window.innerHeight >= document.body.getBoundingClientRect().bottom && setScrollBottom(scrollBottom + 2)
        });
        try {
            fetch(`https://api.unsplash.com/search/photos/?query=experimental&page=${scrollBottom}&per_page=50&client_id=Xkhv6_V5vL4TSH-ZPclJ_S7SqnJxWL1LELDQusZLvVs`)
                .then((response) => response.json())
                .then((response) => setData((prevData) => [...prevData, ...response.results]))
        }
        catch (err) {
            console.log(err);
        }
    }, [scrollBottom])

    return (
        <div className="p-5 flex justify-center items-center-w-full  bg-lightBg dark:bg-darkBg">
            <div className=' grid grid-cols-3 gap-12  w-full justify-center max-lg:grid-cols-2 max-md:grid-cols-1'>
                {imageId !== "" && <Modal id={imageId}></Modal>}

                {
                    data && data.map((item) => {
                        return (
                            <div onClick={() => setImageId(item.id)}><ImageCard src={item.urls.small} creator={item.user.name} creatorImg={item.user.profile_image.medium ? item.user.profile_image.medium : ""} tag={item.user.username ? item.user.username : ""} likes={item.likes} /></div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default ExperimentalCategory
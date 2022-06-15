import React from 'react'
import useFetch from '../../hooks/useFetch'
import "./featured.css"

function Featured() {
    const {data, loading, error} = useFetch("/hotels/countByCity/?cities=Dublin,Rome,Barcelona,Paris,London,Mumbai,Amsterdam");

    return (
        <div className='featured'>
            {loading? "Loading please wait" : (<><div className="featuredItem">
                <img src="https://static.trip101.com/paragraph_media/pictures/000/123/528/large/5574663324_d100c0c0e4_b.jpg?1490292074" alt="" className='featuredImg' />
                <div className="featuredTitle">
                    <h1>Dublin </h1>
                    <h2>{data[0]} Proporties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://c4.wallpaperflare.com/wallpaper/336/17/303/rome-italy-cathedral-architecture-city-night-sky-wallpaper-preview.jpg" alt="" className='featuredImg' />
                <div className="featuredTitle">
                    <h1>Rome</h1>
                    <h2>{data[1]} Proporties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://st3.depositphotos.com/49326816/46366/i/450/depositphotos_463660600-stock-photo-night-view-city-barcelona-spain.jpg" alt="" className='featuredImg' />
                <div className="featuredTitle">
                    <h1>Barcelona</h1>
                    <h2>{data[2]} Proporties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://4kwallpapers.com/images/walls/thumbs_2t/4466.jpg" alt="" className='featuredImg' />
                <div className="featuredTitle">
                    <h1>Paris</h1>
                    <h2>{data[3]} Proporties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://media.istockphoto.com/photos/aerial-view-of-london-and-the-tower-bridge-picture-id1265900812?k=20&m=1265900812&s=612x612&w=0&h=gDUeVw65Hd8w1Yk0pE9Fbj27vfO20CgSNI03mvx2UDM=" alt="" className='featuredImg' />
                <div className="featuredTitle">
                    <h1>London</h1>
                    <h2>{data[4]} Proporties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://media.istockphoto.com/photos/moonrise-over-south-central-mumbai-the-financial-capital-of-india-a-picture-id1215791152?k=20&m=1215791152&s=612x612&w=0&h=ryID_FdWyqHPkijuBxoNXsmaODtJkEn-KwK1l5l2bdo=" alt="" className='featuredImg' />
                <div className="featuredTitle">
                    <h1>Mumbai</h1>
                    <h2>{data[5]} Proporties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://media.istockphoto.com/photos/amsterdam-panorama-picture-id627092968?k=20&m=627092968&s=612x612&w=0&h=3Z7odaehGGf9tBInC3tkE1-Jfz2DbXG4ZMfmeW0BlQo=" alt="" className='featuredImg' />
                <div className="featuredTitle">
                    <h1>Amsterdam</h1>
                    <h2>{data[6]} Proporties</h2>
                </div>
            </div></>)}
        </div>
    )
}

export default Featured
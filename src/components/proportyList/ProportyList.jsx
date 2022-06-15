import React from 'react'
import useFetch from '../../hooks/useFetch'
import "./proportyList.css"

function ProportyList() {
    const {data, loading, error} = useFetch("/hotels/countByType/?cities=Dublin");
    const images=[
        "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg" ,
        "https://i.pinimg.com/474x/29/79/4c/29794c9ac6ad00396966f77b7cd7e212.jpg",
        "https://assets.traveltriangle.com/blog/wp-content/uploads/2015/12/Lakesong-resort.jpg",
        "https://cimages.elitehavens.com/images/gallery/hires/P00021/14.%20Villa%20Roxo%20-%20Stunning%20night%20ambience.jpg",
        "https://cf.bstatic.com/xdata/images/hotel/max500/290427813.jpg?k=30a176b3f86eef83696cc44c34ff5f1f7fd9a9ad6a41b7330f7fecc5ced22c25&o=&hp=1",
        "https://i.pinimg.com/736x/10/e2/53/10e25326b46731999b9fc995d8d69b7a.jpg",
        "https://www.collegeconsensus.com/wp-content/uploads/2018/05/Simmons-Hall-MIT.jpg"
    ];
  return (
    <div className='pList'>
        {loading? ("loading"): (<>
        {data && images.map((img,i)=>(
            <div className="pListItem" key={i}>
                <img src={img} alt="" className='pListImg'/>
                <div className="pListTitles">
                    <h1>{data[i]?.type}</h1>
                    <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
            </div>
        ))}
        </>)}
    </div>
  )
}

export default ProportyList
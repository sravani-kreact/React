const RestuarantCards=({resData})=>{
    const{name, avgRating, cloudinaryImageId,sla}=resData?.info
    console.log('Rendering Card')
      return(
          <div className="card">
              <img 
                className="img" 
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} 
                alt={name} />
              <h3>{name}</h3>
              <h4>{avgRating} stars</h4>
              <h4 >{sla.slaString}
              </h4>
           </div>
      )
      }

    export default RestuarantCards
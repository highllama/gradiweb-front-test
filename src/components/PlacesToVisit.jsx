import React from 'react'
//assets
import '../assets/style/components/PlacesToVisit.scss'

const PlacesToVisit = () => {

  return(
    <div className='PlacesToVisit'>
      <h2>Place to  <strong>Visit</strong></h2>
        <div className='PlacesToVisit__main'>
          <div className='PlacesToVisit__pricipalDestiny'>
          <h3>
          <i className="fas fa-map-marker-alt"></i>
          Arab street
          </h3>
          </div>
          <div>
            <div className='PlacesToVisit__secondaryDestiny'>
            <h3>
            <i className="fas fa-map-marker-alt"></i>
            Art Museum
          </h3>
            </div>
            <div className='PlacesToVisit__thirdDestiny'>
              <h3>
              <i className="fas fa-map-marker-alt"></i>
                Amsterdam
              </h3>
            </div>
          </div>
        </div>

    </div>
  )
}

export default PlacesToVisit
import PortfolioData from '../../data/portfolio.json'
import React from 'react'

const RenderPort = () => {
  return (
          <div className="images-container">
            {
              PortfolioData.portfolio.map((port, idx) => {
                return (
                <div key={idx} className='image-box'>
                   <img src={port.cover} alt="Portfolio" className='portfolio-img'/>
                    <div className="content">
                      <p className="title">{port.title}</p>
                      <h4 className='description'>{port.description}</h4>
                      <button className="btn" onClick={() => window.open(port.url)}>View</button>
                    </div>
                </div>
                )
                
              })
            }
          </div>
   )
}
export default RenderPort
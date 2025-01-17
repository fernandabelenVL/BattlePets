import React from 'react'
import hitSmall from './../../assets/img/Hit small.png'
import missSmall from './../../assets/img/Miss small.png'

export default (props) => {
  const { hitPoints, hits } = props;
  let hitPointsCounter = [];
  let hitCounter = [];
  for (let i = 0; i < hitPoints; i++) {
    hitPointsCounter.push(
      (<span key={i}><img src={missSmall} className='hitPointMark' alt="miss small"/></span>)
    )
  }
  for (let j = 0; j < hits; j++) {
    hitCounter.push(
      (<span key={j}><img src={hitSmall} className='hitPointMark' alt="hit small"/></span>)
    )
  }
  return (
    <span>
      {hitPointsCounter}{hitCounter}
    </span>
  )
}

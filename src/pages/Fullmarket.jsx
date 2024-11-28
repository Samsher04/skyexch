import React from 'react'
import Menu_select from '../components/Menu_select'
import Bet_slip from '../components/Bet_slip'
import FullMarketEvent from '../components/FullMarketEvent'

const Fullmarket = () => {
  return (
    <div>
      <div className="Fullmarket-wrap">
        <Menu_select />
         <FullMarketEvent />
        <Bet_slip />
      </div>
    </div>
  )
}

export default Fullmarket

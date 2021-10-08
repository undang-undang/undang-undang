import React from 'react'

import {
  Countdown,
  Wishes,
  GMaps,
  Music,
  CoupleInfo,
  EventInfo
} from '../components'
import './style.css'

const Groom = {
  nickName: 'Dylan',
  fullName: 'Dylan Alayan',
  fatherName: 'Nanang',
  motherName: 'Yani',
  address: 'Jl. Sudirman No. 50, Sleman, Yogyakarta',
  fatherDeceasedStatus: false,
  motherDeceasedStatus: false,
  photo: 'https://franklin.fit/wp-content/uploads/2020/08/jurica-koletic-317414-unsplash.jpg',
}

const Bride = {
  nickName: 'Milea',
  fullName: 'Milea Ningsih',
  fatherName: 'Budi',
  motherName: 'Asih',
  address: 'Jl. Jeruk Blok 1D No.12, Condongcatur, Yogyakarta',
  fatherDeceasedStatus: false,
  motherDeceasedStatus: false,
  photo: 'https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg',
}

const Bunga: React.FC = () => {
  // const invitationCover = () => {
  //   return <div className='cover fc-center'>
  //     <div className='cover-content'>
  //       <div className='receiver'>
  //         <h3>Kepada Yth:</h3>
  //         <h2>Le Minerale</h2>
  //       </div>
  //       <button>Buka Undangan</button>
  //     </div>
  //   </div>
  // }

  return (
    <section className='template-bunga'>
      <div className='opening fc-center'>
        <h2>The Wedding Of</h2>
        <h1>Dylan</h1>
        <h1>&</h1>
        <h1>Milea</h1>

        <Countdown />
      </div>

      <CoupleInfo
        groomInfo={ Groom }
        brideInfo={ Bride }
      />

      <EventInfo />

      <Wishes />

      <GMaps />



      {/* { invitationCover() } */ }
      <Music />
    </section>
  )
}

export default Bunga
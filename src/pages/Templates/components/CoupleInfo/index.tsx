import React from 'react';

import Container from './style';

type Profile = {
  nickName: string
  fullName: string
  address: string
  fatherName: string
  motherName: string
  fatherDeceasedStatus: boolean
  motherDeceasedStatus: boolean
  photo?: string
}

interface InfoProps {
  brideInfo: Profile
  groomInfo: Profile
}

const CoupleInfo: React.FC<InfoProps> = ({
  brideInfo,
  groomInfo
}) => {
  const couple = (profile: Profile) => {
    return (
      <div>
        <h2>{ profile.nickName }</h2>
        <div className='couple-photo' >
          <img src={ profile.photo } alt='' />
        </div>
        <div>
          <p>{ profile.fullName }</p>
          <p>Putra dari Pasangan</p>
          <p>{ profile.fatherName } dan { profile.motherName }</p>
          <p>{ profile.address }</p>
        </div>
      </div>
    )
  }

  return (
    <Container>
      <div className='flex-col'>
        <div>
          <h3>Groom and Bride</h3>
          <i>Assalamu’alaikum Warahmatullahi Wabarakatuh</i>
          <i>Maha suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan.
            Ya Allah, perkenankanlah kami merangkai kasih sayang yang Kau ciptakan di antara putra-putri kami:
          </i>
        </div>
        <div className='flex container'>
          { couple(groomInfo) }
          { couple(brideInfo) }
        </div>
      </div>
    </Container>
  )
}

export default CoupleInfo
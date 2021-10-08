import React, { useState } from 'react'

import {Container} from './style'

type IWishes = {
  name: string
  message: string
}

const Wishes: React.FC = () => {
  const [wishes, setWishes] = useState<IWishes[]>( [] )
  const [data, setData] = useState<IWishes>( {
    name: '',
    message: ''
  } )

  const handleOnSubmit = async( e: any ) => {
    e.preventDefault()
    await setWishes([data, ...wishes])
    await setData({name: '', message: ''})
  }

  const onChangeInput = (e:any) => {
    setData({
      ...data,
      [e.target.name]: [e.target.value]
    })
  }

  return (
    <Container>
      {/* <div className='notif'>
        <p>{data.name} baru saja memberikan ucapan</p>
      </div> */}
      <div className='wishes-list' id='wishes-list'>
        {
          wishes.map( ( wish, i ) => (
            <div key={i}>
              <p>{wish.name} megucapkan:</p>
              <p>{wish.message}</p>
            </div>
          ) )
        }
      </div>

      <div className='wishes-form'>
        <form onSubmit={handleOnSubmit}>
          <input type='text' name='name' value={data.name} placeholder='Nama' onChange={onChangeInput}/>
          <textarea name='message' value={data.message} placeholder='Pesan' onChange={onChangeInput}/>
          <button type='submit'>Kirim</button>
        </form>
      </div>

    </Container>
  )
}

export default Wishes
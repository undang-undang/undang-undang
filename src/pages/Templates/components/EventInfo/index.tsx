import React from 'react';

import Container from './style';

const eventList = [
  {
    title: 'Akad Nikah',
    date: '01/11/2021',
    startTime: '08:00',
    endTime: '09:30',
    address: 'Jl. Prof. DR. Drs Notonagoro, Karang Malang, Caturtunggal, Kec. Depok, Kabupaten Sleman, Yogyakarta',
    location: 'Masjid Agung',
  },
  {
    title: 'Resepsi',
    date: '01/11/2021',
    startTime: '13:00',
    endTime: '15:00',
    address: 'Jl. Prof. DR. Drs Notonagoro, Karang Malang, Caturtunggal, Kec. Depok, Kabupaten Sleman, Yogyakarta',
    location: 'Gedung Serbaguna'
  },
]

const EventInfo: React.FC = () => {

  return (
    <Container>
      {
        eventList.map((event, i) => (
          <div key={ i }>
            <p>{ event.title }</p>
            <p>{ event.address }</p>
          </div>
        ))
      }
    </Container>
  )
}

export default EventInfo;
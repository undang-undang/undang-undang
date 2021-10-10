import React from 'react'

import Container from './style'

const Story = [
  {
    date: '16-10-2013',
    title: 'Pertama Kali Berjumpa',
    story: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sit similique autem consectetur dicta odit dolor neque sunt quia debitis, explicabo deserunt! Ipsum quas velit eveniet debitis id, quos modi?',
    photo: 'https://source.unsplash.com/random/?wedding/1'
  },
  {
    date: '16-10-2013',
    title: 'Pertama Kali Berjumpa',
    story: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sit similique autem consectetur dicta odit dolor neque sunt quia debitis, explicabo deserunt! Ipsum quas velit eveniet debitis id, quos modi?',
    photo: 'https://source.unsplash.com/random/?wedding/2'
  },
  {
    date: '16-10-2013',
    title: 'Pertama Kali Berjumpa',
    story: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sit similique autem consectetur dicta odit dolor neque sunt quia debitis, explicabo deserunt! Ipsum quas velit eveniet debitis id, quos modi?',
    photo: 'https://source.unsplash.com/random/?wedding/3'
  },
  {
    date: '16-10-2013',
    title: 'Pertama Kali Berjumpa',
    story: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sit similique autem consectetur dicta odit dolor neque sunt quia debitis, explicabo deserunt! Ipsum quas velit eveniet debitis id, quos modi?',
    photo: 'https://source.unsplash.com/random/?wedding/4'
  },
  {
    date: '16-10-2013',
    title: 'Pertama Kali Berjumpa',
    story: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sit similique autem consectetur dicta odit dolor neque sunt quia debitis, explicabo deserunt! Ipsum quas velit eveniet debitis id, quos modi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sit similique autem consectetur dicta odit dolor neque sunt quia debitis, explicabo deserunt! Ipsum quas velit eveniet debitis id, quos modi?',
    photo: 'https://source.unsplash.com/random/?wedding/5'
  },
  {
    date: '16-10-2013',
    title: 'Pertama Kali Berjumpa',
    story: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sit similique autem consectetur dicta odit dolor neque sunt quia debitis, explicabo deserunt! Ipsum quas velit eveniet debitis id, quos modi?',
    photo: 'https://source.unsplash.com/random/?wedding/6'
  },
]

const LoveStory: React.FC = () => {
  return (
    <div>
      <h2>Our Love Story</h2>

      <div className='flex-col'>
        {
          Story.map((story, index) => (
            <Container key={ index } isEven={ index % 2 === 0 } isLast={ index === Story.length - 1 }>
              <div className='story-container'>
                <p>{ story.date }</p>
                <p>{ story.title }</p>
                <p>{ story.story }</p>
              </div>
              <div className='icon-container'>
                <img src={ story.photo } alt='' />
              </div>
            </Container>
          ))
        }
      </div>
    </div>
  )
}

export default LoveStory;
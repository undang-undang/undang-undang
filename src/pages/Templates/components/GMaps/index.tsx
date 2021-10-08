import React from 'react'

interface GMapsProps {
  link?: string
  width?: string
  height?: string
}

const GMaps: React.FC<GMapsProps> = ({
  link = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15864.13137835672!2d106.7815501!3d-6.259404!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x720b6810371ae164!2sRebelWorks!5e0!3m2!1sen!2sid!4v1605664171142!5m2!1sen!2sid',
  width = '100%',
  height = '100%',
}) => {
  return (
    <div className='gmaps'>
      <iframe title='location' src={ link } width={ width } height={ height } frameBorder='0' />
    </div>
  )
}

export default GMaps
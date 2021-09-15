import React from 'react';

interface Props {
  fill?: string
  size?: number
}

const Whatsapp:React.FC<Props> = ({
  fill = '#000',
  size = 50
}) => {

  return (
    <svg 
    height={`${size}px`} 
    viewBox="-1 0 511 512" 
    width={`${size}px`} 
    xmlns="http://www.w3.org/2000/svg">
      <path fill={fill} d="m435.1875 74.28125c-47.902344-47.898438-111.59375-74.28125-179.335938-74.28125-53.28125 0-104.277343 16.34375-147.472656 47.269531-4.492187 3.214844-5.527344 9.460938-2.3125 13.953125 3.21875 4.492188 9.464844 5.523438 13.953125 2.308594 39.78125-28.476562 86.75-43.53125 135.832031-43.53125 128.816407 0 233.617188 104.800781 233.617188 233.621094 0 128.816406-104.800781 233.617187-233.617188 233.617187-39.242187 0-78.050781-9.917969-112.230468-28.683593-2.269532-1.242188-4.929688-1.558594-7.421875-.886719l-111.320313 30.085937 30.351563-108.320312c.734375-2.617188.371093-5.417969-1.003907-7.757813-20.933593-35.671875-31.996093-76.492187-31.996093-118.054687 0-49.085938 15.054687-96.054688 43.53125-135.832032 3.214843-4.488281 2.179687-10.734374-2.308594-13.949218-4.492187-3.214844-10.738281-2.183594-13.953125 2.308594-30.925781 43.191406-47.269531 94.1875-47.269531 147.472656 0 43.683594 11.261719 86.617187 32.609375 124.460937l-33.96875 121.21875c-.972656 3.464844-.003906 7.183594 2.523437 9.738281 1.90625 1.917969 4.472657 2.960938 7.105469 2.960938.871094 0 1.746094-.113281 2.609375-.347656l124.464844-33.636719c36.238281 19.128906 77.042969 29.222656 118.273437 29.222656 67.746094 0 131.4375-26.378906 179.335938-74.285156 47.902344-47.898437 74.285156-111.589844 74.285156-179.335937 0-67.742188-26.378906-131.429688-74.28125-179.335938zm0 0" />
      <path fill={fill} d="m419.769531 374.839844c4.59375 3.066406 10.804688 1.828125 13.871094-2.765625 23.4375-35.117188 35.828125-76.078125 35.828125-118.457031 0-57.0625-22.21875-110.710938-62.5625-151.054688s-93.988281-62.5625-151.054688-62.5625c-57.066406 0-110.714843 22.21875-151.058593 62.5625s-62.5625 93.992188-62.5625 151.058594c0 38.007812 10.113281 75.328125 29.246093 107.929687l6.453126 11-19.550782 69.773438c-.972656 3.460937-.007812 7.179687 2.523438 9.734375 2.53125 2.554687 6.242187 3.554687 9.714844 2.617187l72.03125-19.46875 10.59375 5.816407c31.242187 17.152343 66.722656 26.214843 102.605468 26.214843 42.382813 0 83.34375-12.390625 118.457032-35.832031 4.59375-3.0625 5.832031-9.273438 2.765624-13.867188-3.066406-4.59375-9.273437-5.832031-13.867187-2.765624-31.816406 21.238281-68.9375 32.464843-107.355469 32.464843-32.527344 0-64.679687-8.210937-92.980468-23.746093l-14.125-7.757813c-2.265626-1.242187-4.925782-1.558594-7.421876-.886719l-58.9375 15.929688 15.953126-56.925782c.730468-2.617187.371093-5.417968-1.003907-7.757812l-8.609375-14.667969c-17.332031-29.535156-26.492187-63.355469-26.492187-97.808593 0-106.761719 86.859375-193.617188 193.621093-193.617188 106.761719 0 193.617188 86.855469 193.617188 193.621094 0 38.410156-11.226562 75.53125-32.464844 107.351562-3.066406 4.59375-1.828125 10.800782 2.765625 13.867188zm0 0" />
      <path fill={fill} d="m219.304688 222.902344.660156-.769532c8.957031-10.054687 6.695312-21.863281 3.21875-29.996093-5.136719-12.011719-18.574219-42.714844-19.847656-45.621094-1.984376-5.015625-8.605469-12.960937-21.921876-13.238281-10.382812-.210938-13.796874.082031-14.59375.179687-.082031.007813-.164062.019531-.242187.03125-1.53125.222657-37.546875 6.050781-43.765625 60.03125-2.859375 24.816407 8.632812 54.378907 34.15625 87.875 28.257812 37.082031 54.234375 59.164063 92.648438 78.75 19.128906 9.753907 47.070312 21.171875 73.082031 21.171875.84375 0 1.6875-.011718 2.523437-.039062 29.214844-.851563 44.816406-12.992188 52.757813-23.027344 8.429687-10.652344 10.191406-21.148438 10.445312-22.96875.167969-1.15625.574219-4.804688.832031-14.308594.359376-13.316406-7.265624-20.308594-12.179687-22.53125-2.777344-1.378906-31.410156-15.574218-43.148437-21.265625-7.925782-3.847656-19.578126-6.042969-30.066407 5.335938-.054687.058593-.105469.117187-.15625.167969-1.417969 1.238281-2.820312 3.085937-7.082031 8.789062-2.625 3.511719-7.863281 10.519531-10.089844 12.859375-4.703125.332031-20.429687-6.59375-42.722656-23.855469-14.050781-10.882812-29.054688-27.824218-37.355469-42.175781-.082031-.203125-.132812-.574219-.109375-.761719 3.441406-3.539062 9.042969-10.042968 12.957032-14.632812zm12.261718 73.382812c6.664063 5.160156 19.730469 14.773438 32.363282 21.183594 5.972656 3.027344 24.148437 12.25 35.355468 2.332031 3.09375-2.738281 7.488282-8.507812 13.355469-16.359375 1.691406-2.261718 3.769531-5.039062 4.574219-6 .523437-.476562.957031-.945312 1.351562-1.375 1.800782-1.953125 2.621094-2.84375 6.632813-.898437 12.046875 5.84375 42.101562 20.75 43.179687 21.28125.371094.371093.949219 1.578125.882813 3.980469-.222657 8.289062-.546875 11.285156-.613281 11.847656-.042969.207031-.023438.082031-.046876.308594-.117187.679687-1.375 7.382812-6.886718 13.964843-7.773438 9.289063-20.246094 14.246094-37.074219 14.734375-22.5.667969-48.269531-9.945312-65.941406-18.957031-35.953125-18.335937-59.214844-38.136719-85.828125-73.058594-21.96875-28.828125-32.410156-54.234375-30.195313-73.464843 4.171875-36.207032 24.015625-41.894532 26.675781-42.496094.9375-.058594 4.109376-.191406 11.648438-.035156 2.402344.050781 3.578125.6875 3.933594 1.074218.496094 1.132813 14.59375 33.335938 19.855468 45.648438 2.628907 6.152344 1.015626 7.964844.238282 8.835937-.140625.15625-.261719.296875-.367188.414063l-.574218.675781c-5.777344 6.769531-9.84375 11.375-12.085938 13.675781-7.382812 7.585938-6.683594 18.085938-2.902344 24.632813 9.617188 16.664062 26.289063 35.523437 42.46875 48.054687zm0 0" />
      <path fill={fill} d="m83.585938 91.351562c2.402343 0 4.8125-.859374 6.726562-2.601562 4.085938-3.714844 4.390625-10.039062.675781-14.125-3.71875-4.085938-10.039062-4.386719-14.128906-.671875l-.003906.003906c-4.085938 3.714844-4.382813 10.035157-.667969 14.125 1.972656 2.167969 4.679688 3.269531 7.398438 3.269531zm0 0" />
      <path fill={fill} d="m392.433594 390.871094-.003906.007812c-3.714844 4.085938-3.410157 10.40625.675781 14.121094 1.914062 1.742188 4.320312 2.601562 6.722656 2.601562 2.71875 0 5.429687-1.105468 7.402344-3.277343 3.71875-4.085938 3.414062-10.410157-.671875-14.125-4.085938-3.714844-10.410156-3.414063-14.125.671875zm0 0" />
    </svg>
  )
}

export default Whatsapp;
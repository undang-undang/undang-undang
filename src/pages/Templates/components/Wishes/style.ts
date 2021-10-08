import style from 'styled-components'


const Container = style.div`
  max-width: 90%;
  margin: auto;
  
  .wishes-form form {
    display: flex;
    flex-direction: column;

  };
  
  textarea {
    resize: none;
  }

  .wishes-list {
    display: flex;
    flex-direction: column-reverse;
    max-height: 300px;
    overflow-y: scroll;
    margin-bottom: 20px;
  }
`

export {
  Container
}
import styled from 'styled-components'

export const BoxForm = styled.div`
  top: 0;
  left: 0;
  max-width: 540px;
  min-width: 30vw;
  z-index: 102;
  background: var(--black);
  display: grid;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 8px 12px #000b;
  form {
    display: flex;
    flex-direction: column;
    input, select, textarea {
      margin-bottom: 18px
    }
  }
`
export const TitleForm = styled.div`
  display: flex;
  color: var(--primary);
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  h2 {
    margin: 0;
  }
  button {
    background: transparent;
    color: var(--primary);
    border: none;
  }
`

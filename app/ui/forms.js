import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const Label = styled.label`
  font-family: ${({theme}) => theme.fonts.regular};
`

export const Input = styled.input`
  padding: .65em;
  border-radius: 2px;
  box-shadow: inset 0 0px 0px rgba(255,255,255, 0);
  border: solid 1px rgba(35,31,32, 0.3);
  color: inherit;
  outline: none;
`


export const Select = styled.select`
  width: 200px;
  height: 20px;
  outline: none;
  background-color: ${({theme}) => theme.colors.white};
`
export const Option = styled.option`
`
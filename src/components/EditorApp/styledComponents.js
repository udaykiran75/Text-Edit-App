import styled from 'styled-components'

export const Appbgcontainer = styled.div`
  background-color: #25262c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Appcontentcontainer = styled.div`
  background-color: #1b1c22;
  padding: 20px;
  width: 90vw;
  height: 90vh;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 60vw;
  }
`
export const Appleftcontainer = styled.div`
  margin-bottom: 30px;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 40%;
    height: 90vh;
    margin-bottom: 0px;
  }
`
export const Heading = styled.h1`
  color: #ffffff;
  font-family: Roboto;
  font-size: 23px;
`
export const TextEditorimage = styled.img`
  height: 240px;
  align-self: center;
  @media screen and (min-width: 768px){
    height: 300px;
    margin-top: 70px;
  }
`
export const Apprightcontainer = styled.div`
  background-color: #25262c;
  height: 60%;
  border: 1px solid #334155;
  border-radius: 8px;
  @media screen and (min-width: 768px){
    width: 57%;
    margin-left: 25px;
    height: 100%;
  }
`
export const ButtonsContainer = styled.ul`
  border-bottom: 1px solid #334155;
  display: flex;
  padding: 8px;
  margin: 0px;
`
export const Buttonlist = styled.li`
  list-style-type: none;
`
export const Textarea = styled.textarea`
  border: none;
  outline: none;
  width: 100%;
  height: 87%;
  padding: 13px;
  font-size: 15px;
  color: #f8fafc;
  background-color: transparent;
  @media screen and (min-width:768px){
    height: 91%;
  }
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
`
export const BoldBuutton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => props.color}
`
export const ItalicButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => props.color}
`
export const UderlineButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => props.color}
`

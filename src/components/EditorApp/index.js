import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  Appbgcontainer,
  Appcontentcontainer,
  Appleftcontainer,
  Apprightcontainer,
  TextEditorimage,
  Heading,
  ButtonsContainer,
  Textarea,
  BoldBuutton,
  ItalicButton,
  UderlineButton,
  Buttonlist,
} from './styledComponents'

class EditorApp extends Component {
  state = {userInput: '', isBold: false, isUnderline: false, isItalic: false}

  onClickBoldButton = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickUnderlineButton = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  onClickItalicButton = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onChangeUserInputText = event => {
    this.setState({userInput: event.target.value})
  }

  render() {
    const {userInput, isBold, isItalic, isUnderline} = this.state
    const boldBtnTextColor = isBold ? '#faff00' : '#f1f5f9'
    const italicBtnTextColor = isItalic ? '#faff00' : '#f1f5f9'
    const underlineBtnTextColor = isUnderline ? '#faff00' : '#f1f5f9'
    return (
      <Appbgcontainer>
        <Appcontentcontainer>
          <Appleftcontainer>
            <Heading>Text Editor</Heading>
            <TextEditorimage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </Appleftcontainer>
          <Apprightcontainer>
            <ButtonsContainer>
              <Buttonlist>
                <BoldBuutton
                  type="button"
                  onClick={this.onClickBoldButton}
                  data-testid="bold"
                  color={boldBtnTextColor}
                >
                  <VscBold size={23} />
                </BoldBuutton>
              </Buttonlist>
              <Buttonlist>
                <ItalicButton
                  type="button"
                  onClick={this.onClickItalicButton}
                  data-testid="italic"
                  color={italicBtnTextColor}
                >
                  <GoItalic size={23} />
                </ItalicButton>
              </Buttonlist>
              <Buttonlist>
                <UderlineButton
                  type="button"
                  onClick={this.onClickUnderlineButton}
                  data-testid="underline"
                  color={underlineBtnTextColor}
                >
                  <AiOutlineUnderline size={23} />
                </UderlineButton>
              </Buttonlist>
            </ButtonsContainer>
            <Textarea
              onChange={this.onChangeUserInputText}
              value={userInput}
              isBold={isBold}
              isItalic={isItalic}
              isUnderline={isUnderline}
            />
          </Apprightcontainer>
        </Appcontentcontainer>
      </Appbgcontainer>
    )
  }
}
export default EditorApp

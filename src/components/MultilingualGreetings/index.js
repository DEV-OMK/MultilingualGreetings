import {Component} from 'react'

import GreetingButton from '../GreetingButton'
import Greeting from '../Greeting'

import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class MultilingualGreetings extends Component {
  state = {
    activeId: languageGreetingsList[0].id,
  }

  updateActiveId = id => {
    this.setState({activeId: id})
  }

  renderButtons = () => {
    const {activeId} = this.state
    return (
      <ul className="buttons-container">
        {languageGreetingsList.map(eachGreeting => (
          <GreetingButton
            key={eachGreeting.id}
            greeting={eachGreeting}
            updateActiveId={this.updateActiveId}
            isActive={eachGreeting.id === activeId}
          />
        ))}
      </ul>
    )
  }

  renderGreeting = () => {
    const {activeId} = this.state
    const activeGreeting = languageGreetingsList.find(
      eachGreeting => eachGreeting.id === activeId,
    )

    return <Greeting greetingDetails={activeGreeting} />
  }

  render() {
    return (
      <div className="main-container">
        <div className="responsive-container">
          <h1 className="heading">Multilingual Greetings</h1>
          {this.renderButtons()}
          {this.renderGreeting()}
        </div>
      </div>
    )
  }
}

export default MultilingualGreetings

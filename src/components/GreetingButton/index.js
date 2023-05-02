import './index.css'

const GreetingButton = props => {
  const {greeting, isActive, updateActiveId} = props
  const buttonClassName = isActive ? 'button active-button' : 'button'

  const onClickButton = () => {
    updateActiveId(greeting.id)
  }

  return (
    <li>
      <button type="button" className={buttonClassName} onClick={onClickButton}>
        {greeting.buttonText}
      </button>
    </li>
  )
}

export default GreetingButton

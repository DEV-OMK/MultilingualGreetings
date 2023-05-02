import './index.css'

const Greeting = props => {
  const {greetingDetails} = props
  const {id, imageUrl, buttonText, imageAltText} = greetingDetails

  return (
    <div className="greeting-card">
      <img src={imageUrl} className="image" alt={imageAltText} />
    </div>
  )
}

export default Greeting

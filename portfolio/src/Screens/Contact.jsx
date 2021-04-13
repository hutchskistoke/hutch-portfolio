
import '../CSS/Contact.css'

export default function Contact() {
  return (
    <div className='contact-container'>
      <div className='connect-title'>Let's Connect!</div>
      <div className='my-email'>(hutchskistoke@gmail.com)</div>
      <form action="https://getform.io/f/19e63ecb-697d-4caf-9436-97aa2d37f7a6" method="POST" className='form'>
        <label className='name-tag'>
          Name: 
          <input type="text" name="name" className='name-input'></input>
        </label>
        <label className='email-tag'>
          Email: 
          <input type="email" name="email" className='email-input'></input>
        </label>
        <label className='message-tag'>
          Message: 
          <textarea type="text" name="message" className='message-input'></textarea>
        </label>
        <button type="submit" className='contact-submit'>Submit</button>
      </form>
    </div>
  )
}
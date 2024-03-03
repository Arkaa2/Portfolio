import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    // Set up a timeout to change letterClass after 3000 milliseconds
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  
    // Cleanup function: Clear the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, []); // The dependency array is empty, so this effect runs once on mount
  

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm('service_r98wtod', 'template_s178thn', form.current, 'v4VS_0caeeMBiHdQA')
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        (error) => {
          console.error('Failed to send the message:', error);
          alert('Failed to send the message, please try again');
        }
      );
  };
  

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="from_name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
         INDIA
          <br />
          WESTBENGAL
          <br />
          KOLKATA,BELGHORIA,700056 <br />
          DESOPRIYA NAGAR <br />
          <br />
          <span>arkachr@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[22.5726,  88.3639]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[22.5726,  88.3639]}>
              <Popup>ARKA lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
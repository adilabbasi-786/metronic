import React, {useState} from 'react'

import './Chatbot.scss'
import Knowledgebase from './Components/Knowledgebase'
import Person from './Components/Person'
import VodafoneData from './VodafoneData'

function Chatbot() {
  const [showPersona, setShowPersona] = useState(true)
  const [showknowledge, setShowKnowledge] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const hanldePersona = () => {
    setShowPersona(true)
    setShowKnowledge(false)
  }
  const hanldeknowledge = () => {
    setShowKnowledge(true)
    setShowPersona(false)
  }
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div
      className='main-head'
      style={{backgroundColor: 'black', width: '100%', height: '700px', display: 'flex'}}
    >
      <div
        className='left-Chatboat'
        style={{
          width: '20%',
          height: '100%',
          backgroundColor: '#363837',
          paddingLeft: '20px',
          paddingTop: '20px',
        }}
      >
        <h1 className='fw-bold me-3 text-white'>Chatbot</h1>
        <br />
        <h5
          className='highlighted'
          style={{
            color: '#ddddeb',
            cursor: 'pointer',
            paddingTop: '15px',
            paddingLeft: '40px',
          }}
          onClick={toggleDropdown}
        >
          <i className={`bi ${isOpen ? 'bi-chevron-down' : 'bi-chevron-up'}`}></i> Vodafone
        </h5>
        {isOpen && (
          <ul style={{color: 'white'}}>
            {VodafoneData.map((item) => (
              <li>{item.title}</li>
            ))}
          </ul>
        )}

        <div>
          <div className='separator border-dark my-10'></div>
          <h2
            style={{color: '#e4ebed', cursor: 'pointer', paddingTop: '10px', paddingLeft: '15px'}}
            className='highlighted'
            onClick={hanldePersona}
          >
            <i className='bi bi-person fs-2x'></i> Persona config
          </h2>
          <br />
          <br />
          <h2
            style={{
              color: '#ddddeb',
              cursor: 'pointer',
              paddingTop: '10px',
              marginTop: '-20px',
              paddingLeft: '15px',
            }}
            className='highlighted'
            onClick={hanldeknowledge}
          >
            <i className='bi bi-bookmarks fs-2x'></i> Knowledge base
          </h2>
        </div>

        <div className='separator border-dark my-10'></div>
        <h2
          style={{
            color: '#ddddeb',
            cursor: 'pointer',
            paddingTop: '15px',
            paddingLeft: '15px',
          }}
        >
          <i className='bi bi-chat-left-text fs-2x' style={{marginRight: '5px'}}></i> Feedback
        </h2>
      </div>
      {showknowledge && <Knowledgebase />}
      {showPersona && <Person />}
    </div>
  )
}

export default Chatbot

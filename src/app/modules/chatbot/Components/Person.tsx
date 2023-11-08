import React, {useState} from 'react'

function Person() {
  const [bioValue, setBioValue] = useState('')
  const [appearValue, setAppearValue] = useState('')
  const [voiceValue, setVoiceValue] = useState('')
  const handleBio = (bio) => {
    console.log(bio.target.value)
    setBioValue(bio.target.value)
  }
  const handleAppear = (e) => {
    console.log(e.target.value)
    setAppearValue(e.target.value)
  }
  const handleVoice = (e) => {
    console.log(e.target.value)
    setVoiceValue(e.target.value)
  }
  const handleBioPostRequests = async () => {
    const bioUrl = 'https://strapi.com'
    const bioData = {bio: bioValue}
    try {
      const bioResponse = await fetch(bioUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bioData),
      })
    } catch (error) {}
  }
  const handleAppearPostRequests = async () => {
    const appearUrl = 'https://strapi.com'
    const appearData = {bio: appearValue}
    try {
      const bioResponse = await fetch(appearUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appearData),
      })
    } catch (error) {}
  }
  const handleVoicePostRequests = async () => {
    const voiceUrl = 'https://strapi.com'
    const voiceData = {bio: voiceValue}
    try {
      const bioResponse = await fetch(voiceUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(voiceData),
      })
    } catch (error) {}
  }

  return (
    <>
      <div
        className='persona-chatboat'
        style={{
          backgroundColor: '#edf2ef',
          width: '50%',
          height: '95%',
          marginTop: '15px',
          marginLeft: '12px',
          paddingLeft: '25px',
          paddingTop: '20px',
          borderRadius: '5px 5px 5px',
        }}
      >
        <div>
          <div style={{display: 'flex'}}>
            <h2 style={{fontWeight: 'bold', fontSize: '24px'}}>Persona configator</h2>
            <div style={{marginLeft: '250px'}}>
              <a
                href='#'
                className='btn btn-light'
                style={{
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  padding: '7px',
                  marginTop: '-10px',
                }}
              >
                <i className='bi bi-download fs-2x'></i>
              </a>{' '}
              &nbsp;&nbsp;
              <a
                href='#'
                className='btn btn-light'
                style={{
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  padding: '7px',
                  marginTop: '-10px',
                }}
              >
                <i className='bi bi-arrow-counterclockwise fs-2x'></i>
              </a>
            </div>
          </div>
          <div className='mb-2'>
            <label className='form-label'>
              <h4>Biography</h4>
            </label>
            <textarea
              className='form-control'
              placeholder='Biography'
              rows={4}
              style={{width: '95%'}}
              onChange={handleBio}
            />
            <div style={{display: 'flex'}}>
              <a
                href='#'
                className='btn btn-bg-light btn-active-color-dark'
                style={{
                  borderRadius: '50%',
                  width: '25px',
                  height: '25px',
                  padding: '2px',
                  marginTop: '-10px',
                  marginLeft: '450px',
                }}
              >
                <i className='bi bi-x fs-2x'></i>
              </a>

              <a
                href='#'
                className='btn btn-dark'
                style={{
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  padding: '7px',
                  marginTop: '-10px',
                }}
              >
                <i className='bi bi-arrow-counterclockwise fs-2x'></i>
              </a>
              <a
                href='#'
                className='btn btn-success'
                style={{
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  padding: '7px',
                  marginTop: '-10px',
                  backgroundColor: '#22e660',
                }}
                onClick={handleBioPostRequests}
              >
                <i className='bi bi-check fs-2x'></i>
              </a>
            </div>
          </div>
          <div className='mb-5'>
            <label className='form-label'>
              <h4>Appearances</h4>
            </label>
            <textarea
              className='form-control'
              placeholder='Appearances'
              rows={4}
              style={{width: '95%'}}
              onChange={handleAppear}
            />
            <div style={{display: 'flex'}}>
              <a
                href='#'
                className='btn btn-bg-light btn-active-color-dark'
                style={{
                  borderRadius: '50%',
                  width: '25px',
                  height: '25px',
                  padding: '2px',
                  marginTop: '-10px',
                  marginLeft: '450px',
                }}
              >
                <i className='bi bi-x fs-2x'></i>
              </a>

              <a
                href='#'
                className='btn btn-dark'
                style={{
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  padding: '7px',
                  marginTop: '-10px',
                }}
              >
                <i className='bi bi-arrow-counterclockwise fs-2x'></i>
              </a>
              <a
                href='#'
                className='btn btn-success'
                style={{
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  padding: '7px',
                  marginTop: '-10px',

                  backgroundColor: '#22e660',
                }}
                onClick={handleAppearPostRequests}
              >
                <i className='bi bi-check fs-2x'></i>
              </a>
            </div>
          </div>
          <div className='mb-5'>
            <label className='form-label'>
              <h4>Voices</h4>
            </label>
            <textarea
              className='form-control'
              placeholder='Voices'
              rows={4}
              style={{width: '95%'}}
              onChange={handleVoice}
            />
            <div style={{display: 'flex'}}>
              <a
                href='#'
                className='btn btn-bg-light btn-active-color-dark'
                style={{
                  borderRadius: '50%',
                  width: '25px',
                  height: '25px',
                  padding: '2px',
                  marginTop: '-10px',
                  marginLeft: '450px',
                }}
              >
                <i className='bi bi-x fs-2x'></i>
              </a>

              <a
                href='#'
                className='btn btn-dark'
                style={{
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  padding: '7px',
                  marginTop: '-10px',
                }}
              >
                <i className='bi bi-arrow-counterclockwise fs-2x'></i>
              </a>
              <a
                href='#'
                className='btn btn-success'
                style={{
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  padding: '7px',
                  marginTop: '-10px',
                  backgroundColor: '#22e660',
                }}
                onClick={handleVoicePostRequests}
              >
                <i className='bi bi-check fs-2x'></i>
              </a>
            </div>
          </div>
          <br />
          <div style={{display: 'flex', marginTop: '-10px'}}>
            <h3>Add</h3>
            <a
              href='#'
              className='btn btn-light'
              style={{width: '25%', marginLeft: '10px', marginTop: '-10px'}}
            >
              <i className='bi bi-plus'></i>
              character
            </a>
            <a
              href='#'
              className='btn btn-light'
              style={{width: '25%', marginLeft: '10px', marginTop: '-10px'}}
            >
              <i className='bi bi-plus'></i>
              work
            </a>
            <a
              href='#'
              className='btn btn-light'
              style={{width: '25%', marginLeft: '10px', marginTop: '-10px'}}
            >
              <i className='bi bi-plus'></i>
              character
            </a>
            <a
              href='#'
              className='btn btn-light'
              style={{width: '25%', marginLeft: '10px', marginTop: '-10px'}}
            >
              <i className='bi bi-plus'></i>
              Ethic
            </a>
          </div>
        </div>
      </div>
      <div
        className='chat'
        style={{
          backgroundColor: '#363837',
          width: '28%',
          height: '95%',
          marginTop: '15px',
          marginLeft: '12px',
          paddingLeft: '25px',
          paddingTop: '20px',
          borderRadius: '5px 5px 5px',
        }}
      ></div>
    </>
  )
}

export default Person

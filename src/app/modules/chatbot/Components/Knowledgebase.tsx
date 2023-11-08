import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import dataTable from './Data'

function Knowledgebase() {
  const [addData, setAddData] = useState('')
  const AddhandleChange = (e) => {
    setAddData(e.target.value)
  }
  const handleAddClick = () => {
    console.log(addData)
    setAddData('')
  }
  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      console.log('File uploaded successfully:', file.name)
    }
  }

  return (
    <>
      <div
        className='knowledgebase'
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
          <h2 style={{fontWeight: 'bold', fontSize: '24px'}}>knowledge base</h2>
          <p style={{color: '#898c8a', marginTop: '15px'}}>
            This page contain all document of page
          </p>

          <div className='d-flex align-items-center position-relative my-1'>
            <i className='ki-duotone ki-magnifier fs-1 position-absolute ms-6'>
              <span className='path1'></span>
              <span className='path2'></span>
            </i>
            <input
              type='text'
              data-kt-user-table-filter='search'
              className='form-control form-control-solid w-250px ps-14'
              placeholder='Search user'
            />
          </div>
          <div style={{marginLeft: '450px', marginTop: '-50px'}}>
            <a
              href='#'
              className='btn btn-light'
              style={{
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                padding: '7px',
                marginTop: '-20px',
                backgroundColor: '#dfe6e1',
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
                marginTop: '-20px',
                backgroundColor: '#dfe6e1',
              }}
            >
              <i className='bi bi-arrow-counterclockwise fs-2x'></i>
            </a>
          </div>
          <table
            className='table table-hover table-rounded table-striped border gy-7 gs-7'
            style={{marginTop: '20px'}}
          >
            <thead>
              <tr className='fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200'>
                <th>Name</th>
                <th>Data</th>
                <th>Type</th>
                <th>Size</th>
              </tr>
            </thead>
            <tbody>
              {dataTable.map((item) => (
                <tr>
                  <td>
                    <div className='form-check form-check-custom  ' style={{marginLeft: '-20px'}}>
                      <input className='form-check-input' type='checkbox' />
                      &nbsp; {item?.Name}
                    </div>
                  </td>
                  <td>{item?.Data}</td>
                  <td>{item?.Type}</td>
                  <td>{item?.Size}</td>
                  <td>
                    <i className='bi bi-download '></i>
                  </td>
                  <td>
                    <i className='bi bi-trash3 '></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <ul className='pagination'>
            <li className='page-item previous disabled'>
              <a href='#' className='page-link'>
                <i className='previous'></i>
              </a>
            </li>
            <li className='page-item active'>
              <a href='#' className='page-link'>
                1
              </a>
            </li>
            <li className='page-item '>
              <a href='#' className='page-link'>
                2
              </a>
            </li>

            <li className='page-item next'>
              <a href='#' className='page-link'>
                <i className='next'></i>
              </a>
            </li>
          </ul>
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
      >
        <h2 style={{fontWeight: 'bold', fontSize: '24px', color: 'white'}}>New Content</h2>
        <p style={{fontWeight: 'bold', fontSize: '16px', color: 'white', marginTop: '150px'}}>
          Upload a file
        </p>
        <div
          className='border border-dotted'
          style={{
            backgroundColor: '#363837',
            width: '300px',
            height: '150px',
            borderRadius: '5%',
          }}
        >
          <input
            className='form-control highlighted'
            type='file'
            id='formFile'
            style={{
              paddingTop: '10px',
              marginTop: '55px',
              width: '80%',
              marginLeft: '30px',
            }}
            onChange={handleFileUpload}
          />
        </div>
        <p style={{fontWeight: 'bold', fontSize: '16px', color: 'white', marginTop: '80px'}}>
          Add a url
        </p>
        <InputGroup className='mb-3 ' style={{position: 'relative', marginLeft: '-8px'}}>
          <InputGroup.Text id='basic-addon1' style={{backgroundColor: '#363837'}}>
            <i className='bi bi-link'></i>
          </InputGroup.Text>
          <Form.Control
            placeholder='Username'
            aria-label='Username'
            aria-describedby='basic-addon1'
            style={{
              backgroundColor: '#363837',
              borderBlockStyle: 'solid',
              borderColor: '#989e9a',
            }}
            value={addData}
            onChange={AddhandleChange}
          />
          <a
            href='#'
            className='btn btn-info highlighted'
            style={{
              backgroundColor: '#7239ea',
              borderRadius: '13px 13px 13px 13px',
              position: 'absolute',
              right: 5,
              width: '50px',
              height: '30px',
              paddingLeft: '7px',
              marginTop: '5px',
              paddingTop: '5px',
            }}
            onClick={handleAddClick}
          >
            Add
          </a>
        </InputGroup>
      </div>
    </>
  )
}

export default Knowledgebase

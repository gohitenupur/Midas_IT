import React from 'react'
import IMG1 from "../assets/images/first.png"

function Longitudnal() {
  return (
    <div className='container'>
      <div>
      <img src={IMG1} alt="img1" style={{ width: "100%" }} />
      </div>
      <br/>
      <div className='d-flex border m-1 p-3 justify-content-between'>
      <label className="form-check-label lm-0" for="inlineRadio1">Stucture Type</label>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
          <label className="form-check-label" for="inlineRadio1">2-Dimensinal</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
          <label className="form-check-label" for="inlineRadio2">3-dimensinal</label>
      </div>
      </div>
      <div className='d-flex border m-1 p-3 justify-content-between'>
      <label className="form-check-label lm-0" for="inlineRadio1">Type of bridge</label>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
          <label className="form-check-label" for="inlineRadio1">Normal type frame</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
          <label className="form-check-label" for="inlineRadio2">box culvert</label>
      </div>
      </div>

      
      </div>
    
    
  )
}

export default Longitudnal
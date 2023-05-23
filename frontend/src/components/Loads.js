import React, { useState } from 'react'
import IMG2 from "../assets/images/base1.png"
function Loads() {
  const [fileName, setFileName] = useState('No file chosen');
  const [formData, setFormData] = useState({
    type: '',
    sizeOfPlateElement: '',
    span: '',
    b1: '',
    b2: '',
    b3: '',
    b4: '',
    b5: '',
    b6: '',
    b7: '',
    D: '',
    support: '',
    springType: '',
    lower: '',
    lateral: '',
    upper: '',
    lengthOfBasicLink: '',
    lengthUnit: ''
  });
  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: fieldValue
    }));
  };

    const handleSave = () => {
      const dataToSave = JSON.stringify(formData);; 
  
      // Simulating data saving process
      const fileContents = `export const data = '${dataToSave}';`;
      const blob = new Blob([fileContents], { type: 'text/javascript' });
      const url = URL.createObjectURL(blob);
  
      
      const link = document.createElement('a');
      link.href = url;
      link.download = 'loads.js';
      link.click();
  
     
      URL.revokeObjectURL(url);
    };
  


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('No file chosen');
    }
  };

  return (
    <div className='container'>
      <div>
        <img src={IMG2} alt="img1" style={{ width: "100%" }} />
      </div>
      <br />

      <form>
        <div className="form-row">
          <div className='d-flex border m-1 p-3 justify-content-between'>
            <div className="d-flex justify-content-between">
              <label className="form-check-label lm-10" htmlFor="materialDropdown">Type&nbsp;</label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <select className="form-select" id="materialDropdown" onChange={handleInputChange}>
                <option disabled selected>Select Material</option>
                <option value="concrete">Type1</option>
                <option value="steel">Type2</option>
                <option value="wood">Type3</option>
              </select>
            </div>
            <div className="d-flex justify-content-between">
              <label className="form-check-label lm-10 rm-0" htmlFor="plateSizeInput">Size of Plate</label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="d-flex">
                <input type="number" className="form-control" id="plateSizeInput" onChange={handleInputChange} />
                <span className="input-group-text">m</span>
              </div>
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col-md-3">
            <div className="d-flex align-items-center">
              <label htmlFor="b1Input">b1:</label>
              <input type="number" className="form-control" id="b1Input" onChange={handleInputChange} />
              <span>m</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex align-items-center">
              <label htmlFor="b2Input">b2:</label>
              <input type="number" className="form-control" id="b2Input" onChange={handleInputChange} />
              <span>m</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex align-items-center">
              <label htmlFor="b3Input">b3:</label>
              <input type="number" className="form-control" id="b3Input" onChange={handleInputChange} />
              <span>m</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex align-items-center">
              <label htmlFor="b4Input">b4:</label>
              <input type="number" className="form-control" id="b4Input" onChange={handleInputChange} />
              <span>m</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="d-flex align-items-center">
              <label htmlFor="b5Input">b5:</label>
              <input type="number" className="form-control" id="b5Input" onChange={handleInputChange} />
              <span>m</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex align-items-center">
              <label htmlFor="b6Input">b6:</label>
              <input type="number" className="form-control" id="b6Input" onChange={handleInputChange} />
              <span>m</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex align-items-center">
              <label htmlFor="b7Input">b7:</label>
              <input type="number" className="form-control" id="b7Input" onChange={handleInputChange} />
              <span>m</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex align-items-center">
              <label htmlFor="DInput">D:</label>
              <input type="number" className="form-control" id="DInput" onChange={handleInputChange} />
              <span>m</span>
            </div>
          </div>
        </div>

        <div className="row">
  <div className="col">
    <div className="form-group border">
    <label className="mr-2">Support of Pi Frame:</label>
        <br />
      <div className="d-flex justify-content-evenly">
        
        
          <label htmlFor="transverseFixedSupport" className="">Transverse Fixed Support</label>
          <select id="transverseFixedSupport" name="support" className="form-control" onChange={handleInputChange} style={{width:"300px"}}>
            <option value="">Select Support Type</option>
            <option value="transverse_fixed">Transverse Fixed Support</option>
            <option value="other_support">Other Support Type</option>
          </select>
          <label htmlFor="fromleftside">From Left Side</label>
        
      </div>
    </div>
  </div>
</div>


<div className="row">
  <div className="col-md-12">
    <div className="form-group">
      <label>Support of Culvert:</label>
      <div className="d-flex align-items-center">
        <label htmlFor="springType" className="mr-3">Spring Type:</label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


        <div className="form-check form-check-inline">
          <input type="radio" id="general" name="springType" className="form-check-input" value="general" onChange={handleInputChange} />
          <label htmlFor="general" className="form-check-label">General</label>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <div className="form-check form-check-inline">
          <input type="radio" id="compressionOnly" name="springType" className="form-check-input" value="compression_only" onChange={handleInputChange} />
          <label htmlFor="compressionOnly" className="form-check-label">Compression Only</label>
        </div>
      </div>
    </div>
    
    <div className="form-group border">
    <div className="d-flex align-items-center ">
        <label htmlFor="modulesOfSubgradeReaction">Modules of Subgrade Reaction:</label>
      </div>
      <div className="d-flex align-items-center ">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <label htmlFor="lower">Lower:</label>
        <input type="text" id="lower" name="lower" className="form-control " onChange={handleInputChange} />
        <span>km/hr&sup3;</span>
      </div>
      <div className="d-flex align-items-center">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <label htmlFor="lateral">Lateral:</label>
        <input type="text" id="lateral" name="lateral" className="form-control ml-2" onChange={handleInputChange} />
        <span>km/hr&sup3;</span>
      </div>
      <div className="d-flex align-items-center">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <label htmlFor="upper">Upper:</label>
        <input type="text" id="upper" name="upper" className="form-control ml-2" onChange={handleInputChange} />
        <span>km/hr&sup3;</span>
      </div>
    </div>
    <div className="form-group">
      <div className="d-flex align-items-center">
        <label htmlFor="lengthOfBasicLink">Length of Basic Link:</label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" id="lengthOfBasicLink" name="lengthOfBasicLink" className="form-control ml-2" style={{width:"300px"}} onChange={handleInputChange} />
        <span>m</span>
      </div>
    </div>
  </div>
</div>







<div className="d-flex align-items-center">
          <span className="input-group-text">Length Unit:</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <select className="form-select" id="lengthUnitDropdown" onChange={handleInputChange} style={{width:"300px"}}>
            <option selected disabled>m,mm,in</option>
            <option value="m">m</option>
            <option value="mm">mm</option>
            <option value="mm">in</option>
          </select>
        </div>













        <div className="d-flex justify-content-between">
          <div>
            <label className="btn btn-primary">
              Import
              <input type="file" style={{ display: "none" }} onChange={handleFileChange} />
            </label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>{fileName}</span>
          </div>
          <div>
            <button className="btn btn-primary" onClick={handleSave}>Save</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Loads
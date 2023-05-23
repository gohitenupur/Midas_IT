import React,{useState} from 'react'
import IMG1 from "../assets/images/first.png"
import "./db"

function Longitudnal() {
  const [fileName, setFileName] = useState('No file chosen');

  const [formData, setFormData] = useState({
    structureType: '',
    bridgeType: '',
    material: '',
    plateSize: '',
    span: '',
    wingWall: false,
    wingWallThickness: '',
    skewAngle: '',
    lengthUnit: '',
    t1: '',
    t2: '',
    t3: '',
    t4: '',
    a1: '',
    a2: '',
    a3: '',
    a4: '',
    b1: '',
    b2: '',
    b3: '',
    b4: '',
    b5: '',
    b6: '',
    h1: '',
    h2: '',
    h3: '',
    A: '',
    C: '',
    p: ''
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
      link.download = 'longitudinal.js';
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
        <img src={IMG1} alt="img1" style={{ width: "100%" }} />
      </div>
      <br />


      <form>
        <div className='d-flex border m-1 p-3 justify-content-evenly'>
          <label className="form-check-label lm-0" for="inlineRadio1">Structure Type</label>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onChange={handleInputChange} />
            <label className="form-check-label" for="inlineRadio1">2-Dimensional</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onChange={handleInputChange} />
            <label className="form-check-label" for="inlineRadio2">3-Dimensional</label>
          </div>
        </div>

        <div className='d-flex border m-1 p-3 justify-content-evenly'>
          <label className="form-check-label lm-0" for="inlineRadio1">Type of Bridge</label>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onChange={handleInputChange} />
            <label className="form-check-label" for="inlineRadio1">Normal Type Frame</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onChange={handleInputChange}/>
            <label className="form-check-label" for="inlineRadio2">Box Culvert</label>
          </div>
        </div>

        <div className='d-flex border m-1 p-3 justify-content-between'>
          <div className="d-flex justify-content-between">
            <label className="form-check-label lm-10 " for="materialDropdown">Material &nbsp;</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <select className="form-select " id="materialDropdown" onChange={handleInputChange}>
              <option selected disabled>Select Material</option>
              <option value="concrete">Concrete</option>
              <option value="steel">Steel</option>
              <option value="wood">Wood</option>
            </select>
          </div>
          <div className="d-flex justify-content-between">
            <label className="form-check-label lm-10 rm-0" for="plateSizeInput">Size of Plate</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="d-flex ">
              <input type="number" className="form-control" id="plateSizeInput" onChange={handleInputChange}/>
              <span className="input-group-text">m</span>
            </div>
          </div>
        </div>

        <div className="d-flex border m-1 p-3 justify-content-space-evenly">
          <div className="d-flex align-items-center">
            <span className="input-group-text">Span:</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="number" className="form-control" onChange={handleInputChange} />
            <span className="input-group-text">m</span>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="d-flex align-items-center">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="wingWallCheckbox" onChange={handleInputChange}/>
              <label className="form-check-label" htmlFor="wingWallCheckbox" style={{ display: 'inline' }}>Wing Wall:</label>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label className="form-check-label" htmlFor="wingWallThicknessInput">Thickness:</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="number" className="form-control" id="wingWallThicknessInput" onChange={handleInputChange}/>
            <span className="input-group-text">m</span>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <span className="input-group-text">Skew Angle :</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="number" className="form-control" style={{ width: '300px' }} onChange={handleInputChange} />
          <span className="input-group-text">[deg]</span>
        </div>

        <div className="d-flex align-items-center">
          <span className="input-group-text">Length Unit:</span>
          <select className="form-select" id="lengthUnitDropdown" onChange={handleInputChange}>
            <option selected disabled>m,mm,in</option>
            <option value="m">m</option>
            <option value="mm">mm</option>
            <option value="mm">in</option>
          </select>
        </div>

        <div className="row">
          <div className="col">
            <div className="d-flex align-items-center">
              <label htmlFor="t1Input">t1:</label>
              <input type="number" className="form-control" id="t1Input" onChange={handleInputChange} />
              <span>m</span>
            </div>
            <div className="d-flex align-items-center">
              <label htmlFor="t2Input">t2:</label>
              <input type="number" className="form-control" id="t2Input" onChange={handleInputChange}/>
              <span>m</span>
            </div>
            <div className="d-flex align-items-center">
              <label htmlFor="t3Input">t3:</label>
              <input type="number" className="form-control" id="t3Input" onChange={handleInputChange}/>
              <span>m</span>
            </div>
            <div className="d-flex align-items-center">
              <label htmlFor="t4Input">t4:</label>
              <input type="number" className="form-control" id="t4Input" onChange={handleInputChange}/>
              <span>m</span>
            </div>
          </div>
          <div className="col">
            <div className="d-flex align-items-center">
              <label htmlFor="a1Input">a1:</label>
              <input type="number" className="form-control" id="a1Input" onChange={handleInputChange} />
              <span>m</span>
            </div>
            <div className="d-flex align-items-center">
              <label htmlFor="a2Input">a2:</label>
              <input type="number" className="form-control" id="a2Input" onChange={handleInputChange} />
              <span>m</span>
            </div>
            <div className="d-flex align-items-center">
              <label htmlFor="a3Input">a3:</label>
              <input type="number" className="form-control" id="a3Input" onChange={handleInputChange}/>
              <span>m</span>
            </div>
            <div className="d-flex align-items-center">
              <label htmlFor="a4Input">a4:</label>
              <input type="number" className="form-control" id="a4Input" onChange={handleInputChange}/>
              <span>m</span>
            </div>
          </div>
          <div className="col">
            <div className="d-flex align-items-center">
              <label htmlFor="b1Input">b1:</label>
              <input type="number" className="form-control" id="b1Input" onChange={handleInputChange}/>
              <span>m</span>
            </div>
            <div className="d-flex align-items-center">
              <label htmlFor="b2Input">b2:</label>
              <input type="number" className="form-control" id="b2Input"  onChange={handleInputChange} />
              <span>m</span>
            </div>
            <div className="d-flex align-items-center">
              <label htmlFor="b3Input">b3:</label>
              <input type="number" className="form-control" id="b3Input" onChange={handleInputChange}/>
              <span>m</span>
            </div>
            <div className="d-flex align-items-center">
              <label htmlFor="b4Input">b4:</label>
              <input type="number" className="form-control" id="b4Input" onChange={handleInputChange}/>
              <span>m</span>
            </div>
          </div>
          <div className="col">
            <div className="d-flex align-items-center">
              <label htmlFor="b5Input">b5:</label>
              <input type="number" className="form-control" id="b5Input" onChange={handleInputChange}/>
              <span>m</span>
            </div>
            <div className="d-flex align-items-center">
              <label htmlFor="b6Input">b6:</label>
              <input type="number" className="form-control" id="b6Input" onChange={handleInputChange}/>
              <span>m</span>
            </div>
            <div className="d-flex align-items-center">
              <label htmlFor="h1Input">h1:</label>
              <input type="number" className="form-control" id="h1Input" onChange={handleInputChange}/>
              <span>m</span>
            </div>
            <div className="d-flex align-items-center">
              <label htmlFor="h2Input">h2:</label>
              <input type="number" className="form-control" id="h2Input" onChange={handleInputChange}/>
              <span>m</span>
            </div>
          </div>
          <div className="col">

            <div className="d-flex align-items-center">
              <label htmlFor="h3Input">h3:</label>
              <input type="number" className="form-control" id="h3Input" onChange={handleInputChange} />
              <span>m</span>
            </div>
            <div className="d-flex align-items-center">
              <label htmlFor="AInput ">A:</label>
              <input type="number" className="form-control" id="AInput" onChange={handleInputChange}/>
              <span>[deg]</span>
            </div>
            <div className="d-flex align-items-center">
              <label htmlFor="CInput">C:</label>
              <input type="number" className="form-control" id="CInput" onChange={handleInputChange}/>
              <span>m</span>
            </div>
            <div className="d-flex align-items-center">
              <label htmlFor="pInput">p:</label>
              <input type="number" className="form-control" id="pInput" onChange={handleInputChange}/>
              <span>m</span>
            </div>
          </div>

        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <hr />

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

export default Longitudnal
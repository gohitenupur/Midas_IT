import React, { useState } from 'react';

function Transverse() {
  const [fileName, setFileName] = useState('No file chosen');
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: fieldValue,
    }));
  };

  const handleSave = () => {
    const dataToSave = JSON.stringify(formData);

    // Simulating data saving process
    const fileContents = `export const data = '${dataToSave}';`;
    const blob = new Blob([fileContents], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'Transverse.js';
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
    <div className='container border'>
      <form>
        <div className='border d-flex justify-content-between'>
          <label htmlFor='codeDropdown'>Load Combinators:</label>
          <select id='codeDropdown' value='selectedCode' onChange={handleInputChange}>
            <option value=''>Select Code</option>
            <option value='AASHTO-Std2X'>AASHTO-Std2X</option>
            {/* Add more options as needed */}
          </select>

          <div className='d-flex justify-content-between'>
            <label>
              <input type='checkbox' name='isFactored' checked={formData.isFactored} onChange={handleInputChange} />
              Factored
            </label>

            <label>
              <input type='checkbox' name='isUnfactored' checked={formData.isUnfactored} onChange={handleInputChange} />
              Unfactored
            </label>
          </div>
        </div>

        <label htmlFor='codeDropdown'>Define Moving Load Code</label>

        <div className='form-group border'>
          <label>
            <input
              type='checkbox'
              name='selfWeight'
              checked={formData.selfWeight}
              onChange={handleInputChange}
            />
            Self Weight
          </label>
        </div>

        <div className='form-group'>
          <label>
            <input
              type='checkbox'
              name='permanentWeightDensity'
              checked={formData.permanentWeightDensity}
              onChange={handleInputChange}
            />
            Permanent Weight Density
          </label>
          <input
            type='text'
            name='permanentWeightDensity'
            value={formData.permanentWeightDensity}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Soil Weight Density</label>
          <input type='text' name='soilWeightDensity' value={formData.soilWeightDensity} onChange={handleInputChange} />
        </div>

        <div className='form-group'>
          <label>Soil pH [deg]</label>
          <input type='text' name='soilpH' value={formData.soilpH} onChange={handleInputChange} />
        </div>

        <div className='form-group'>
          <label>Su Change</label>
          <input type='text' name='suChange' value={formData.suChange} onChange={handleInputChange} />
        </div>

        <div className='form-group'>
          <label>Subgrade Weight Density</label>
          <input
            type='text'
            name='subgradeWeightDensity'
            value={formData.subgradeWeightDensity}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Load Slope (L) 1:</label>
          <input type='text' name='loadSlopeL1' value={formData.loadSlopeL1} onChange={handleInputChange} disabled />
        </div>

        <div className='form-group'>
          <label>Load Slope (R) 1:</label>
          <input type='text' name='loadSlopeR1' value={formData.loadSlopeR1} onChange={handleInputChange} disabled />
        </div>

        <div className='d-flex justify-content-between'>
          <div>
            <label className='btn btn-primary'>
              Import
              <input type='file' style={{ display: 'none' }} onChange={handleFileChange} />
            </label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>{fileName}</span>
          </div>
          <div>
            <button className='btn btn-primary' onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Transverse;

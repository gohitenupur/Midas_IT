import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Longitudnal from './Longitudnal'
import Transverse from './Transverse'
import Loads from './Loads'
import { Nav ,Button} from 'react-bootstrap';

function Comman() {
    return (
        <div className='container'>
            {/* new code here */}
            <Nav variant="outline-light" defaultActiveKey="/">
                <Nav.Item>
                    <Nav.Link href="/"><Button variant="outline-secondary lm-0 rm-0">Longitudinal</Button></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/transverse"><Button variant="outline-secondary lm-0 rm-0">Transverse</Button></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/loads"><Button variant="outline-secondary lm-0 rm-0">Loads</Button></Nav.Link>
                </Nav.Item>
            </Nav>
            <Routes>
                {/* Path = "/" tells us that this is the root component of this entity, element atrribute takes the actual jsx or component to be displayed*/}
                <Route path="/" element={<Longitudnal></Longitudnal>}></Route>
                <Route path="/transverse" element={<Transverse></Transverse>}></Route>
                <Route path="/loads" element={<Loads></Loads>}></Route>
            </Routes>
        </div>
    );
}

export default Comman
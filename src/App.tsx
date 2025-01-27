
import './App.css'
import { ArrowRight02Icon, Home01Icon } from "hugeicons-react";

function App() {

  return (
    <div className="container">
      <div className="card">
        <div className="box">
          <div className="icon">
            <div className="iconBox">
              <div className="lastname">Fanirintsoa</div>
              <div className="firstname">Mathieu</div>
            </div>
          </div>
          <div className="content">
              <div className="circle">

              </div>
              <div className="presentation">
                <div className="light-text">I'm</div>
                <div className="light-text-name">Fanirinstoa</div>
                <div className="bold-text-name">Mathieu</div>
                <div className="get-in-touch"><ArrowRight02Icon size={32} color="#000"/></div>
                
              </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default App

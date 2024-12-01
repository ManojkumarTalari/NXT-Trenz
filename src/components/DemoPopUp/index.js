import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css'

const DemoPopUp = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <button type="button" className="trigger-button">
          Demo
        </button>
      }
    >
      {close => (
        <>
          <div className="popup-content">
            <h2 className="popup-title">User Credentials</h2>
            <div className="credentials">
              <div className="user-section prime-user">
                <h3 className="user-title">Prime User</h3>
                <p className="user-detail">
                  <strong>Username:</strong> rahul
                </p>
                <p className="user-detail">
                  <strong>Password:</strong> rahul@2021
                </p>
              </div>
              <div className="user-section non-prime-user">
                <h3 className="user-title">Non-Prime User</h3>
                <p className="user-detail">
                  <strong>Username:</strong> raja
                </p>
                <p className="user-detail">
                  <strong>Password:</strong> raja@2021
                </p>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="trigger-button"
            onClick={() => close()}
          >
            Close
          </button>
        </>
      )}
    </Popup>
  </div>
)
export default DemoPopUp

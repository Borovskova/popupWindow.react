
import React from 'react'
import PopupWindow from './PopupWindow.js'
import ComponentC from './componentC.js'







const BUTTON_WRAP_STYLES = {
  position: 'relative'
}
const BUTTON_STYLES = {
  position: 'absolute',
  left: '90%',
  top: '10px',
}

class App extends React.PureComponent {
  constructor(props) {
    super(props);


    this.state = {
      showPopupWindow: false,
    };
    this.openPopupWindow = this.openPopupWindow.bind(this);
    this.closePopupWindow = this.closePopupWindow.bind(this);
  }
  componentDidMount() {
    window.addEventListener('beforeunload', () => {
      this.closePopupWindow();
    });

  }
  openPopupWindow() {
    this.setState(state => ({
      ...state,
      showPopupWindow: true,
    }));
  }

  closePopupWindow() {
    this.setState({ showPopupWindow: false });
    console.log('window closed');
  }

  render() {
    return (
      <div style={BUTTON_WRAP_STYLES}>
        
        {this.state.showPopupWindow && (
          <PopupWindow>
            <button onClick={() => {
              this.closePopupWindow();
            }} style={BUTTON_STYLES}>
              Close me!
            </button>
          </PopupWindow>
        )}
        <ComponentC parentMethod= {this.openPopupWindow}></ComponentC>
      </div>

    );
  }
}
export default App
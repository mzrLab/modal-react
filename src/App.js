import React from 'react';
import Modal from './Modal';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { show: false };
  }
  showModal = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };
render(){
  return(
    <main>
        <h1>React Modal</h1>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <h1>Welcome</h1>
          <p>hey this is some dummy data that I'm writing<br />
          </p>
        </Modal>
        <button type="button" onClick={this.showModal}>
          open
        </button>
      </main>
  )
}
}

export default App;

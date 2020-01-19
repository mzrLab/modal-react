import React from 'react';

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
        <button type="button" onClick={this.showModal}>
          open
        </button>
    </main>
  )
}
}

export default App;

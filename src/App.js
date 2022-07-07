import React, { Component } from 'react'

function App() {
  return (
    <div >
      <WelcomeCodetrain name="Codetrain "/>
      <WelcomeCodetrain name="KNUST "/>
    
    </div>
  );
}

export default App;
class  WelcomeCodetrain  extends Component {
  render() {
    return (
			<>
				<h1>{this.props.name} is awesome, react works!!!!</h1>
			</>
		);
  }
}




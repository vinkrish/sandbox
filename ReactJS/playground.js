constructor(props) {
	super(props);
	this.state = { counter:0 };
}

// or

state = { counter:0 }

// In class

sayHi(event) {
	alert(`Hi ${ this.props.name }`);
}

// In function

const sayHi = (event) => {
	alert(`Hi ${ props.name }`);
}

// Ways to create components

var HelloWorld = React.createClass({
	render: function() {
		return(
			<h1>Hello World!</h1>
		);
	}
});

var HelloWorld = function(props) {
	return(
		<h1>Hello World!</h1>
	);
};
//props immutable

// Function Component
const MyComponent = (props) => {
  return(
    <elementOrComponent../>
  )
}

// Class Component
class MyComponent extends React.Component {
  // Bind in constructor for better performance
  constructor( props ){
    super( props );
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(event){
    // your event handling logic
  }
  
  render() {
    return(
      <elementOrComponent../>	
    )
  }
}

ReactDOM.render(
  <MyComponent />,
  document.getElementById("app")
);

const handleClick = () => {
	this.setState({
		counter: this.state.counter+1;
	})
}

// No autobind in ES6

<div onClick = { this.handleClick }></div>

// Requires explicit bind

<div onClick = { this.handleClick.bind(this) }></div>

// How to render table
<Table striped condensed hover>
  <thead>
    <tr>
      <th></th>
      <th>Name</th>
      <th>Address</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    {personArray.map(this.renderPerson)}
  </tbody>
</Table>
renderPerson(person, index) {
  return (
    <tr key={index}>
      <td>{person.name}</td>
      <td>{person.address}</td>
      <td>{person.age}</td>
    </tr>
  )
}

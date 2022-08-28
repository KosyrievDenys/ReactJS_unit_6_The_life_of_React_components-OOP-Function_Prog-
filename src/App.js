import './App.css';
import FunctionProg from './FunctionProg';
import Homework1 from './Homework1';
import OOP from './OOP';


function App() {
	return (
		<div>
			<Homework1 p1={88} />
			<OOP arg={77} />
			<FunctionProg arg={77}/>
		</div>
	);
}

export default App;

import React, {useState, createContext} from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

// import components
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
import Footer from './components/Footer';
//import router
import { BrowserRouter as Router } from 'react-router-dom';


export const MyContext = createContext();

const App = () => {

  const [data, setData] = useState({name: ''})

  return (
		<MyContext.Provider value={{ data, setData }}>
			<Router>
				<Header />
				<AnimRoutes />
				<TawkMessengerReact
					propertyId="6425a4b931ebfa0fe7f592f2"
					widgetId="1gspgmsqc"
				/>
				<Footer />
			</Router>
		</MyContext.Provider>
  )
};

export default App;

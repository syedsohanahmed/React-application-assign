import Header from "./Components/Header";
import Content from './Components/Content';
import Footer from './Components/Footer';
const App = () => {
    return (
        <>
            <div className="container">
                <Header title="Contact us"/>
                <Content/>
                <Footer/>
            </div>
            
        </>
    );
};

export default App;

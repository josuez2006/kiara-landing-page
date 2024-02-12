import ClassStructure from './Components/ClassStructure';
import Conversion from './Components/Conversion';
import FirstFeature from './Components/FirstFeature';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import SecondFeature from './Components/SecondFeature';
import './styles/main.scss';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FirstFeature />
      <SecondFeature />
      <ClassStructure />
      <Conversion />
      <Footer />
    </>
  );
}

export default App;

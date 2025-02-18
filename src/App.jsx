import Navbar from "./Components/nav";
import Body from "./Components/mainBody";
import Footer from "./Components/footer";
import Form from "./Components/form";
import Value from "./Components/values";
import Services from "./Components/servicies";
import Skill from "./Components/skills";
import Industrie from "./Components/industries";

function App() {
  return (
    <>
      <div className="w-screen h-screen">
        <Navbar></Navbar>
        <Body></Body>
        <Value></Value>
        <Services></Services>
        <Skill></Skill>
        <Industrie></Industrie>
        <Form></Form>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;

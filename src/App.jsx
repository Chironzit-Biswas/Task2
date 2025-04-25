import {Navber} from "./components/Navber.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Achievements} from "./components/Achievements.jsx";
import {Testimonials} from "./components/Testimonials.jsx";
import {FAQ} from "./components/FAQ.jsx";
import {Home} from "./components/Home.jsx";

function App() {

  return (
    <div>
        {/*<BrowserRouter>*/}
        {/*    <Navber />*/}
        {/*         <Routes>*/}
        {/*             <Route path={"/features"} element={<Features />}></Route>*/}
        {/*             <Route path={"/achievements"} element={<Achievements/>}></Route>*/}
        {/*             <Route path={"/testimonials"} element={<Testimonials />}></Route>*/}
        {/*             <Route path={"/faq"} element={<FAQ/>}></Route>*/}
        {/*         </Routes>*/}
        {/*</BrowserRouter>*/}

        <Home></Home>

    </div>
  )
}

export default App

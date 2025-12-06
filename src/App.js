import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AppHeader from  './components/common/header';
import AppHome from './pages/home';
import AppShop from './pages/shop';
import AppContact from './pages/contact';
import AppFaq from './pages/faq';
import AppAbout from './pages/about';
import FooterWidget from './components/FooterWidget';
import FooterCopyright from './components/common/footerCopyright'; 

const { Header, Footer, Content } = Layout;


function App() {
  return (
    <div className="App">
<Layout>
  <Router> <Header><AppHeader/></Header>
  <Content><Routes>
    <Route path='/' element={<AppHome/>}/>
    <Route path='/about' element={<AppAbout/>}/>
    <Route path='/shop' element={<AppShop/>}/>
    <Route path='/contact' element={<AppContact/>}/>
    <Route path='/faq' element={<AppFaq/>}/>

    </Routes>
    </Content>
    </Router>
 
  <Footer>
    <FooterWidget/>
    <FooterCopyright/>

  </Footer>
  </Layout>    
    </div>
  );
}

export default App;

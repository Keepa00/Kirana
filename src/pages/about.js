import { Tabs } from 'antd';
import aboutBanner from '../Assets/images/aboutBanner.jpg'; 
function AppAbout() {
    return(
        <div className="block aboutPage"> 
            <div className="container">
                <h2>About</h2>
                <div className="bannerImage">
                    <img src ={aboutBanner} alt="banner"/>
                </div>
 <Tabs defaultActiveKey="1">
  <Tabs.TabPane tab="About" key="1">
    <p>Welcome to "Kirana" , "Kirana", your trusted online shopping destination.
         We are proudly owned and managed by Kirana Pasal Pvt. Ltd.,</p>
            </Tabs.TabPane>
            </Tabs>
                </div>
                </div>
    )
}
export default AppAbout;
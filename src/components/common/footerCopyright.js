import { BackTop } from 'antd';

import Payment from '../../Assets/images/payme.PNG'

function FooterCopyright() {
    return(
        <div className="FooterCopyright"> 
           <div className="container"> 
            <div className="Copyright">@2025 Created by Kirana</div>
            <div className="toTop"><img src={Payment} alt="Payment"/></div>
           </div>
           <BackTop/>
        </div>
    )
}

export default FooterCopyright;
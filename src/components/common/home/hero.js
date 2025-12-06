import { Col, Row } from 'antd';
import { Carousel } from 'antd';

import image1 from '../../../Assets/images/banner-img1.jpg'
import image2 from '../../../Assets/images/banner-img2.jpg'
import image3 from '../../../Assets/images/banner-img3.jpg'

function Hero (){
  return (
    <div className='heroBlock'>
      <Row gutter={24}> 

        {/* LEFT: Carousel */}
        <Col lg={16} md={14} sm={24}>
          <Carousel autoplay>
            <div><img src={image1} alt="banner 1" /></div>
            <div><img src={image2} alt="banner 2" /></div>
            <div><img src={image3} alt="banner 3" /></div>
          </Carousel>
        </Col>

        {/* RIGHT: Info Blocks */}
        <Col lg={8} md={10} sm={24}>

          <div className='infoBlock'>
            <div className='holder'>
              <div className='icon'>
                <i className="fa-solid fa-truck"></i></div>
              <div className='content'>
                <h4>Free Shipping & Return</h4>
                <p>Free Shipping on orders above Rs1000</p>
              </div>
            </div>
          </div>

          <div className='infoBlock'>
            <div className='holder'>
              <div className='icon'><i className="fa-solid fa-headset"></i></div>
              <div className='content'>
                <h4>Online Support 24/7</h4>
                <p>Helps you shopping easily.</p>
              </div>
            </div>
          </div>

          <div className='infoBlock'>
            <div className='holder'>
              <div className='icon'><i className="fa-solid fa-sack-dollar"></i></div>
              <div className='content'>
                <h4>Money Back Guarantee</h4>
                <p>100% money back Guarantee.</p>
              </div>
            </div>
          </div>

        </Col>
      </Row>
    </div>
  );
}

export default Hero;

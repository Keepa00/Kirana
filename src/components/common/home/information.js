import { Col, Row } from 'antd';
import bgImage1 from '../../../Assets/images/ad-img1.png';
import bgImage2 from '../../../Assets/images/ad-img2.png';

function Information() {
    return(
        <div className='block informationBlock'>
          <Row gutter={[24,24]}>
            <Col  xs={24}md={12}>
            <div className='holder' style={{
              backgroundImage :`url(${bgImage1})`,
              backgroundRepeat: 'no-repeat'
            }}>
              <h3>Everyday Essentials from </h3>
              <div className='price'> 100</div>
            </div>
            </Col>
            <Col xs={24} md={12}>
             <div className='holder'style={{
              backgroundImage :`url(${bgImage2})`,
              backgroundRepeat: 'no-repeat'
            }}>
              <h3>Delivery within 24 hrs</h3>
            <p> Free when you spend over Rs .1000</p>
            </div></Col>
          </Row>
        </div>
    )
}
export default Information;
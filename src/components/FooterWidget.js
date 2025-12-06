import React from "react";
import { Row, Col, List, Avatar,Tag} from "antd";
import img1 from "../Assets/images/img-footer3.jpg";
import img2 from "../Assets/images/img-footer1.jpg";

const featured = [
  {
    image: img1,
    title: "Breeze Toilet Tissue",
    price: "NRs 95",
    link: "https://www.google.com",
  },
  {
    image: img2,
    title: "Kellogs Crunchy Hazelnut",
    price: "NRs 220",
    link: "https://www.google.com",
  }
 
];

function FooterWidget() {
  return (
    <div
      style={{
        background: "#1c1c1c",
        padding: "50px 20px",
        color: "#f1f1f1",
        marginTop: "50px",
        borderTop: "1px solid rgba(255, 255, 255, 0.15)",
      }}
    >
      <div className="Container">
        <Row gutter={[24,24]}>
          <Col sm={12} md={8}>
          <h3 style={{ color: "#ffffff", marginBottom: "20px" }}>Featured</h3>

            <List
              itemLayout="horizontal"
              dataSource={featured}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      item.image ? <Avatar src={item.image} /> : <Avatar />
                    }
                    title={
                      <a style={{ color: "#ffb400" }} href={item.link}>
                        {item.title}
                      </a>
                    }
                    description={
  <span style={{ color: "#cccccc" }}>{item.price}</span>
}

                  />
                </List.Item>
              )}
            />
          </Col>

          <Col  sm={12} md={8}>
          <h3 style={{ color: "#ffffff", marginBottom: "20px" }}>Top Rated</h3>

            <List
              itemLayout="horizontal"
              dataSource={featured}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      item.image ? <Avatar src={item.image} /> : <Avatar />
                    }
                    title={
                      <a style={{ color: "#ffb400" }} href={item.link}>
                        {item.title}
                      </a>
                    }
                    description={
  <span style={{ color: "#cccccc" }}>{item.price}</span>
}

                  />
                </List.Item>
              )}
            />
          </Col>
          <Col  sm={12} md={8}>
          <div className="tags">
              <h3 style={{ color: "#ffffff", marginBottom: "20px" }}>Tags</h3>
                  <Tag><a
        href="https://github.com/ant-design/ant-design/issues/1862">Frozen</a></Tag>
                  <Tag closable>Kitchen</Tag>
                  <Tag closable>Chocolates</Tag>
          </div>
          </Col>
        </Row>
      </div>

      <h2 style={{ marginTop: "40px", color: "white" }}>Footer Widget</h2>
    </div>
  );
}

export default FooterWidget;

// import { Col, Row } from 'antd';

// import { Avatar, List } from 'antd';


// const featured= [
//   {
//     image: require('../Assets/images/img-footer3.jpg'),
//     title: 'Breeze Toilet Tissue ',
//     price:'NRs 95',
//     link: 'https://www.google.com'
//   },
//   {
//     image: require('../Assets/images/img-footer1.jpg'),
//     title: 'Kellogs Crunchy Hazelnut  ',
//     price:'NRs 220',
//     link: 'https://www.google.com'
//   },
//   {
//     title: 'Ant Design Title 3',
//   },
//   {
//     title: 'Ant Design Title 4',
//   },
// ];



// function FooterWidget() {
//   return (
//     <div className="footer-widget">     
// <div className='Container'>
//   <Row gutter={24}>
//     {/* featured */}
//     <Col md={6}>
//      <List
//     itemLayout="horizontal"
//     dataSource={featured}
//     renderItem={(item, index) => (
//       <List.Item>
//         <List.Item.Meta
//           avatar={<Avatar src={item.Image} />}
//           title={<a href={item.link}>{item.title}</a>}
//           description={item.cost}/>
//       </List.Item>
//     )}
//   />
//     </Col>
//        {/* Top Rated */}
//     <Col md={6}>
//     </Col>
//      {/* Tags */}
//     <Col md={6}>
//     </Col>
//   </Row>
// </div>

//       <h2>Footer Widget</h2>
//     </div>
//   );
// }
// export default FooterWidget;
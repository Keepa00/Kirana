import { Col, Row ,Button,Dropdown,Menu } from 'antd';


const products =[
    {
        key:'1',
        image:require('../Assets/images/corn.png'),
        Title:'Gyan Cornflakes',
        price:'NRs 199'
    },
    {
        key:'2',
        image:require('../Assets/images/img6.jpg'),
        Title:'Hot pot Chicken and Mushroom Noodles',   
        price:'NRs 180'
    },
     {
        key:'3',
        image:require('../Assets/images/img4.jpg'),
        Title:'Comfort intense fresh sky fabic conditioner Liquid ',  
        price:'NRs 210'
    },
     {
        key:'4',
        image:require('../Assets/images/img3.jpg'),
        Title:'Breeze Toilet Tissue Soft White 24 roll',  
        price:'NRs 80'
    },
    {
        key:'5',
        image:require('../Assets/images/img2.jpg'),
        Title:'Colgate Triple Action Toothpaste 100ml',  
        price:'NRs 120'
    },
    {
        key:'6',
        image:require('../Assets/images/img1.jpg'),
        Title:'Breeze Toilet Tissue Soft White 24 roll',  
        price:'NRs 80'
    }




    
]

const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        Featured
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
      Price: Low to High 
      </a>
    ),
    
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Price: High to Low 
      </a>
    ),
   
  },
 
    
];
function AppShop() {
    return(
          <div className="block products  ">
         <div className='container'> 
            <div className='titleholder'>
                <h2>Shop</h2>
                 <Dropdown menu={{ items }} placement="bottom" arrow>
        <Button>Sort By </Button>
      </Dropdown>
            </div>
       <Row gutter={20}>{
           products.map(products =>{
               return (
                   <Col lg={4}>
           <div className='Content'>
               <div className='image'>
                   <img src={products.image} alt="product "/>
                   </div>
                   <h3>{products.Title}</h3>
                   <div className='price'> {products.price}         </div>
                     <Button type="primary">Add to Shopping List </Button>
                   </div></Col>
               )
           })}
        
          
       </Row>
               </div></div>
    )
}
export default AppShop;
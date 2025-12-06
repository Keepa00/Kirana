import { Col, Row ,Button} from 'antd';
import Title from 'antd/es/skeleton/Title';

const products =[
    {
        key:'1',
        image:require('../../../Assets/images/corn.png'),
        Title:'Gyan Cornflakes',
        price:'NRs 199'
    },
    {
        key:'2',
        image:require('../../../Assets/images/img6.jpg'),
        Title:'Hot pot Chicken and Mushroom Noodles',   
        price:'NRs 180'
    },
     {
        key:'3',
        image:require('../../../Assets/images/img4.jpg'),
        Title:'Comfort intense fresh sky fabic conditioner Liquid ',  
        price:'NRs 210'
    },
     {
        key:'4',
        image:require('../../../Assets/images/img3.jpg'),
        Title:'Breeze Toilet Tissue Soft White 24 roll',  
        price:'NRs 80'
    },
    {
        key:'5',
        image:require('../../../Assets/images/img2.jpg'),
        Title:'Colgate Triple Action Toothpaste 100ml',  
        price:'NRs 120'
    },
    {
        key:'6',
        image:require('../../../Assets/images/img1.jpg'),
        Title:'Breeze Toilet Tissue Soft White 24 roll',  
        price:'NRs 80'
    }




    
]

function RecentProducts(){
    return (
        <div className="block products">
    
<h2>Recent Products</h2>
<Row gutter={[24,24]}>{
    products.map(products =>{
        return (
            <Col xs={ 24} sm={12} lg={4}>
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
        </div>
    )
}
export default RecentProducts;
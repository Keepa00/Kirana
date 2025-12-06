import { Col, Row ,Button} from 'antd';
import Title from 'antd/es/skeleton/Title';

const products =[
    {
        key:'1',
        image:require('../../../Assets/images/dhoni.PNG'),
        Title:'Dhoni Herbal Dishwash Tub ',
        saleprice:'NRs 65',
        price:'NRs 62'
    },
    {
        key:'2',
        image:require('../../../Assets/images/img8.jpg'),
        Title:'Kellogs Crunchy Nut hazelnut & Chocolate Granola ',
        saleprice:'NRs 270',   
        price:'NRs 210'
    },
     {
        key:'3',
        image:require('../../../Assets/images/diaper.PNG'),
        Title:'Cuddlers Pants Diapers Eco Pack Small',  
        saleprice:'NRs 1000',
        price:'NRs 875'
    },
     {
        key:'4',
        image:require('../../../Assets/images/kalo.PNG'),
        Title:'EverLocal Mix Simi Dana from Humla',  
        saleprice:'NRs 350',
        price:'NRs 270'
    }




    
]

function SaleProducts(){
    return (
        <div className="block products">
    
<h2>Sale Products</h2>
<Row gutter={[20,20]}>{
    products.map(products =>{
        return (
            <Col xs={24} sm={6} lg={4}>
    <div className='Content'>
        <div className='image'>
            <img src={products.image} alt="product "/>
            </div>
            <h3>{products.Title}</h3>

           <div className="price">
  {products.saleprice && (
    <span style={{ textDecoration: "line-through", color: "red", marginRight: "8px" }}>
      {products.saleprice}
    </span>
  )}

  <span style={{ fontWeight: "bold" }}>
    {products.price}
  </span>
</div>


            {/* <div className='price'> 
                <span className='SalePrice'> {products.saleprice}

                </span>
                {products.price}         </div> */}
              <Button type="primary">Add to Shopping List </Button>
            </div></Col>
        )
    })}
   
</Row>
        </div>
    )
}
export default SaleProducts;
import { Col, Row } from 'antd';
import Title from 'antd/es/skeleton/Title';


const productCategories =[
    {
        key:'1',
        image:require('../../../Assets/images/img16.jpg'),
        Title:'Fresh'
    },
    {
        key:'2',
        image:require('../../../Assets/images/img18.jpg'),
        Title:'Household'
    },{
        key:'3',
        image:require('../../../Assets/images/img15.jpg'),
        Title:'Frozen'
    },{
        key:'4',
        image:require('../../../Assets/images/img26.jpg'),
        Title : 'Christmas'
    },
    {
        key:'5',
        image:require('../../../Assets/images/img21.jpg'),
        Title:'Fruits'
    },
    {
        key:'6',
        image:require('../../../Assets/images/img20.jpg'),
        Title:'Bakery'
    },
     {
        key:'7',
        image:require('../../../Assets/images/baby.PNG'),
        Title:'Baby Products'
    },

    {
        key:'8',
        image:require('../../../Assets/images/img15.jpg'),
        Title:'Frozen'
    },
    {
        key:'9',
        image:require('../../../Assets/images/img23.jpg'),
        Title:'Icecream'
    },
     {
        key:'10',
        image:require('../../../Assets/images/rice..PNG'),
        Title:'Rice'
    },
     {
        key:'11',
        image:require('../../../Assets/images/korean.PNG'),
        Title:'Korean Beauty'
    },
     {
        key:'12',
        image:require('../../../Assets/images/img19.jpg'),
        Title:'Drinks'
    },


    
]

function ProductCategories(){
    return(
<div className='block productCategories'> 
<h2>Product Categories</h2> 

<Row gutter={[24,24]}>
    {
        productCategories.map(productCategory =>{
            return(
                  <Col  xs={12} sm={6} lg={4} key={productCategory.key}>
    <div className='Content'>
        <div className='image'>
            <img src={productCategory.image} alt={productCategory.Title}/>
        </div>
        <h3>{productCategory.Title}</h3>
    </div>
    </Col>
            )
        })
    }
  
</Row>
</div>
    )
}
export default ProductCategories;
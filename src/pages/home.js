import Hero from '../components/common/home/hero';
import RecentProducts from '../components/common/home/recentProducts';
import Information from   '../components/common/home/information';
import ProductCategories from '../components/common/home/productCategories';
import SaleProducts from '../components/common/home/saleProducts';      

function AppHome() {
    return(
        <div className='Container'> 
         <Hero/>
         <RecentProducts/>
         <Information/>
         <ProductCategories/> 
         <SaleProducts/>
         </div>
    )
}
export default AppHome;
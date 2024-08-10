import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductItem from './productItem.jsx'
import './mediaQuery.css'

const items=
[  
    { id:1,
    src:"./src/assets/confetti.png",
    name:"Confetti Steel Tumbler",
    price:"$40.000"
    },
    {  id:2,
        src:"./src/assets/suitcase.png",
        name:"Daisy Suitcase",
        price:"$175.000"
    },
    {  id:3,
        src:"./src/assets/faceMist.png",
        name:"Hydrating Face Mist",
        price:"$20.000"
    },
    {  id:4,
        src:"./src/assets/roast.png",
        name:"Dark Roast Issue #20",
        price:"$40.000"
    },
    {  id:5,
        src:"./src/assets/bag.png",
        name:"Vegan leather Bag",
        price:"$250.000"
    },
    
        {  id:6,
            src:"./src/assets/cap.png",
            name:"Pinstrips Snapback Cap",
            price:"$30.000"
        }
    ]
const features=[
    "./src/assets/designStudio.webp",
    "./src/assets/ds.webp",
    "./src/assets/harrison.webp",
    "./src/assets/minimalDimand.webp",
    "./src/assets/industry.webp",
    "./src/assets/minimalDimand.webp",
]
function Nav()
{ 
return(<nav>
    <div className="logo" >
        Neptune
    </div>
    <ul className="menu">
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>Contact</li>
        <li><i className="fa-solid fa-cart-shopping"></i></li>
    </ul>

</nav>);
 
}
function ProductListing()
{
    let productList=  items.map(item=>
        {
            return(
           <ProductItem src={item.src} name={item.name} price={item.price} key={item.key}/>);
        }
        )
    return (

        <>
        <h1 className="topic">Featured</h1>
        <div className="container">
            <div>Shop/featured-showing 1-6 of 8 result</div>
            <div > 
                <input type="search"  id="search" placeholder='Search and Filter'/>
            <label for="search"> <i className="fa-solid fa-magnifying-glass" ></i></label>

                <select aria-placeholder='Sort By'>
                <option disabled selected id="sort"> Sort by </option>
                <option> Recently added</option>
                <option> Price low-hight</option>
                <option>Price hight-low</option>
                <option>Name A-Z</option>
                <option>Name Z-A</option>
               </select>
            </div>

         </div>
         <div className="item_wrapper">
           {productList}
         </div>
         <p >1-2 next</p>

        </>
    )
}


function Featured()
{
    let logos=features.map(item=>
    {
        return(
          <img src={item} className="logos"/>
          )
    })
  return(
   <>
   <div style={{padding:"25px",textAlign:"center"}}>
    Feautred On
   </div>
   <div className="logo_wrapper">
        {
        logos
        }
    </div>
   </>
    
  )
}

function Footer()
{
   return(
    <>
   <footer>
     <h2>Neptune</h2>
     <div>
     <p>888 Griffiths Way, Mainland ML 12345</p>
     <p>(987) 654-3210 </p>
     <p>info@yoursite.com</p>
    </div>
     
     <div>
         <div className="logo_wrapper" style={{columnGap:"10px"}}>
         <i className="fa-brands fa-facebook"></i>
         <i className="fa-brands fa-instagram"></i>
         <i className="fa-brands fa-x-twitter"></i>
        </div>
        <p>Copyright 2023 Neptune Store. All Rights Reserved.</p>
    </div>
     <div className="info">
        <i className="fa-solid fa-w" ></i>
        <br/>
        Website Created & Hosted with Website.com Website Builder
     </div>
     </footer>
    </>)
 }

function App() {
    return(
    <>
    <Nav />
    <ProductListing/>
    <Featured/>
    <Footer/>

    </>
    
);
    
}

export default App

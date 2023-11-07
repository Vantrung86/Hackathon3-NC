import React, { useState } from 'react'
import './style.css'
export default function ShopingCart() {
    const [dataProduct, setDataProduct] = useState([
        {
            id: 1, 
            img: "https://images.unsplash.com/photo-1527960392543-80cd0fa46382?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvY2ElMjBjb2xhfGVufDB8fDB8fHww", 
            name: "coca",
            price: 50,
            quantity: 0
        },
        {
            id: 2, 
            img: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVwc2l8ZW58MHx8MHx8fDA%3D", 
            name: "pepsi",
            price: 70,
            quantity: 0
        },
        {
            id: 3, 
            img: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFudGF8ZW58MHx8MHx8fDA%3D", 
            name: "fanta",
            price: 30,
            quantity: 0
        },
        {
            id: 4, 
            img: "https://images.unsplash.com/photo-1600454309261-3dc9b7597637?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFuaCUyMG1pfGVufDB8fDB8fHww", 
            name: "Bánh mì",
            price: 90,
            quantity: 0
        },
        {
            id: 5, 
            img: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNvZnQlMjBkcmlua3xlbnwwfHwwfHx8MA%3D%3D", 
            name: "Schwepper",
            price: 40,
            quantity: 0
        },
        {
            id: 6, 
            img: "https://www.lottemart.vn/media/catalog/product/cache/0x0/8/9/8934588233074.jpg.webp", 
            name: "Sting",
            price: 20,
            quantity: 0
        },
        {
            id: 7, 
            img: "https://www.thp.com.vn/wp-content/uploads/2017/01/slider-n3.png", 
            name: "Number one",
            price: 10,
            quantity: 0
        },
        {
            id: 8, 
            img: "https://vietmartjp.com/wp-content/uploads/2021/05/bo-huc-redbull-nuoc-giai-khat-thuc-pham-viet-o-nhat-vietmart.jpg", 
            name: "Bò húc",
            price: 15,
            quantity: 0
        },
    
      ]);
//Tăng quantity
 const handleInterest=(index)=>{
    let result = [...dataProduct]
    result[index].quantity = result[index].quantity - 1
    setDataProduct(result)
 }
//Giảm quantity
 const handleAdd=(index)=>{
    let result = [...dataProduct]
    result[index].quantity = result[index].quantity + 1
    setDataProduct(result)
 }

 //Lấy cart
 let carts = dataProduct.filter((e)=>{
    return e.quantity != 0 
 })

 //Tổng tiền
 let sumMoney = carts.reduce((a,b)=>{
    return a+b.price*b.quantity
},0)

//reset cart
const handleResetCart = ()=>{
    let arr = [...dataProduct]
    for (let i = 0; i < arr.length; i++) {
        arr[i].quantity =0  
    }
    setDataProduct(arr)
}
  return (
    <>
        <div className="container">
            <div className="header">
                <p>To Spend: ${10000000000-sumMoney} You Have a lot of money</p>
            </div>
            <div className="main">
                {dataProduct.map((item, index)=>(
                    <div className="item" key={index}>
                        <div className="img">
                            <img src={item.img} alt="" />
                        </div>
                        <p className='name'><span>{item.name}</span><span>${item.price}</span></p>
                        <div className='button'>
                            <div >
                                <button onClick={() => handleInterest(index)} disabled={item.quantity <=0}>Interest</button>
                                <span>{item.quantity}</span>
                                <button className='add' onClick={() => handleAdd(index)}>Add</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="cart">
                <h3 style={{textAlign:"center", fontSize: "30px", padding:"30px 0"}}>Your Cart</h3>
                <ul>
                    {carts.map((e,i)=>(
                        <li key={i}>{e.name}
                            <span>{e.quantity}</span></li>
                    ))}
                  
                </ul>
                <div className='money'>
                       <h2>Total: ${sumMoney}</h2> 
                        <button onClick={handleResetCart}>reset Cart</button>
                </div>
            </div>

        </div>

    
    </>
  )
}

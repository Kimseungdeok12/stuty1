import { redirect } from "next/dist/server/api-utils/index.js"

let 장바구니 = ['Tomatoes', 'paste']

export default function Cart() {
  let 장바구니 = ['Tomatoes', 'paste']
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem 작명 = {장바구니[0]}/>
      <CartItem 작명 = {장바구니[1]}/>
      <Banner content = '롯데카드'/>
      <Banner content = '현대카드'/>
      <Button colors = 'blue'/>
    </div>
  )
} 

function CartItem(props) {
  return (
    <div className="cart-item">
        <p>{props.작명}</p>
        <p>$40</p>
        <p>1개</p>
      </div>
  )
}

function Banner(props) {
  return (
    <div>
      {props.content} 결제 행사중
    </div>
  )
}

function Button(props) {
  return (
    <div>
      <button style={{background: props.colors}}>버튼임</button>
    </div>
  )
}

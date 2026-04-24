// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let cartTotal = 0
      cartList.forEach(eachCartItem => {
        cartTotal += eachCartItem.price * eachCartItem.quantity
      })
      const cartCount = cartList.length
      return (
        <div className="cart-summary-container">
          <h1 className="cart-summary-heading">
            Order Total:<span className="cart-amount">Rs {cartTotal}/-</span>
          </h1>
          <p className="cart-summary-description">{cartCount} items in cart</p>
          <button className="checkout-btn">Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary

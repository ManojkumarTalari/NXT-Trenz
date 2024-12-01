import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalCost = cartList.reduce(
        (cost, eachItem) => cost + eachItem.price * eachItem.quantity,
        0,
      )
      return (
        <div className="cart-summary-container">
          <h1 className="order-total-heading">
            Order Total : <span className="cost">{totalCost}</span>
          </h1>
          <p className="cart-count">{cartList.length} Items in cart</p>
          <div className="check-out-btn-container">
            <button className="check-out-btn" type="button">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary

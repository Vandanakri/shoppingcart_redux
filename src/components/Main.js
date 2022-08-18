import Products from "./Products";
import { connect } from 'react-redux'

function Main(props) {
  return (
    <div className="main flex-80">
      <Products data={props.products} />
    </div>
  );
}


function mapStateToProps(state) {
  return {
    products : state.products,
  }
}

export default connect(mapStateToProps)(Main);
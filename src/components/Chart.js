import Order from "./Order";
import ProductDetails from "./ProductDetail";

const ProcessChart = () => {
  return (
    <div className="main__child-one__progressChart">
      <div className="progreesContainer">
        <ProductDetails />
        <Order />
      </div>
    </div>
  );
};

export default ProcessChart;

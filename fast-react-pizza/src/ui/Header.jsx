import { Link } from "react-router-dom";
import SearchOrder from "../feature/order/SearchOrder";
function Header() {
  return (
    <div>
      <Link to="/"> Fast React Co.</Link>
      <SearchOrder />
      <p>Amir</p>
    </div>
  );
}

export default Header;

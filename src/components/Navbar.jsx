import Filter from "./Filter";
import View from "./view";

const Navbar = ({ viewMode, setViewMode }) => {
  return (
    <div className="controls">
      <Filter />
      <View viewMode={viewMode} setViewMode={setViewMode} />
    </div>
  );
};
export default Navbar;

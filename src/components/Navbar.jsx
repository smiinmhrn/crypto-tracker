import SortDropDown from "./SortDropDown";
import View from "./view";

const Navbar = ({ viewMode, setViewMode, sortBy, setSortBy }) => {
  return (
    <div className="controls">
      <SortDropDown sortBy={sortBy} setSortBy={setSortBy} />
      <View viewMode={viewMode} setViewMode={setViewMode} />
    </div>
  );
};
export default Navbar;

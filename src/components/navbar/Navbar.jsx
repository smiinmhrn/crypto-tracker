import SortDropDown from "@/components/navbar/SortDropDown";
import View from "@/components/navbar/View";

const Navbar = ({ viewMode, setViewMode, sortBy, setSortBy }) => {
  return (
    <div className="controls">
      <SortDropDown sortBy={sortBy} setSortBy={setSortBy} />
      <View viewMode={viewMode} setViewMode={setViewMode} />
    </div>
  );
};
export default Navbar;

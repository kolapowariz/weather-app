import weatherLogo from "../assets/images/logo.svg";
import DropdownMenuCheckboxes from "./unitCheckBox";
// import Units from "./units";

export default function Dashboard() {
  return (
    <div className="w-[90%] mx-auto mt-2">
      <section className="flex justify-between items-center">
        <img src={weatherLogo} alt="Weather Logo" className="w-32 h-12" />
        {/* <Units /> */}
        <DropdownMenuCheckboxes />
      </section>
    </div>
  );
}
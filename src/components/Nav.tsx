
import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#F1F5F9] border border-amber-100">
      <div className="flex justify-between items-center gap-4 container mx-auto py-4 pl-3 pr-3">
        <img src={Logo} alt="" />
        <ul className="font-semibold flex items-center gap-4">
          <li className="text-[#DB2777]">Home</li>
          <li className="text-[#475569]">Technologies</li>
          <li className="text-[#475569]">Projrcts</li>
          <li className="text-[#475569]">About</li>
          <li className="text-[#475569]">Contact</li>
        </ul>
        <div className="font-semibold flex gap-3 items-center">
          <button className="text-[#475569] ">
            Sign in
          </button>
          <button className="text-[#475569] rounded-3xl bg-[#D91B7E] btn btn-outline btn-secondary">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
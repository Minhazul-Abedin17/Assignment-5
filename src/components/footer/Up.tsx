import Logo from "../../assets/logo-text.png";
const Up = () => {
  return (
    <div className="container space-y-2 px-13 py-3">
      <div className="flex justify-between items-center gap-6">
        <div>
          <img src={Logo} alt="" />
          <p className="text-[12px] text-[#64748B]">
            Curated tools, technologies, and resources for developers building
            <br />
            modern software.
          </p>
          <div className="flex justify-between items-center gap-2 mt-2">
            <ul className="text-[15px] text-[#64748B] flex justify-between items-center gap-3 font-semibold">
              <li>GitHub</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-1.5 p-2">
          <h1 className="font-bold text-[15px] text-[#0F172A]">PRODUCT</h1>
          <li className="list-none text-[12px] text-[#64748B]">Home</li>
          <li className="list-none text-[12px] text-[#64748B]">Technologies</li>
          <li className="list-none text-[12px] text-[#64748B]">Projects</li>
        </div>
        <div className="grid grid-cols-1 gap-1.5 p-2">
          <h1 className="font-bold  text-[15px] text-[#0F172A]">COMPANY</h1>
          <li className="list-none text-[12px] text-[#64748B]">About</li>
          <li className="list-none text-[12px] text-[#64748B]">Contact</li>
          <li className="list-none text-[12px] text-[#64748B]">Careers</li>
        </div>
        <div className="grid grid-cols-1 gap-1.5 p-2">
          <h1 className="list-none font-bold  text-[15px] text-[#0F172A]">
            LEGAL
          </h1>
          <li className="list-none text-[12px] text-[#64748B]">
            Privacy Policy
          </li>
          <li className="list-none text-[12px] text-[#64748B]">
            Terms of Service
          </li>
        </div>
      </div>
    </div>
  );
};
export default Up;

export default function Menu() {
  return (
    <div className="bg-blue-950 w-full">
      <img src="/CoinSpector_Logo.png" alt="CoinSpector Logo" />
      <div className="pl-5 pt-5 text-white flex-col">
        <div className="flex flex-row p-2 items-center">
          <img src="/home.png" alt="Home Logo" className="size-4 mx-2" />
          <a className="text-sm cursor-pointer"> Home</a>
        </div>
        <div className="flex flex-row p-2 items-center">
          <img
            src="/Image Crypto Node.png"
            alt="Image Crypto Logo"
            className="size-4 mx-2"
          />
          <a className="text-sm cursor-pointer"> Image Crypto Node</a>
        </div>
        <div className="flex flex-row p-2 items-center">
          <img
            src="/Transaction Analysis.png"
            alt="Home Logo"
            className="size-4 mx-2"
          />
          <a className="text-sm cursor-pointer"> Transaction Analysis</a>
        </div>
        <div className="flex flex-row p-2 items-center">
          <img
            src="/wallet Analysis.png"
            alt="Home Logo"
            className="size-4 mx-2"
          />
          <a className="text-sm cursor-pointer"> Wallet Analysis</a>
        </div>
        <div className="flex flex-row p-2 items-center">
          <img
            src="/Visualization.png"
            alt="Home Logo"
            className="size-4 mx-2"
          />
          <a className="text-sm cursor-pointer"> Visualization</a>
        </div>
        <div className="flex flex-row p-2 items-center">
          <img
            src="/Search Artifacts.png"
            alt="Home Logo"
            className="size-4 mx-2"
          />
          <a className="text-sm cursor-pointer"> Watch List</a>
        </div>
        <div className="flex flex-row p-2 items-center">
          <img src="/Reporting.png" alt="Home Logo" className="size-4 mx-2" />
          <a className="text-sm cursor-pointer"> Reporting</a>
        </div>
        <div className="flex flex-row p-2 items-center">
          <img src="/settings.png" alt="Home Logo" className="size-4 mx-2" />
          <a className="text-sm cursor-pointer"> Settings</a>
        </div>
        <div className="flex flex-row p-2 items-center">
          <img src="/home.png" alt="Home Logo" className="size-4 mx-2" />
          <a className="text-sm cursor-pointer"> Support</a>
        </div>
        <div className="flex flex-row p-2 items-center">
          <img src="/home.png" alt="Home Logo" className="size-4 mx-2" />
          <a className="text-sm cursor-pointer"> Chart Test</a>
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  return (
    <div className="bg-blue-950 w-full h-full ">
      <img src="/CoinSpector_Logo.png" alt="CoinSpector Logo" />
      <div className="pl-5 pt-5 text-white text-sm ">
        <div className="flex p-2 items-center">
          <img src="/home.png" alt="Home Logo" className="size-4 mx-2" />
          <a className="text-sm cursor-pointer"> Home</a>
        </div>
        <div className="flex p-2 items-center cursor-pointer">
          <img src="/Image Crypto Node.png" className="size-4 mx-2" />
          Image Crypto Node
        </div>
        <div className="flex p-2 items-center">
          <img src="/Transaction Analysis.png" className="size-4 mx-2" />{" "}
          Transaction Analysis
        </div>
        <div className="flex p-2 items-center">
          <img src="/wallet Analysis.png" className="size-4 mx-2" />
          Wallet Analysis
        </div>
        <div className="flex p-2 items-center">
          <img src="/Visualization.png" className="size-4 mx-2" /> Visualization
        </div>
        <div className="flex p-2 items-center">
          <img src="/Search Artifacts.png" className="size-4 mx-2" /> Watch List
        </div>
        <div className="flex p-2 items-center">
          <img src="/Reporting.png" className="size-4 mx-2" />
          Reporting
        </div>
        <div className="flex p-2 items-center">
          <img src="/settings.png" className="size-4 mx-2" />
          Settings
        </div>
        <div className="flex p-2 items-center">
          <img src="/home.png" className="size-4 mx-2" />
          Support
        </div>
        <div className="flex p-2 items-center">
          <img src="/home.png" className="size-4 mx-2" />
          Test
        </div>
      </div>
    </div>
  );
}

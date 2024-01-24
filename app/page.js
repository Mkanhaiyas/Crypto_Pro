// import Menu from "@/Components/Menu";
import WatchList from "@/Components/WatchList";
import datas from "@/data.json";

export default function Home() {
  return (
    <>
      <div className="flex flex-row bg-neutral-200 h-screen">
        <div className="bg-blue-950 h-full w-1/6">
          {/* <div className="w-full h-full"> */}
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
              <img
                src="/Reporting.png"
                alt="Home Logo"
                className="size-4 mx-2"
              />
              <a className="text-sm cursor-pointer"> Reporting</a>
            </div>
            <div className="flex flex-row p-2 items-center">
              <img
                src="/settings.png"
                alt="Home Logo"
                className="size-4 mx-2"
              />
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
          {/* </div> */}
        </div>
        <div className="w-5/6">
          <WatchList add="False" del="False" search="False" />

          <div>
            <table className="w-full">
              <thead className="h-14 bg-neutral-200 border border-gray-600 text-xs">
                <tr>
                  <th>Alert Name</th>
                  <th>Transaction Amt.</th>
                  <th>INR($=83)</th>
                  <th>TimeStamp</th>
                  <th>Category</th>
                  <th>Wallet</th>
                  <th>Transaction ID</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {datas.data.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{data.Alertname}</td>
                      <td>{data.Amount}</td>
                      <td>{data.INR}</td>
                      <td>{data.TimeStamp}</td>
                      <td>{data.Category}</td>
                      <td>{data.Wallet}</td>
                      <td>{data.TransId}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

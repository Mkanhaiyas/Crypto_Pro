import Menu from "@/Components/Menu";
import WatchList from "@/Components/WatchList";
import datas from "@/data.json";

export default function Home() {
  return (
    <>
      <div className="flex flex-row bg-neutral-200 h-screen">
        <div className="w-1/6">
          <Menu />
        </div>
        <div className="w-5/6">
          <WatchList add={false} del={false} search={false} />

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

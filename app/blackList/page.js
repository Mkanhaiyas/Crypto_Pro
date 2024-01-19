import Menu from "@/Components/Menu";
import WatchList from "@/Components/WatchList";
import datas from "@/data.json";

export default function blackList() {
  return (
    <div className="flex flex-row bg-neutral-200 h-screen">
      <div className="flex w-1/6">
        <Menu />
      </div>
      <div className="w-5/6">
        <div>
          <WatchList add="True" del="False" search="False" />
        </div>
        <div>
          <table className="w-full">
            <thead className="h-14 w-full bg-neutral-200 border border-gray-600 text-xs ">
              <tr>
                <th>Sr No.</th>
                <th>Wallet Address</th>
                <th>Coin</th>
                <th>Last Transfer</th>
                <th>Balance</th>
                <th>Transaction Value</th>
                <th>Category</th>
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
  );
}

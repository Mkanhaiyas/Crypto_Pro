import Menu from "@/Components/Menu";
// import WatchList from "@/Components/WatchList";
import Link from "next/link";
import datas from "@/data.json";

export default function blackList() {
  return (
    <>
      <div className="flex flex-row bg-neutral-200 h-screen">
        <div className="flex w-1/6">
          <Menu />
        </div>
        <div className="w-5/6">
          <div className="flex h-12 text-lg bg-neutral-200 items-center pl-2 font-semibold">
            WatchList
          </div>
          <div className="flex flex-row bg-white h-8 items-center justify-between px-4">
            <div className="flex flex-row items-center">
              <div className=" hover:bg-blue-400 hover:rounded-md cursor-pointer h-7 text-center px-2 mx-1">
                <Link href="/">Alert</Link>
              </div>
              <div className=" hover:bg-blue-400 hover:rounded-md cursor-pointer h-7 text-center px-2 mx-1">
                <Link href="/watchList">Watch-List</Link>
              </div>
              <div className=" hover:bg-blue-400 hover:rounded-md cursor-pointer h-7 text-center px-2 mx-1">
                <Link href="/blackList">Black-List</Link>
              </div>
            </div>
            <div className="flex flex-row h-7 items-center">
              <select
                name="#"
                className="flex w-40 h-7 p-0.5 mx-0.5 rounded-md pl-2 border-sky-800 border-2"
              >
                <option value="">All</option>
                <option value=""></option>
                <option value=""></option>
              </select>
              <select
                name="#"
                className="flex w-40 p-0.5 h-7 rounded-md pl-2 border-sky-800 border-2"
              >
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
              <div className="h-7 mx-0.5">
                <input
                  type="text"
                  className="flex w-80 h-7 p-0.5 rounded-md pl-7 border-sky-800 border-2"
                />
                <img
                  src="/search.png"
                  alt="Search"
                  className="flex relative -top-6 left-1"
                />
              </div>
            </div>
          </div>
          <div className="bg-neutral-200 min-h-12">
            <div className="flex flex-row justify-end mr-10">
              <button
                className={`rounded px-1 text-sm text-green-700 bg-green-300 border-green-700 border-2 my-3 mx-3`}
              >
                ADD
              </button>
              <button
                className={`rounded px-1 text-sm text-red-700 bg-red-300 border-red-700 border-2 my-3
                 hidden`}
              >
                DELETE
              </button>
            </div>
            <div className={` w-full justify-center items-cente pb-3 hidden`}>
              <input
                type="text"
                className="px-3 pb-3 h-7 rounded-l-md w-10/12 "
              />
              <button
                type="button"
                className="h-7 px-2 rounded-r-md border-2 border-sky-800 bg-white"
              >
                Search
              </button>
            </div>
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
    </>
  );
}

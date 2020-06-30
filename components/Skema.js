import { useState } from "react"

export default function Skema({ title, tableData }) {
  const [isVisible, setVisible] = useState(false)

  return (
    <div
      className="w-full p-4 my-4 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-md"
      onClick={() => setVisible(!isVisible)}
    >
      <div className="flex">
        <span className="nunito text-xl flex-1">{title}</span>
        <span className="nunito text-xl font-semibold">
          {isVisible ? "-" : "+"}
        </span>
      </div>

      {isVisible && (
        <>
          {tableData.map((table, index) => (
            <div className="mb-8 mt-4">
              <span className="font-semibold text-lg">
                {`${index + 1}. ${table.title}`}
              </span>
              <div
                className="block w-full bg-gray-400 my-2"
                style={{ height: `.125rem` }}
              ></div>
              <table className="open-sans text-md table-auto text-left">
                <thead>
                  <tr>
                    <th className="p-2">No.</th>
                    <th className="p-2">Kode Unit</th>
                    <th className="p-2">Judul Unit</th>
                  </tr>
                </thead>
                <tbody>
                  {table.items.map((row, index) => (
                    <tr>
                      <td className="p-2">{index + 1}. </td>
                      <td className="p-2">{row.kodeUnit}</td>
                      <td className="p-2">{row.judulUnit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </>
      )}
    </div>
  )
}

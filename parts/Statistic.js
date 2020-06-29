import CountUp from "react-countup"

function Line() {
  return (
    <div className="bg-orange h-16 rounded" style={{ width: `.125rem` }}></div>
  )
}

export default function Statistic() {
  return (
    <div className="p-8 bg-gray-100 nunito">
      <div className="flex items-center justify-center max-w-5xl m-auto">
        <div className="flex-1 text-center">
          <CountUp start={0} end={69} duration={4} className="text-5xl" />
          <span className="block text-lg">Staf dan Guru</span>
        </div>
        <Line />
        <div className="flex-1 text-center">
          <CountUp start={0} end={9} duration={4} className="text-5xl" />
          <span className="block text-lg">Kompetensi Keahlian</span>
        </div>
        <Line />
        <div className="flex-1 text-center">
          <CountUp start={0} end={3690} duration={4} className="text-5xl" />
          <span className="block text-lg">Siswa dan Siswi</span>
        </div>
        <Line />
        <div className="flex-1 text-center">
          <CountUp start={0} end={69} duration={4} className="text-5xl" />
          <span className="block text-lg">Ruang Kelas</span>
        </div>
      </div>
    </div>
  )
}

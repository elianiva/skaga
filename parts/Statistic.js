// i don't like seing dirty html
const Line = () => (
  <div
    className="hidden lg:block bg-orange h-16 rounded"
    style={{ width: `.125rem` }}
  ></div>
)

export default function Statistic() {
  return (
    <div className="p-8 bg-gray-100 nunito">
      <div className="lg:flex items-center justify-center max-w-5xl m-auto">
        <div className="flex-1 text-center my-4 lg:my-0">
          <span className="text-5xl">38</span>
          <span className="block text-lg">Staf dan Guru</span>
        </div>
        <Line />
        <div className="flex-1 text-center my-4 lg:my-0">
          <span className="text-5xl">9</span>
          <span className="block text-lg">Kompetensi Keahlian</span>
        </div>
        <Line />
        <div className="flex-1 text-center my-4 lg:my-0">
          <span className="text-5xl">2590</span>
          <span className="block text-lg">Siswa dan Siswi</span>
        </div>
        <Line />
        <div className="flex-1 text-center my-4 lg:my-0">
          <span className="text-5xl">32</span>
          <span className="block text-lg">Ruang Kelas</span>
        </div>
      </div>
      <small className="block text-center text-gray-600 mt-4">
        Data diatas bukanlah data asli
      </small>
    </div>
  )
}


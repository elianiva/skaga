export default function Title({ title }) {
  return (
    <div className="flex flex-col items-center mt-4 mb-8">
      <h1 className="text-3xl nunito">{title}</h1>
      <div className="h-1 w-40 bg-orange rounded"></div>
    </div>
  )
}

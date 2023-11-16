export default function Chip({ name, bgColor }: { name: string; bgColor: string }) {
  return (
    <div
      className={`relative inline-block select-none rounded-lg ${bgColor} bg- py-2 px-3.5 m-1 ml-0 text-xs uppercase text-white font-medium`}
    >
      <span className=" mt-px">{name}</span>
    </div>
  )
}

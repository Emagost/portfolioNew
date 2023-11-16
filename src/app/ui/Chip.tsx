export default function Chip({ name, color }: { name: string; color: string }) {
  return (
    <div
      className={`relative inline-block select-none rounded-lg bg-${color}-500 py-2 px-3.5 m-1 ml-0 text-xs uppercase text-white font-medium`}
    >
      <span className=" mt-px">{name}</span>
    </div>
  )
}

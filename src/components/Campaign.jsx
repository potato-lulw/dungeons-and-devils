

const Campaign = () => {
  return (
    <div className="mt-5">
        <div className="mb-2">
            
        <h1 className="font-bold text-3xl py-2 border-b-2 border-orange-500 w-fit mb-4">Campaigns</h1>
        <p className="text-gray-500">You are not in any campaign&apos;s right now</p>
        </div>

        <button className="border px-8 py-3 rounded-lg text-2xl hover:bg-gradient-to-r hover:from-[#533cb7] hover:to-[#01abc1] transition hover:text-white border-[#533cb7] hover:delay-200 hover:transition">
            Create a new campaign
        </button>
    </div>
  )
}

export default Campaign
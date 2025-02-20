'use client'

export default function WidgetV2() {
  return (
    <div className="w-full bg-gray-900 text-white flex items-center h-16 rounded-t-lg shadow-md">
        <table className='w-full'>
            <tr>
                <td rowSpan={2} className='border-2 w-36 h-fit'>
                    <div className='flex flex-row gap-2 items-center justify-center w-full py-2'>
                        <img src="/ethereum-eth-logo.png" alt="ETH" width={48} />
                        <span className='font-bold'>ETH</span>
                    </div>
                </td>
                <td className='border-2 text-left w-52'>
                    <div className='flex flex-row justify-between items-center px-2'>
                        <span className='text-gray-400 underline' title='The latest price of the token, denominated in WETH. The current market premium is 21%.'>Prize</span>
                        <span className='font-bold text-red-500'>0.001492</span>
                    </div>
                </td>
                <td className='border-2 text-left'>
                    <div className='flex flex-row justify-between items-center px-2'>
                        <span className='text-gray-400'>24 Vol</span>
                    </div>
                </td>
                <td className='border-2 text-left'>
                    <div className='flex flex-row justify-between items-center px-2'>
                        <span className='text-gray-400'>Market Cap</span>
                        <span className='text-white'>$49,956,637</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td className='border-2 text-left'>
                    <div className='flex flex-row justify-between items-center px-2'>
                        <span className='text-gray-400 underline' title='The floor price of the token, denominated in WETH.'>BLV</span>
                        <span className='font-bold text-yellow-400'>0.001231</span>
                    </div>
                </td>
                <td className='border-2 text-left'>
                    <div className='flex flex-row justify-between items-center px-2'>
                        <span className='text-gray-400 underline' title='A bump will raise the BLV (floor price) of this token. Bump progress is at 41%.'>Bump</span>
                    </div>
                </td>
                <td className='border-2 text-left'>
                    <div className='flex flex-row justify-between items-center px-2'>
                        <span className='text-gray-400 underline' title='The Afterburner performs leveraged buybacks of this token.'>After Burner</span>
                    </div>
                </td>
            </tr>
        </table>
    </div>
  )
}
'use client'

// import { useQuery } from '@tanstack/react-query'
// import { request, gql } from 'graphql-request'
// import { useEffect, useState } from 'react'
import { formatUnits } from 'viem'

/*
interface MatchOrderEvent {
    id: string
    is_market: boolean
    is_buy: boolean
    order_index: string
    tick: string
    timestamp: number
    user: string
    volume: string
}
*/

/*
    
interface MatchOrderEventResponse {
    matchOrderEvents: {
        items: MatchOrderEvent[];
    }
}

const matchOrderEvents = gql`
  query GetMatchOrders {
    matchOrderEvents {
      items {
        id
        is_buy
        is_market
        order_index
        tick
        timestamp
        user
        volume
      }
    }
  }
`;

const LIQUIDBOOK_GRAPHQL_URL = "https://indexer.liquidbook.alwaysbedream.dev/";

function calculatePrice(tick: string): number {
    return Math.pow(1.0001, parseInt(tick));
}

*/

const formatVolume = (value: bigint, decimals: number = 6) => {
  const formatted = formatUnits(value, decimals)
  const num = parseFloat(formatted)
  
  const config = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }
  
  if (num >= 1e9) {
    return (num / 1e9).toLocaleString('en-US', config) + 'B'
  } else if (num >= 1e6) {
    return (num / 1e6).toLocaleString('en-US', config) + 'M'
  } else if (num >= 1e3) {
    return (num / 1e3).toLocaleString('en-US', config) + 'K'
  } else {
    // More precise for smaller numbers
    return num.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 6
    })
  }
}

/*
interface MarketData {
  price: number | null
  priceChange24h: number | null
  priceChangePercent24h: number | null
  volume: bigint | null
}

const SkeletonLoader = () => (
  <div className="w-full h-16 bg-[#1B2028] rounded-t-lg animate-pulse flex items-center px-4 space-x-8">
    {[...Array(7)].map((_, i) => (
      <div key={i} className="h-8 bg-gray-700/50 rounded w-32" />
    ))}
  </div>
)
*/

export default function WidgetV2() {
  /*
  const [marketData, setMarketData] = useState<MarketData>({
    price: null,
    priceChange24h: null,
    priceChangePercent24h: null,
    volume: null
  })

  const { data, isLoading, error } = useQuery<MatchOrderEventResponse>({
    queryKey: ['matchOrderEvents'],
    queryFn: async () => {
      return await request(LIQUIDBOOK_GRAPHQL_URL, matchOrderEvents)
    },
    refetchInterval: 500,
    staleTime: 0,
  })

  useEffect(() => {
    if (data?.matchOrderEvents?.items) {
      const sortedItems = [...data.matchOrderEvents.items].sort(
        (a, b) => b.timestamp - a.timestamp
      )

      if (sortedItems.length > 0) {
        const currentTick = sortedItems[0]
        const currentPrice = calculatePrice(currentTick.tick.toString())
        
        const twentyFourHoursAgo = Date.now() - 24 * 60 * 60 * 1000
        const prevDayTick = sortedItems.find(tick => 
          tick.timestamp * 1000 <= twentyFourHoursAgo
        ) || sortedItems[sortedItems.length - 1]
        
        const prevDayPrice = calculatePrice(prevDayTick.tick.toString())
        const priceChange = currentPrice - prevDayPrice
        const priceChangePercent = (priceChange / prevDayPrice) * 100

        setMarketData({
          price: currentPrice,
          priceChange24h: priceChange,
          priceChangePercent24h: priceChangePercent,
          volume: sortedItems.reduce((sum, order) => {
            return sum + BigInt(order.volume)
          }, BigInt(0))
        })
      }
    }
  }, [data])
  */

  const formatNumber = (value: number | null, options: {
    decimals?: number
    prefix?: string
    suffix?: string
    compact?: boolean
  } = {}) => {
    if (value === null) return '...'
    const { decimals = 2, prefix = '', suffix = '', compact = false } = options

    const formatter = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
      notation: compact ? 'compact' : 'standard',
    })

    return `${prefix}${formatter.format(value)}${suffix}`
  }

//   if (isLoading || error) return <SkeletonLoader />

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
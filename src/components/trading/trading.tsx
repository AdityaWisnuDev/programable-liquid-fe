// import Chart from "./components/chart"
// import BuyAndSellComponent from "./components/buy-and-sell"
import ChartV2 from "./components/chartv2"
import TradingCard from "./components/trading-card"
// import Widget from "./components/widget"
import WidgetV2 from "./components/widgetv2"

const Trading = () => {
    return (
        <div className="grid grid-cols-[minmax(0,1fr)_400px] gap-[16px] px-[2px] py-[4px] pt-8">
            <div className="">
                <div className="shadow-lg rounded-lg">
                    {/* <Widget /> */}
                    <WidgetV2/>
                    {/* <Chart /> */}
                    <ChartV2/>
                </div>
                {/* <TradingPosition /> */}
            </div>

            <div className="space-y-2">
                {/* <BuyAndSellComponent /> */}
                <TradingCard/>
            </div>
        </div>
    )
}

export default Trading
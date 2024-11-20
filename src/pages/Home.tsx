import BarChartGraph from "../components/BarChart";
import LineChartGraph from "../components/LineChart"
import CardBox from '../components/Card';
import SearchBar from "@/components/SearchBar";


const cardData = [
    { amount: "$3.456K", caption: "Total View", percent: "0.43%" },
    { amount: "$45.2K", caption: "Total Profit", percent: "0.83%" },
    { amount: "2.450", caption: "Total Product", percent: "1.43%" },
    { amount: "3.456", caption: "Total Users", percent: "4.43%" },
];
export const Home = () => {
    return (
        <div className="bg-gray-100">
            <SearchBar />
            <div className='flex sm:flex-col xl:flex-row'>
                {cardData.map((data, index) => (
                    <CardBox
                        key={index}
                        amount={data.amount}
                        caption={data.caption}
                        percent={data.percent}
                    />
                ))}
            </div>
            <div className="flex justify-between">
                <LineChartGraph />
                <BarChartGraph />
            </div>
        </div>
    );
};

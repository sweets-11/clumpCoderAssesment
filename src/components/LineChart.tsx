import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
    desktop: {
        label: "Total Revenue",
        color: "hsl(var(--chart-1))",
    },
    mobile: {
        label: "Total Sales",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

const LineChartGraph = () => {
    return (
        <Card className="w-[700px] shadow-xl sm:mt-8 xl:mt-5 ml-2 p-2 mr-1">
            <div className="flex justify-between items-center">
                <CardHeader>
                    <CardTitle className="text-xl">Total Revenue</CardTitle>
                </CardHeader>
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger>Day</MenubarTrigger>
                        <MenubarTrigger>Week</MenubarTrigger>
                        <MenubarTrigger>Month</MenubarTrigger>
                    </MenubarMenu>
                </Menubar>
            </div>

            <CardContent>
                <ChartContainer config={chartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />

                        <Line
                            dataKey="desktop"
                            type="natural"
                            stroke="var(--color-desktop)"
                            strokeWidth={2}
                            dot={{
                                fill: "var(--color-desktop)",
                            }}
                            activeDot={{
                                r: 6,
                            }}
                        />

                        <Line
                            dataKey="mobile"
                            type="natural"
                            stroke="var(--color-mobile)"
                            strokeWidth={2}
                            dot={{
                                fill: "var(--color-mobile)",
                            }}
                            activeDot={{
                                r: 6,
                            }}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

export default LineChartGraph;

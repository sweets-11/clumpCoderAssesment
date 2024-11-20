import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


interface CardBoxProps {
    amount: string;
    caption: string;
    percent: string;
}

const CardBox: React.FC<CardBoxProps> = ({ amount, caption, percent }) => {
    return (
        <Card className="w-[270px] shadow-xl sm:mt-8 xl:mt-5 ml-2 p-2 mr-1">
            <CardHeader className="flex flex-col items-stretch space-y-0 p-0 sm:flex-row">
                <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
                    <div className="mb-3">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <CardTitle className='text-2xl font-bold'>{amount}</CardTitle>
                    <div className="flex justify-between">
                        <div className="text-sm">{caption}</div>
                        <div className="text-sm text-green-500">{percent}</div>
                    </div>
                </div>
            </CardHeader>

        </Card>
    );
};

export default CardBox;

import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

export default function StatusCard({
    color,
    icon,
    title,
    amount,
    percentage,
    percentageColor,
    percentageIcon,
    date,
}) {
    const getColorClasses = (color) => {
        const colorMap = {
            red: 'bg-red-500',
            blue: 'bg-blue-500',
            green: 'bg-green-500',
            yellow: 'bg-yellow-500',
            purple: 'bg-purple-500',
            pink: 'bg-pink-500',
            orange: 'bg-orange-500',
            teal: 'bg-teal-500',
        };
        return colorMap[color] || 'bg-gray-500';
    };

    const getPercentageColorClasses = (color) => {
        const colorMap = {
            red: 'text-red-500',
            blue: 'text-blue-500',
            green: 'text-green-500',
            yellow: 'text-yellow-500',
            purple: 'text-purple-500',
            pink: 'text-pink-500',
            orange: 'text-orange-500',
            teal: 'text-teal-500',
        };
        return colorMap[color] || 'text-gray-500';
    };

    return (
        <div className="px-4 mb-10">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(color)}`}>
                        <i className={`${icon} text-white text-2xl`}></i>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{amount}</div>
                    <p className="text-xs text-muted-foreground">{title}</p>
                </CardContent>
                <CardFooter className="pt-0">
                    <div className="flex items-center text-xs text-muted-foreground">
                        <i className={`${percentageIcon} ${getPercentageColorClasses(percentageColor)} mr-1`}></i>
                        <span className={getPercentageColorClasses(percentageColor)}>{percentage}</span>
                        <span className="ml-1">{date}</span>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}

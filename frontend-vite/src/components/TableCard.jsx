import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import Team1 from 'assets/img/team-1-800x800.jpg';
import Team2 from 'assets/img/team-2-800x800.jpg';
import Team3 from 'assets/img/team-3-800x800.jpg';
import Team4 from 'assets/img/team-4-470x470.png';

export default function CardTable() {
    return (
        <Card>
            <CardHeader className="bg-purple-600 text-white">
                <h2 className="text-2xl">Card Table</h2>
            </CardHeader>
            <CardContent>
                <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Project
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Budget
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Status
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Users
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Completion
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Argon Design System
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    $2,500 USD
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>{' '}
                                    pending
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <div className="flex">
                                        <div className="w-10 h-10 rounded-full border-2 border-white">
                                            <Avatar className="w-full h-full">
                                                <AvatarImage src={Team1} alt="..." />
                                            </Avatar>
                                        </div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                                            <Avatar className="w-full h-full">
                                                <AvatarImage src={Team2} alt="..." />
                                            </Avatar>
                                        </div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                                            <Avatar className="w-full h-full">
                                                <AvatarImage src={Team3} alt="..." />
                                            </Avatar>
                                        </div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                                            <Avatar className="w-full h-full">
                                                <AvatarImage src={Team4} alt="..." />
                                            </Avatar>
                                        </div>
                                    </div>
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <Progress value={60} className="bg-red-200" />
                                </th>
                            </tr>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Black Dashboard Sketch
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    $1,800 USD
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <i className="fas fa-circle fa-sm text-blue-gray-900 mr-2"></i>{' '}
                                    completed
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <div className="flex">
                                        <div className="w-10 h-10 rounded-full border-2 border-white">
                                            <Avatar className="w-full h-full">
                                                <AvatarImage src={Team1} alt="..." />
                                            </Avatar>
                                        </div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                                            <Avatar className="w-full h-full">
                                                <AvatarImage src={Team2} alt="..." />
                                            </Avatar>
                                        </div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                                            <Avatar className="w-full h-full">
                                                <AvatarImage src={Team3} alt="..." />
                                            </Avatar>
                                        </div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                                            <Avatar className="w-full h-full">
                                                <AvatarImage src={Team4} alt="..." />
                                            </Avatar>
                                        </div>
                                    </div>
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <Progress value={100} className="bg-green-200" />
                                </th>
                            </tr>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    React Material Dashboard
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    $4,400 USD
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <i className="fas fa-circle fa-sm text-teal-500 mr-2"></i>{' '}
                                    on schedule
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <div className="flex">
                                        <div className="w-10 h-10 rounded-full border-2 border-white">
                                            <Avatar className="w-full h-full">
                                                <AvatarImage src={Team1} alt="..." />
                                            </Avatar>
                                        </div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                                            <Avatar className="w-full h-full">
                                                <AvatarImage src={Team2} alt="..." />
                                            </Avatar>
                                        </div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                                            <Avatar className="w-full h-full">
                                                <AvatarImage src={Team3} alt="..." />
                                            </Avatar>
                                        </div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                                            <Avatar className="w-full h-full">
                                                <AvatarImage src={Team4} alt="..." />
                                            </Avatar>
                                        </div>
                                    </div>
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <Progress value={90} className="bg-teal-200" />
                                </th>
                            </tr>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    React Material Dashboard
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    $2,200 USD
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <i className="fas fa-circle fa-sm text-blue-gray-900 mr-2"></i>{' '}
                                    completed
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <div className="flex">
                                        <div className="w-10 h-10 rounded-full border-2 border-white">
                                            <Avatar className="w-full h-full">
                                                <AvatarImage src={Team1} alt="..." />
                                            </Avatar>
                                        </div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                                            <Avatar className="w-full h-full">
                                                <AvatarImage src={Team2} alt="..." />
                                            </Avatar>
                                        </div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                                            <Avatar className="w-full h-full">
                                                <AvatarImage src={Team3} alt="..." />
                                            </Avatar>
                                        </div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                                            <Avatar className="w-full h-full">
                                                <AvatarImage src={Team4} alt="..." />
                                            </Avatar>
                                        </div>
                                    </div>
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <Progress value={100} className="bg-green-200" />
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </CardContent>
        </Card>
    );
}

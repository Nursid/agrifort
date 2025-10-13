import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
// import ProfilePicture from 'assets/img/team-1-800x800.jpg';
import { useAuth } from '../contexts/AuthContext';

export default function AdminNavbar({ showSidebar, setShowSidebar }) {
    const location = useLocation().pathname;

    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        window.location.href = '/admin/login';
    };

    return (
        <nav className="bg-sky-500 md:ml-64 py-6 px-3">
            <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
                <div className="md:hidden">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:bg-sky-600"
                        onClick={() => setShowSidebar('left-0')}
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </Button>
                    <div
                        className={`absolute top-2 md:hidden ${
                            showSidebar === 'left-0' ? 'left-64' : '-left-64'
                        } z-50 transition-all duration-300`}
                    >
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-white hover:bg-sky-600"
                            onClick={() => setShowSidebar('-left-64')}
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </Button>
                    </div>
                </div>

                <div className="flex justify-between items-center w-full">
                    <h4 className="uppercase text-white text-sm tracking-wider mt-1">
                        {location === '/'
                            ? 'DASHBOARD'
                            : location.toUpperCase().replace('/', '')}
                    </h4>

                    <div className="flex items-center space-x-4">
                        <Input 
                            placeholder="Search" 
                            className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                        />

                        <div className="ml-6">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                        {/* <Avatar className="h-8 w-8">
                                            <AvatarImage src={ProfilePicture} alt="Profile" />
                                        </Avatar> */}
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56" align="end" forceMount>
                                    <DropdownMenuItem onClick={handleLogout}>
                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            className="w-full"
                                        >
                                            Logout
                                        </Button>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

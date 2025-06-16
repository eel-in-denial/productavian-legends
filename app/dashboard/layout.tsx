import SideNav from '@/app/ui/dashboard/sidenav';
import Header from '@/app/ui/dashboard/header';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:overflow-hidden">
        <div className='w-full'>
            <Header />
        </div>
        <div className='flex flex-row w-full h-full'>
            <div className="flex-none w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto">{children}</div>
        </div>
    </div>
  );
}
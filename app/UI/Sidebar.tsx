import Link from 'next/link'
import Image from "next/image";

export default function Sidebar() {

    const SidePage = ({ page = "", route = ""}) => {

        return (
            <Link
                href={route}
                className='text-black border border-gray-200 flex flex-row flex-nowrap gap-2 p-1 pr-4'
            >
                <Image
                    className='rounded-lg'
                    src="/cat-sandwich.svg"
                    alt="logo"
                    width={20}
                    height={20}
                    priority
                />
                <div>{page}</div>
            </Link>
            
        )
    }
    return (
        <div className='w-1/5 border border-grey-200'>
            <div className='p-2 flex flex-row-reverse'>
                <Link href="/">
                    <Image
                        className='rounded-lg'
                        src="/cat-sandwich.svg"
                        alt="logo"
                        width={50}
                        height={50}
                        priority
                    />
                </Link>
            </div>
            <div>
                <SidePage
                    page='Dashboard'
                    route='/dashboard'
                />
                <SidePage
                    page='Habits'
                    route='/habits'
                />
                <SidePage
                    page='To Do'
                    route='/todo'
                />
                <SidePage
                    page='Time Tracker'
                    route='/timetracker'
                />
                <SidePage
                    page='Goals'
                    route='/goals'
                />
            </div>
        </div>
    )
}
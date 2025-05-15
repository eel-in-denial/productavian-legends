import Link from 'next/link'

export default function Sidebar() {

    const SidePage = ({ page = "", route = ""}) => {

        return (
            <Link
                href={route}
                className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 text-white`}
            >
                <div>{page}</div>
            </Link>
        )
    }
    return (
        <div>
            <div className="bg-black">
                <div className='p-2 flex'>
                    <Link href="/">
                        Hello
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
        </div>
    )
}
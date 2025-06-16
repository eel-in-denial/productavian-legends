import Link from 'next/link';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <div className="flex w-full flex-row">
      <Link
        className=" flex h-15 items-end justify-start bg-blue-600 p-4 w-64"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          LOGO HERE
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:space-x-0 md:space-y-2">
        <div className="hidden h-full w-full grow bg-gray-50 md:block"></div>
      </div>
    </div>
  );
}

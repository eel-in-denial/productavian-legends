export default function Page() {
  return (
    <div className="w-full h-full bg-blue-200 flex flex-col">
        <div className="w-full h-40 bg-orange-200">

        </div>
        <div className="flex flex-row bg-red-200 w-full h-full">
            <div className="w-180 bg-yellow-200 p-2">
                <div className="flex w-full items-center justify-center">
                    <h1 className="text-2xl">Dailies</h1>
                </div>
            </div>
            <div className="w-full bg-green-200 p-2">
                <div className="flex w-full items-center justify-center">
                    <h1 className="text-2xl">
                        To Do
                    </h1>
                </div>
            </div>
        </div>
    </div>

    
);
}
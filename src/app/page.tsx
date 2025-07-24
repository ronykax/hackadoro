import { Button } from "@/components/ui/button";
import { Minus, Play, Plus, RotateCcw } from "lucide-react";

export default function Page() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-28 flex flex-col gap-4 bg-[#17171d]">
            <div className="w-full text-center rounded-2xl bg-white p-4 border-4 border-black/25 drop-shadow-2xl flex flex-col pb-10">
                <div className="flex gap-4 items-center justify-center">
                    <button className="p-4 border-4 border-orange-800 bg-orange-500 rounded-xl">
                        <Minus strokeWidth={4} color="white" />
                    </button>
                    <span className="font-display text-9xl text-[#17171d]">
                        19:58
                    </span>
                    <button className="p-4 border-4 border-blue-800 bg-blue-500 rounded-xl">
                        <Plus strokeWidth={4} color="white" />
                    </button>
                </div>
                <div className="flex gap-4 justify-center">
                    <button className="p-4 bg-green-500 rounded-xl border-4 border-green-800">
                        <Play color="white" strokeWidth={4} />
                    </button>
                    <button className="p-4 bg-red-500 rounded-xl border-4 border-red-800">
                        <RotateCcw color="white" strokeWidth={4} />
                    </button>
                </div>
            </div>
            <div className="w-full text-center border-4 border-[#a633d6] rounded-2xl p-4">
                {/* <span className="font-display text-9xl">19:58</span> */}
            </div>
        </div>
    );
}

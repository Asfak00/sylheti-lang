import {useState} from "react"
import {transpile} from "../transpiler/transpile"

export default function Playground() {
    const [code, setCode] = useState(
        `vaisab ow new nam = 'Asfak'\n\nikta amar bawandari greet(ke) {\n  dekaw cain('Areh, ' + ke + '!')\n}\n\ngreet(nam)`,
    )
    const [output, setOutput] = useState("Run code to see output")
    const [isRunning, setIsRunning] = useState(false)

    const runCode = () => {
        setIsRunning(true)
        try {
            const jsCode = transpile(code)
            const logs = []
            const originalLog = console.log
            console.log = (...args) => logs.push(args.join(" "))
            eval(jsCode)
            console.log = originalLog
            setOutput(logs.join("\n") || "(no return value)")
        } catch (err) {
            setOutput("❌ Error: " + err.message)
        }
        setTimeout(() => setIsRunning(false), 300)
    }

    return (
        <div id={'playground'} className="flex flex-col lg:flex-row w-full gap-4">
            <div className='flex-1'>
                <div className="bg-card border border-gray-200 rounded-xl bg-gray-900 overflow-hidden">
                    <div className="px-4 py-3 border-b flex items-center gap-3 border-gray-700">
                        <div className="flex items-center gap-1">
                            <div className="size-2 rounded-full bg-red-400"></div>
                            <div className="size-2 rounded-full bg-yellow-400"></div>
                            <div className="size-2 rounded-full bg-green-400"></div>
                        </div>
                        <span className="text-xs font-mono text-gray-300">main.syl</span>
                    </div>
                    <textarea
                        className="w-full h-80 p-4 text-white font-mono text-base focus:outline-none focus:ring-none focus:ring-ring resize-none"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        spellCheck="false"
                    />
                </div>
                <button
                    className="px-6 py-2.5 mt-3 w-full bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-accent transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center cursor-pointer gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={runCode}
                    disabled={isRunning}
                >
                    <span className="text-lg">▶️</span>
                    {isRunning ? "Running..." : "Run Code"}
                </button>
            </div>

            <div className="bg-card flex-1 border border-gray-200 bg-gray-900 rounded-xl overflow-hidden">
                <div className="px-4 py-3 border-b flex items-center gap-3 border-gray-700">
                    <div className="flex items-center gap-1">
                        <div className="size-2 rounded-full bg-red-400"></div>
                        <div className="size-2 rounded-full bg-yellow-400"></div>
                        <div className="size-2 rounded-full bg-green-400"></div>
                    </div>
                    <span className="text-xs font-mono text-gray-300">output</span>
                </div>
                <pre className="p-4 font-mono text-sm text-white min-h-[120px] whitespace-pre-wrap break-words">
                    {output}
                </pre>
            </div>
        </div>
    )
}

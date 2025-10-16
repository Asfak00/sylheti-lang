export default function Docs() {
    const sections = [
        {
            title: "Variables",
            items: [
                {
                    keyword: "vaisab ow new",
                    js: "const",
                    meaning: "Declare a variable",
                    example: 'vaisab ow new name = "Asfak Ahmed";'
                }
            ]
        },
        {
            title: "Output",
            items: [
                {
                    keyword: "dekaw cain",
                    js: "console.log",
                    meaning: "Print to console",
                    example: 'dekaw cain("Hello Sylheti vaisab hokkol");'
                }
            ]
        },
        {
            title: "Functions",
            items: [
                {
                    keyword: "ikta amar bawandari",
                    js: "function",
                    meaning: "Declare a function",
                    example: "ikta amar bawandari add(a, b) { ... }"
                },
                {
                    keyword: "okta pataw",
                    js: "return",
                    meaning: "Return value from function",
                    example: "okta pataw result;"
                }
            ]
        },
        {
            title: "Conditionals",
            items: [
                {
                    keyword: "jodi okta oy",
                    js: "if",
                    meaning: "Conditional statement",
                    example: "jodi okta oy (x > 5) { ... }"
                },
                {
                    keyword: "ar na oile",
                    js: "else",
                    meaning: "Else statement",
                    example: "ar na oile { ... }"
                }
            ]
        },
        {
            title: "Loops",
            items: [
                {
                    keyword: "lesri calaw",
                    js: "for",
                    meaning: "Loop statement",
                    example: "lesri calaw (i = 0; i < 10; i++) { ... }"
                }
            ]
        },
        {
            title: "Values",
            items: [
                {
                    keyword: "kissu nai",
                    js: "null",
                    meaning: "Null value",
                    example: "vaisab ow new value = kissu nai;"
                },
                {
                    keyword: "hasa",
                    js: "true",
                    meaning: "Boolean true",
                    example: "vaisab ow new isValid = hasa;"
                },
                {
                    keyword: "misa",
                    js: "false",
                    meaning: "Boolean false",
                    example: "vaisab ow new isValid = misa;"
                }
            ]
        }
    ];

    return (
        <section id={'documentation'} className="space-y-8">
            <h3 className="text-3xl lg:text-4xl font-bold mt-34 mb-10 text-center">
                Language <span className="text-[#004908]">Documentation</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sections.map((section, idx) => (
                    <div key={idx} className="bg-card border border-gray-200 h-max rounded-xl overflow-hidden">
                        <div className="bg-gray-200 text-gray-800 px-6 py-4">
                            <h3 className="text-lg font-semibold flex items-center gap-2">
                                {section.title}
                            </h3>
                        </div>
                        <div className="p-6 space-y-4">
                            {section.items.map((item, itemIdx) => (
                                <div key={itemIdx} className="space-y-2">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                        <code
                                            className="text-accent w-max font-mono text-sm font-semibold bg-muted px-2 py-1 rounded">
                                            {item.keyword}
                                        </code>
                                        <span className="text-muted-foreground text-xs">→</span>
                                        <code className="text-muted-foreground font-mono text-sm">
                                            {item.js}
                                        </code>
                                    </div>
                                    <p className="text-sm text-foreground">{item.meaning}</p>
                                    <div className="bg-gray-100 w-max rounded-sm py-1.5 px-3 mt-2">
                                        <code
                                            className="text-xs font-mono text-black block overflow-x-auto">
                                            {item.example}
                                        </code>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
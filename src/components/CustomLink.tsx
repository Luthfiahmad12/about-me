interface Rules {
    children: React.ReactNode
    to?: string
    className?: string
}

function Button({ children, className }: Rules) {
    return <button className={className}>{children}</button>
}

function Href({ children, to, className }: Rules) {
    return (
        <a
            className={`group block relative overflow-hidden rounded-lg ${
                className ? className : ''
            }`}
            href={to}
        >
            {children}
        </a>
    )
}

export { Button, Href }

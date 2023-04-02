import { useEffect, useRef, useState } from "react"
import ReactHammer from "react-hammerjs"
import { useWindowWidth } from "@react-hook/window-size"

type ComponentProps = {
    onTextChange?: (text: string) => void
    items: string[]
}

const wrapRange = (val, min, max) => {
    max += 1
    const valMin = val - min,
        maxMin = max - min,
        remainder = valMin % maxMin
    if (remainder < 0) return max + remainder
    return min + remainder
}

const Component = ({ onTextChange, items }: ComponentProps) => {
    const [index, setIndex] = useState(-items.length)
    const [transition, setTransition] = useState(true)
    const blockedRef = useRef(false)
    const width = useWindowWidth()
    const [windowWidth, setWindowWidth] = useState<number | null>(null)

    const wordIndex = wrapRange(-index + 1, 0, items.length - 1)
    useEffect(() => {
        setWindowWidth(width)
        onTextChange?.(items[wordIndex])
    }, [onTextChange, wordIndex])

    return (
        <div className="slider-container relative">
            <div
                className="w-1/3 h-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-lg"
                style={{
                    border: "1px solid #e194ff"
                }}
            />
            <ReactHammer
                onPan={(e) => {
                    e.preventDefault()
                    if (blockedRef.current) return
                    if (e.deltaX > 0) {
                        blockedRef.current = true
                        setIndex(index + 1)
                    } else if (e.deltaX < 0) {
                        blockedRef.current = true
                        setIndex(index - 1)
                    }
                }}
                onSwipeRight={() => {
                    if (blockedRef.current) return
                }}
            >
                <div
                    className={`flex ${
                        transition ? "transition-all" : "transition-none"
                    } duration-150 ease-in-out`}
                    onTransitionEnd={() => {
                        if (-index === items.length * 2) {
                            setTransition(false)
                            setIndex(-items.length)
                            setTimeout(() => {
                                setTransition(true)
                                blockedRef.current = false
                            }, 100)
                        } else if (index === 0) {
                            setTransition(false)
                            setIndex(-items.length)
                            setTimeout(() => {
                                setTransition(true)
                                blockedRef.current = false
                            }, 100)
                        } else blockedRef.current = false
                    }}
                    style={{
                        transform: `translateX(${index * (windowWidth! / 3)}px)`
                    }}
                >
                    {items.map((item, index) => (
                        <div key={index} className="slide">
                            {item}
                        </div>
                    ))}
                    {items.map((item, index) => (
                        <div key={index} className="slide">
                            {item}
                        </div>
                    ))}
                    {items.map((item, index) => (
                        <div key={index} className="slide">
                            {item}
                        </div>
                    ))}
                </div>
            </ReactHammer>
        </div>
    )
}
export default Component

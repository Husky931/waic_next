import { useState, useEffect } from "react"
import { useWindowWidth } from "@react-hook/window-size"
import { Box } from "@mui/material"
import Button from "@mui/material/Button"
import Link from "next/link"

function App() {
    const width = useWindowWidth()
    const [windowWidth, setWindowWidth] = useState<number | null>(null)

    useEffect(() => {
        setWindowWidth(width)
    }, [])

    return (
        <>
            {windowWidth! > 500 ? (
                <Box className="w-full min-h-screen flex flex-col justify-center items-center bg-black">
                    <div className="text-white">Please use mobile</div>
                </Box>
            ) : (
                <>
                    <Box className="w-full min-h-screen h-full flex flex-col justify-center items-center relative">
                        <img
                            src="/logo.png"
                            className="absolute top-10 m-auto left-0 right-0 z-10"
                        />
                        <img
                            src="/bg1@3x.png"
                            className="absolute top-0 left-0 object-cover h-full w-full z-[-1]"
                        />
                        <div className="absolute top-36">
                            <div className="text-[24px] text-[#FFFFFF]">
                                WAIC·AIGC 邀请函
                            </div>
                        </div>
                        <div className="absolute bottom-28">
                            <Link href="/step-1">
                                <Button
                                    variant="outlined"
                                    sx={{
                                        borderRadius: "20px",
                                        border: "1px solid",
                                        borderColor: "#FFFFFF",
                                        color: "#FFFFFF",
                                        minWidth: "auto",
                                        paddingX: "40px",
                                        paddingY: "8px",
                                        fontSize: "15px"
                                    }}
                                >
                                    点击进入
                                </Button>
                            </Link>
                        </div>
                    </Box>
                </>
            )}
        </>
    )
}

export default App

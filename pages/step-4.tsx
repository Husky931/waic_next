import { useState, useEffect } from "react"
import { Box, CircularProgress } from "@mui/material"
import axios from "axios"
import { useRouter } from "next/router"

function Step4() {
    const [image, updateImage] = useState()
    const [loading, updateLoading] = useState(false)

    const router = useRouter()
    const { prompt1, prompt2, prompt3, prompt4, prompt5, prompt6 } =
        router.query

    useEffect(() => {
        const combinedPrompt = [
            prompt1,
            prompt2,
            prompt3,
            prompt4,
            prompt5,
            prompt6
        ].join(" ")
        generate(combinedPrompt)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const generate = async (combinedPrompt: string) => {
        updateLoading(true)
        const result = await axios.get(
            `http://61.241.103.109:3332/?prompt=${encodeURIComponent(
                combinedPrompt
            )}`
        )

        updateImage(result.data)
        updateLoading(false)
    }

    return (
        <Box className="w-full min-h-screen flex flex-col justify-center items-center relative p-10">
            <img
                src="/logo.png"
                className="absolute top-10 m-auto left-0 right-0 z-10"
            />
            <img
                src="/bg3.png"
                className="absolute top-0 left-0 object-cover h-full w-full z-[-1]"
            />
            <Box className="w-full rounded-xl p-1 bg-[#ffffff] mt-[60px]">
                <Box
                    sx={{
                        // display: "inline",
                        width: "100%",
                        background:
                            "linear-gradient(to right, #4871FF, #D036FF, #FFB543)",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                        MozBackgroundClip: "text",
                        fontWeight: "bold",
                        fontSize: "1.5rem",
                        textAlign: "center"
                    }}
                >
                    WAIC·AIGC 邀请函
                </Box>
                <Box className="text-[#323232] text-[14px] w-full text-center">
                    生成未来，欢迎你加入2023WAIC 智囊团
                </Box>

                <Box className="image-holder w-full h-[302px] my-[18px] flex justify-center items-center">
                    {loading ? (
                        <CircularProgress size={200} />
                    ) : image ? (
                        <img
                            src={`data:image/png;base64,${image}`}
                            alt="Generated Image"
                        />
                    ) : null}
                </Box>
                <Box className="w-full flex justify-between px-4">
                    <Box className="flex-1">
                        <Box>
                            <Box className="flex items-end gap-x-1">
                                <Box
                                    sx={{
                                        display: "inline",
                                        background:
                                            "linear-gradient(to right, #4871FF, #D036FF, #FFB543)",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                        MozBackgroundClip: "text",
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        verticalAlign: "2px"
                                    }}
                                >
                                    邀请
                                </Box>
                                <Box className="text-[#656565] text-[11px] align-baseline">
                                    您的好友
                                </Box>
                            </Box>
                            <Box className="flex items-end">
                                <Box className="text-[#656565] text-[11px]">
                                    &nbsp; &nbsp; &nbsp; 一起加入 ，
                                </Box>
                                <Box
                                    sx={{
                                        // display: "inline",
                                        background:
                                            "linear-gradient(to right, #4871FF, #D036FF, #FFB543)",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                        MozBackgroundClip: "text",
                                        fontSize: "16px",
                                        fontWeight: "bold"
                                    }}
                                >
                                    AI智囊团
                                </Box>
                            </Box>
                            <Box className="text-[#656565] text-[11px] flex items-end mt-2">
                                &lt;&lt;点亮AI智慧，赢取AI奖品。
                            </Box>
                        </Box>
                    </Box>
                    <Box className="flex flex-col justify-center items-center">
                        <Box className="w-[70px] h-[70px]">
                            <img src="/qr-code.png" />
                        </Box>
                        <Box className="text-[#656565] text-[11px]">
                            扫码体验
                        </Box>
                    </Box>
                </Box>
            </Box>
            {/* <Link to="/step-5" className="mt-[50px]">
                <Button
                    variant="outlined"
                    sx={{
                        borderRadius: "20px",
                        color: "#FFFFFF",
                        minWidth: "auto",
                        paddingX: "72px",
                        border: "none",
                        paddingY: "10px",
                        fontSize: "15px",
                        background:
                            "linear-gradient(to right, #4871FF, #D036FF, #FFB543)"
                    }}
                >
                    保存及分享
                </Button>
            </Link> */}
        </Box>
    )
}

export default Step4

import { Box } from "@mui/material"
import Link from "next/link"
import { Button } from "@mui/material"

function Step2() {
    return (
        <Box className="w-full min-h-screen h-full flex flex-col justify-center items-center relative p-10">
            <img
                src="/logo.png"
                className="absolute top-10 m-auto left-0 right-0 z-10"
            />
            <img
                src="/bg3.png"
                className="absolute top-0 left-0 object-cover h-full w-full z-[-1]"
            />
            <Box className="w-full border-[1px] border-[#00114d] shadow-glow rounded-xl p-6 bg-[rgba(0,0,0,0.1)] mb-[50px]">
                <div className="text-[24px] text-[#FFFFFF] text-center mb-[10px]">
                    玩法说明
                </div>
                <Box className="mb-[30px]">
                    <Box
                        sx={{
                            display: "inline",
                            background:
                                "linear-gradient(to right, #4871FF, #D036FF, #FFB543)",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                            MozBackgroundClip: "text",
                            fontWeight: "bold",
                            fontSize: "1.5rem"
                        }}
                    >
                        STEP 1
                    </Box>
                    <Box className="text-[#FFFFFF] text-[14px] px-2">
                        从候选词库中不同维度提示词中，选择5个以内提示词。
                    </Box>
                </Box>
                <Box className="mb-[30px]">
                    <Box
                        sx={{
                            display: "inline",
                            background:
                                "linear-gradient(to right, #4871FF, #D036FF, #FFB543)",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                            MozBackgroundClip: "text",
                            fontWeight: "bold",
                            fontSize: "1.5rem"
                        }}
                    >
                        STEP 2
                    </Box>
                    <Box className="text-[#FFFFFF] text-[14px] px-2">
                        根据选择的提示词，组成创作提示。
                    </Box>
                </Box>
                <Box className="mb-[30px]">
                    <Box
                        sx={{
                            display: "inline",
                            background:
                                "linear-gradient(to right, #4871FF, #D036FF, #FFB543)",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                            MozBackgroundClip: "text",
                            fontWeight: "bold",
                            fontSize: "1.5rem"
                        }}
                    >
                        STEP 3
                    </Box>
                    <Box className="text-[#FFFFFF] text-[14px] px-2">
                        生成你的AI邀请函。
                    </Box>
                </Box>
                <Box className="mb-[30px]">
                    <Box
                        sx={{
                            display: "inline",
                            background:
                                "linear-gradient(to right, #4871FF, #D036FF, #FFB543)",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                            MozBackgroundClip: "text",
                            fontWeight: "bold",
                            fontSize: "1.5rem"
                        }}
                    >
                        STEP 4
                    </Box>
                    <Box className="text-[#FFFFFF] text-[14px] px-2">
                        完善注册，解锁AI智囊团身份，可分享邀请好友获取抽奖机会。
                    </Box>
                </Box>
            </Box>
            <div className="absolute bottom-16">
                <Link href="/step-3">
                    <Button
                        variant="outlined"
                        sx={{
                            borderRadius: "20px",
                            color: "#FFFFFF",
                            minWidth: "auto",
                            paddingX: "72px",
                            paddingY: "10px",
                            fontSize: "15px",
                            border: "none",
                            background:
                                "linear-gradient(to right, #4871FF, #D036FF, #FFB543)"
                        }}
                    >
                        点击进入
                    </Button>
                </Link>
            </div>
        </Box>
    )
}

export default Step2

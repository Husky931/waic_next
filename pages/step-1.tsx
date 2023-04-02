import { Box } from "@mui/material"
import Link from "next/link"
import { TextField, Checkbox, Button } from "@mui/material"
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked"
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked"

function Step1() {
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
            <Box className="w-full border-[1px] border-[#00114d] shadow-glow rounded-xl p-6 bg-[rgba(0,0,0,0.1)]">
                <div className="text-[24px] text-[#FFFFFF] text-center mb-[10px]">
                    完成智囊团认证
                </div>
                <div className="text-[12px] text-[#c0b7cd] text-center mb-[32px]">
                    欢迎来到WAIC线上平台，优先体验AI绘画智能。
                    更多精彩，敬请期待！
                </div>
                <TextField
                    fullWidth
                    placeholder="手机号"
                    sx={{
                        marginBottom: "16px",

                        "& .MuiOutlinedInput-root": {
                            borderRadius: "30px",
                            backgroundColor: "rgba(71, 25, 70, 0.4) !important",
                            "& fieldset": {
                                borderColor: "transparent"
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "#c0b7cd",
                                borderWidth: "1px",
                                boxShadow: "0 0 8px rgba(192, 183, 205, 0.6)"
                            }
                        },
                        "& .MuiInputBase-input": {
                            padding: "16px !important"
                        }
                    }}
                    InputLabelProps={{
                        sx: {
                            color: "#86a1d8"
                        }
                    }}
                    InputProps={{
                        sx: {
                            color: "#86a1d8"
                        }
                    }}
                />
                <TextField
                    fullWidth
                    placeholder="验证码"
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "30px",
                            backgroundColor: "rgba(71, 25, 70, 0.4) !important",
                            "& fieldset": {
                                borderColor: "transparent"
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "#c0b7cd",
                                borderWidth: "1px",
                                boxShadow: "0 0 8px rgba(192, 183, 205, 0.6)"
                            }
                        },
                        "& .MuiInputBase-input": {
                            padding: "16px !important"
                        }
                    }}
                    InputLabelProps={{
                        sx: {
                            color: "#FFFFFF"
                        }
                    }}
                    InputProps={{
                        sx: {
                            color: "#FFFFFF"
                        }
                    }}
                />
                <Box className="w-full text-[11px] flex justify-start items-center mb-[50px] mt-[2px]">
                    <Checkbox
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<RadioButtonCheckedIcon />}
                        sx={{
                            color: "#c0b7cd",
                            borderRadius: "50%",
                            "& .MuiSvgIcon-root": {
                                borderRadius: "50%",

                                backgroundColor: "rgba(0, 0, 0, 0.1)"
                            },
                            "& .Mui-checked .MuiSvgIcon-root": {
                                backgroundColor: "rgba(0, 0, 0, 0.1)"
                            },
                            "& .Mui-checked": {
                                color: "currentColor"
                            }
                        }}
                    />
                    <div className="text-[#c0b7cd]">
                        我已阅读并同意{" "}
                        <span className="text-[#FFC471] underline">
                            登录规则
                        </span>{" "}
                        和{" "}
                        <span className="text-[#FFC471] underline">
                            体验规则
                        </span>
                    </div>
                </Box>
                <Box
                    className="w-full"
                    sx={{ backgroundColor: "rgba(0, 0, 0, 0) !important" }}
                >
                    <Link href="/step-2">
                        <Button
                            variant="outlined"
                            sx={{
                                width: "100%",
                                fontSize: "15px",
                                color: "#FFFFFF"
                            }}
                        >
                            完成
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default Step1

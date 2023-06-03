import { EmotionCache } from "@emotion/cache"
import { NextPage } from "next"
import { AppProps } from "next/app"
import { ReactElement, ReactNode } from "react"
import { string } from "yup"

export interface initialForm {
    gender: string
    age: string
    BPMeds: string
    prevalentHyp: string
    diabetes: string
    sysBP: string
    diaBP: string
    BMI: string
    height: string
    weight: string
}

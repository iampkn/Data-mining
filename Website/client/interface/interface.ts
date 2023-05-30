import { EmotionCache } from "@emotion/cache"
import { NextPage } from "next"
import { AppProps } from "next/app"
import { ReactElement, ReactNode } from "react"
import { string } from "yup"

export interface initialForm {
    gender: string
    age: string
    education: string
    currentSmoker: string
    cigsPerDay: string
    BPMeds: string
    prevalentStroke: string
    prevalentHyp: string
    diabetes: string
    totChol: string
    sysBP: string
    diaBP: string
    BMI: string
    heartRate: string
    glucose: string
}

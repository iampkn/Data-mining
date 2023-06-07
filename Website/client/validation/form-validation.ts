import * as yup from "yup"

export const validationForm = yup.object().shape({
    gender: yup.string().required("Gender is required"),
    BPMeds: yup.string().required("BPMeds information is required"),

    prevalentHyp: yup
        .string()
        .required("Prevalent hypertension information is required"),
    diabetes: yup.string().required("Diabetes information is required"),
    glucose: yup
        .number()
        .required("Glucose information is required")
        .min(0, "Glucose must be greater than 0")
        .typeError("Glucose must be a number"),
    cigsPerDay: yup
        .number()
        .required("Cigarettes per day information is required")
        .min(0, "Cigarettes per day must be greater than 0")
        .typeError("Cigarettes per day must be a number"),
    prevalentStroke: yup.string().required("Prevalent stroke is required"),
})

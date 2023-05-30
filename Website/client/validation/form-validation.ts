import * as yup from "yup"

export const validationForm = yup.object().shape({
    gender: yup.string().required("Gender is required"),
    age: yup
        .number()
        .required("Age is required")
        .typeError("Value must be number")
        .min(0, "Min value is 0"),
    education: yup.string().required("Education is required"),
    currentSmoker: yup
        .number()
        .required("Current smoker information is required"),
    cigsPerDay: yup
        .number()
        .required("Cigarettes per day information is required")
        .typeError("Value must be number")
        .min(0, "Min value is 0"),
    BPMeds: yup.string().required("BPMeds information is required"),
    prevalentStroke: yup
        .string()
        .required("Prevalent stroke information is required"),
    prevalentHyp: yup
        .string()
        .required("Prevalent hypertension information is required"),
    diabetes: yup.string().required("Diabetes information is required"),
    totChol: yup
        .number()
        .required("Total cholesterol is required")
        .typeError("Value must be number")
        .min(0, "Min value is 0"),
    sysBP: yup
        .number()
        .required("Systolic blood pressure is required")
        .typeError("Value must be number")
        .min(0, "Min value is 0"),
    diaBP: yup
        .number()
        .required("Diastolic blood pressure is required")
        .typeError("Value must be number")
        .min(0, "Min value is 0"),
    BMI: yup
        .number()
        .required("BMI is required")
        .typeError("Value must be number")
        .min(0, "Min value is 0"),
    heartRate: yup
        .number()
        .required("Heart rate is required")
        .typeError("Value must be number")
        .min(0, "Min value is 0"),
    glucose: yup
        .number()
        .required("Glucose level is required")
        .typeError("Value must be number")
        .min(0, "Min value is 0"),
})

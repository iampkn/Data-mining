import * as yup from "yup"

export const validationForm = yup.object().shape({
    gender: yup.string().required("Gender is required"),
    age: yup
        .number()
        .required("Age is required")
        .typeError("Value must be number")
        .min(0, "Min value is 0"),
    BPMeds: yup.string().required("BPMeds information is required"),

    prevalentHyp: yup
        .string()
        .required("Prevalent hypertension information is required"),
    diabetes: yup.string().required("Diabetes information is required"),

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

    height: yup
        .number()
        .required("Height is required")
        .typeError("Value must be number")
        .min(0, "Min value is 0"),
    weight: yup
        .number()
        .required("Weight level is required")
        .typeError("Value must be number")
        .min(0, "Min value is 0"),
})

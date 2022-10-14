import * as yup from 'yup'

export const starshipSchema = yup.object().shape({
    name: yup.string(),
    model: yup.string(),
    manufacturer: yup.string(),
})

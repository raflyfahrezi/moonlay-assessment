import * as yup from 'yup'

export const starshipSchema = yup.object().shape({
    id: yup.string().required(),
    name: yup.string(),
    model: yup.string(),
    manufacturer: yup.string(),
})

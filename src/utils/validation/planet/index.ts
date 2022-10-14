import * as yup from 'yup'

export const planetSchema = yup.object().shape({
    id: yup.string().required(),
    name: yup.string(),
    population: yup.string(),
})

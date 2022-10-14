import * as yup from 'yup'

export const planetSchema = yup.object().shape({
    name: yup.string(),
    population: yup.string(),
})

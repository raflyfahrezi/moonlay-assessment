import * as yup from 'yup'

export const peopleSchema = yup.object().shape({
    name: yup.string(),
    birth_year: yup.string(),
    gender: yup.string(),
    homeworld: yup.string(),
    starships: yup.array(yup.string()),
})

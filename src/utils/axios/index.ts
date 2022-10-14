import axios from 'axios'
import env from 'react-dotenv'

import { AxiosProps } from './types'

export const axiosGet = (
    url: string,
    { withoutBaseURL, ...config }: AxiosProps
) => {
    return axios.get(url, {
        ...config,
        baseURL: withoutBaseURL ? '' : env.API_URL,
    })
}

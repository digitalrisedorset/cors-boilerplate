import Axios from "axios"
import { useState } from "react";
import { config } from '../config'
import { ErrorWrapper } from '../lib/error-handler'

type SuccessResponse = { success: string }

export const ApiCall: React.FC = () => {
    const [buttonResponse, setButtonResponse] = useState<string>('')
    const handleClick = async () => {
        let response
        try {
            response = await Axios.get<SuccessResponse>(`${config.backendUrl}:${config.backendPort}/my-protected-cors-route`)
            setButtonResponse(response.data.success)
            return response
        } catch (err: unknown) {
            const errorWrapper = new ErrorWrapper()
            const message = errorWrapper.extractError(err)

            setButtonResponse(message)

            return {
                statusCode: 500,
                body: message
            }
        }
    }

    return (
        <>
            <button onClick={handleClick}>
                call api route
            </button>
            {buttonResponse}
        </>
    )
}
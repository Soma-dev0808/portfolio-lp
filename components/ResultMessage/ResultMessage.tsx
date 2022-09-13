import React from 'react'
import { APIReturnType } from '../utils/utils'

const ResultMessage: React.FC<{ resultStat: APIReturnType }> = ({ resultStat }) => {
    return (
        <div>
            {resultStat}
        </div>
    )
}

export default ResultMessage
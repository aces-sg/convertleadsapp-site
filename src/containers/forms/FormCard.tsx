import { Box } from 'grommet'
import React from 'react'

export interface IProp {
    children: any,
    currentStep: any,
    prevFormStep: any
}

const FormCard = (props: IProp) => {
    const { children, currentStep, prevFormStep } = props

    return (
        <div>
            <Box align="center" width="100%" pad="medium">
                {currentStep < 3 && (
                    <>
                        {currentStep > 0 && (
                            <button
                                onClick={prevFormStep}
                                type="button"
                            >
                                back
                            </button>
                        )}

                        <span>Step {currentStep + 1} of 3</span>
                    </>
                )}
                {children}
            </Box>
        </div>
    )
}

export default FormCard
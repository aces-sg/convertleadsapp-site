import { Anchor, Box, Button, Form, FormField, MaskedInput, TextInput } from 'grommet';
import React from 'react'
import { useForm, useFormContext } from "react-hook-form";
import ACES from "../../assets/aces-favicon.svg"
import { IProp } from './PersonalInfo';

const CompanyInfo = (props: IProp) => {

    const { formStep, nextFormStep } = props

    const { handleSubmit, register } = useFormContext();

    const onSubmit = () => {
        nextFormStep();
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)} style={formStep === 1 ? { display: "block", width: "100%" } : { display: "none" }}>
            <Box align="center" width="100%" pad="medium">
                <Box
                    width="100%"
                    pad={{ horizontal: "medium" }}
                    justify="center"
                    align="center"
                    gap="xsmall"
                    margin={{ top: "small" }}
                >
                    <Anchor
                        icon={<ACES height="5vh" />}
                        label=""
                        style={{
                            fontSize: "25px",
                            fontFamily: "Helvetica",
                        }}
                    />
                </Box>
                <Box width="large">
                    <Box width="100%" align="center" gap="xsmall">
                        <Box gap="small" direction="column" width="100%" fill>
                            <FormField
                                label="Company"
                                name="company"
                                width="100%"
                                required={{ indicator: false }}
                                {...register('company')}
                            >
                                <TextInput
                                    id="company"
                                    name="company"
                                    placeholder="Company Name"
                                />
                            </FormField>
                        </Box>
                        <Button
                            id="confirm-button"
                            label="Next"
                            size="large"
                            primary
                            type="submit"
                            style={{ fontWeight: "bold", marginTop: "1em" }}
                        />
                    </Box>
                </Box>
            </Box>

        </Form>
    )
}

export default CompanyInfo
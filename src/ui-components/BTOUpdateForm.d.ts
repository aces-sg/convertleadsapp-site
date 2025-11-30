/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { BTO } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BTOUpdateFormInputValues = {
    name?: string;
    estate?: string;
    type?: string;
    floorPlanUrl?: string;
    brochureUrl?: string;
    model3DUrl?: string;
    status?: boolean;
    createdAt?: string;
    updatedAt?: string;
};
export declare type BTOUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    estate?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    floorPlanUrl?: ValidationFunction<string>;
    brochureUrl?: ValidationFunction<string>;
    model3DUrl?: ValidationFunction<string>;
    status?: ValidationFunction<boolean>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BTOUpdateFormOverridesProps = {
    BTOUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    estate?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    floorPlanUrl?: PrimitiveOverrideProps<TextFieldProps>;
    brochureUrl?: PrimitiveOverrideProps<TextFieldProps>;
    model3DUrl?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SwitchFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BTOUpdateFormProps = React.PropsWithChildren<{
    overrides?: BTOUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    bTO?: BTO;
    onSubmit?: (fields: BTOUpdateFormInputValues) => BTOUpdateFormInputValues;
    onSuccess?: (fields: BTOUpdateFormInputValues) => void;
    onError?: (fields: BTOUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BTOUpdateFormInputValues) => BTOUpdateFormInputValues;
    onValidate?: BTOUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BTOUpdateForm(props: BTOUpdateFormProps): React.ReactElement;

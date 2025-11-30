/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type BTOCreateFormInputValues = {
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
export declare type BTOCreateFormValidationValues = {
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
export declare type BTOCreateFormOverridesProps = {
    BTOCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type BTOCreateFormProps = React.PropsWithChildren<{
    overrides?: BTOCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BTOCreateFormInputValues) => BTOCreateFormInputValues;
    onSuccess?: (fields: BTOCreateFormInputValues) => void;
    onError?: (fields: BTOCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BTOCreateFormInputValues) => BTOCreateFormInputValues;
    onValidate?: BTOCreateFormValidationValues;
} & React.CSSProperties>;
export default function BTOCreateForm(props: BTOCreateFormProps): React.ReactElement;

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
export declare type ExternalUserCreateFormInputValues = {
    name?: string;
    title?: string;
    role?: string;
    company?: string;
    companyLogoUrl?: string;
    discipline?: string;
    registration_date?: string;
    registration_branch?: string;
    registration_number?: string;
    email?: string;
    linkedin?: string;
    telephone?: string;
    skills?: string[];
    imageUrl?: string;
    status?: boolean;
    createdAt?: string;
    updatedAt?: string;
};
export declare type ExternalUserCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    role?: ValidationFunction<string>;
    company?: ValidationFunction<string>;
    companyLogoUrl?: ValidationFunction<string>;
    discipline?: ValidationFunction<string>;
    registration_date?: ValidationFunction<string>;
    registration_branch?: ValidationFunction<string>;
    registration_number?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    linkedin?: ValidationFunction<string>;
    telephone?: ValidationFunction<string>;
    skills?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
    status?: ValidationFunction<boolean>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ExternalUserCreateFormOverridesProps = {
    ExternalUserCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    role?: PrimitiveOverrideProps<TextFieldProps>;
    company?: PrimitiveOverrideProps<TextFieldProps>;
    companyLogoUrl?: PrimitiveOverrideProps<TextFieldProps>;
    discipline?: PrimitiveOverrideProps<TextFieldProps>;
    registration_date?: PrimitiveOverrideProps<TextFieldProps>;
    registration_branch?: PrimitiveOverrideProps<TextFieldProps>;
    registration_number?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    linkedin?: PrimitiveOverrideProps<TextFieldProps>;
    telephone?: PrimitiveOverrideProps<TextFieldProps>;
    skills?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SwitchFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ExternalUserCreateFormProps = React.PropsWithChildren<{
    overrides?: ExternalUserCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ExternalUserCreateFormInputValues) => ExternalUserCreateFormInputValues;
    onSuccess?: (fields: ExternalUserCreateFormInputValues) => void;
    onError?: (fields: ExternalUserCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ExternalUserCreateFormInputValues) => ExternalUserCreateFormInputValues;
    onValidate?: ExternalUserCreateFormValidationValues;
} & React.CSSProperties>;
export default function ExternalUserCreateForm(props: ExternalUserCreateFormProps): React.ReactElement;

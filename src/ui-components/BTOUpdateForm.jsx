/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getBTO } from "../graphql/queries";
import { updateBTO } from "../graphql/mutations";
const client = generateClient();
export default function BTOUpdateForm(props) {
  const {
    id: idProp,
    bTO: bTOModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    estate: "",
    type: "",
    floorPlanUrl: "",
    brochureUrl: "",
    model3DUrl: "",
    status: false,
    createdAt: "",
    updatedAt: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [estate, setEstate] = React.useState(initialValues.estate);
  const [type, setType] = React.useState(initialValues.type);
  const [floorPlanUrl, setFloorPlanUrl] = React.useState(
    initialValues.floorPlanUrl
  );
  const [brochureUrl, setBrochureUrl] = React.useState(
    initialValues.brochureUrl
  );
  const [model3DUrl, setModel3DUrl] = React.useState(initialValues.model3DUrl);
  const [status, setStatus] = React.useState(initialValues.status);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = bTORecord
      ? { ...initialValues, ...bTORecord }
      : initialValues;
    setName(cleanValues.name);
    setEstate(cleanValues.estate);
    setType(cleanValues.type);
    setFloorPlanUrl(cleanValues.floorPlanUrl);
    setBrochureUrl(cleanValues.brochureUrl);
    setModel3DUrl(cleanValues.model3DUrl);
    setStatus(cleanValues.status);
    setCreatedAt(cleanValues.createdAt);
    setUpdatedAt(cleanValues.updatedAt);
    setErrors({});
  };
  const [bTORecord, setBTORecord] = React.useState(bTOModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getBTO.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getBTO
        : bTOModelProp;
      setBTORecord(record);
    };
    queryData();
  }, [idProp, bTOModelProp]);
  React.useEffect(resetStateValues, [bTORecord]);
  const validations = {
    name: [],
    estate: [],
    type: [],
    floorPlanUrl: [],
    brochureUrl: [],
    model3DUrl: [],
    status: [],
    createdAt: [],
    updatedAt: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name: name ?? null,
          estate: estate ?? null,
          type: type ?? null,
          floorPlanUrl: floorPlanUrl ?? null,
          brochureUrl: brochureUrl ?? null,
          model3DUrl: model3DUrl ?? null,
          status: status ?? null,
          createdAt: createdAt ?? null,
          updatedAt: updatedAt ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateBTO.replaceAll("__typename", ""),
            variables: {
              input: {
                id: bTORecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "BTOUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              estate,
              type,
              floorPlanUrl,
              brochureUrl,
              model3DUrl,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Estate"
        isRequired={false}
        isReadOnly={false}
        value={estate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              estate: value,
              type,
              floorPlanUrl,
              brochureUrl,
              model3DUrl,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.estate ?? value;
          }
          if (errors.estate?.hasError) {
            runValidationTasks("estate", value);
          }
          setEstate(value);
        }}
        onBlur={() => runValidationTasks("estate", estate)}
        errorMessage={errors.estate?.errorMessage}
        hasError={errors.estate?.hasError}
        {...getOverrideProps(overrides, "estate")}
      ></TextField>
      <TextField
        label="Type"
        isRequired={false}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              estate,
              type: value,
              floorPlanUrl,
              brochureUrl,
              model3DUrl,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextField>
      <TextField
        label="Floor plan url"
        isRequired={false}
        isReadOnly={false}
        value={floorPlanUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              estate,
              type,
              floorPlanUrl: value,
              brochureUrl,
              model3DUrl,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.floorPlanUrl ?? value;
          }
          if (errors.floorPlanUrl?.hasError) {
            runValidationTasks("floorPlanUrl", value);
          }
          setFloorPlanUrl(value);
        }}
        onBlur={() => runValidationTasks("floorPlanUrl", floorPlanUrl)}
        errorMessage={errors.floorPlanUrl?.errorMessage}
        hasError={errors.floorPlanUrl?.hasError}
        {...getOverrideProps(overrides, "floorPlanUrl")}
      ></TextField>
      <TextField
        label="Brochure url"
        isRequired={false}
        isReadOnly={false}
        value={brochureUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              estate,
              type,
              floorPlanUrl,
              brochureUrl: value,
              model3DUrl,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.brochureUrl ?? value;
          }
          if (errors.brochureUrl?.hasError) {
            runValidationTasks("brochureUrl", value);
          }
          setBrochureUrl(value);
        }}
        onBlur={() => runValidationTasks("brochureUrl", brochureUrl)}
        errorMessage={errors.brochureUrl?.errorMessage}
        hasError={errors.brochureUrl?.hasError}
        {...getOverrideProps(overrides, "brochureUrl")}
      ></TextField>
      <TextField
        label="Model3 d url"
        isRequired={false}
        isReadOnly={false}
        value={model3DUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              estate,
              type,
              floorPlanUrl,
              brochureUrl,
              model3DUrl: value,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.model3DUrl ?? value;
          }
          if (errors.model3DUrl?.hasError) {
            runValidationTasks("model3DUrl", value);
          }
          setModel3DUrl(value);
        }}
        onBlur={() => runValidationTasks("model3DUrl", model3DUrl)}
        errorMessage={errors.model3DUrl?.errorMessage}
        hasError={errors.model3DUrl?.hasError}
        {...getOverrideProps(overrides, "model3DUrl")}
      ></TextField>
      <SwitchField
        label="Status"
        defaultChecked={false}
        isDisabled={false}
        isChecked={status}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              estate,
              type,
              floorPlanUrl,
              brochureUrl,
              model3DUrl,
              status: value,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      ></SwitchField>
      <TextField
        label="Created at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={createdAt && convertToLocal(new Date(createdAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              name,
              estate,
              type,
              floorPlanUrl,
              brochureUrl,
              model3DUrl,
              status,
              createdAt: value,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
      ></TextField>
      <TextField
        label="Updated at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={updatedAt && convertToLocal(new Date(updatedAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              name,
              estate,
              type,
              floorPlanUrl,
              brochureUrl,
              model3DUrl,
              status,
              createdAt,
              updatedAt: value,
            };
            const result = onChange(modelFields);
            value = result?.updatedAt ?? value;
          }
          if (errors.updatedAt?.hasError) {
            runValidationTasks("updatedAt", value);
          }
          setUpdatedAt(value);
        }}
        onBlur={() => runValidationTasks("updatedAt", updatedAt)}
        errorMessage={errors.updatedAt?.errorMessage}
        hasError={errors.updatedAt?.hasError}
        {...getOverrideProps(overrides, "updatedAt")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || bTOModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || bTOModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

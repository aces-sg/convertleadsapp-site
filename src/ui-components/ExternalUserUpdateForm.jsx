/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getExternalUser } from "../graphql/queries";
import { updateExternalUser } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function ExternalUserUpdateForm(props) {
  const {
    id: idProp,
    externalUser: externalUserModelProp,
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
    title: "",
    role: "",
    company: "",
    companyLogoUrl: "",
    discipline: "",
    registration_date: "",
    registration_branch: "",
    registration_number: "",
    email: "",
    linkedin: "",
    telephone: "",
    skills: [],
    imageUrl: "",
    status: false,
    createdAt: "",
    updatedAt: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [title, setTitle] = React.useState(initialValues.title);
  const [role, setRole] = React.useState(initialValues.role);
  const [company, setCompany] = React.useState(initialValues.company);
  const [companyLogoUrl, setCompanyLogoUrl] = React.useState(
    initialValues.companyLogoUrl
  );
  const [discipline, setDiscipline] = React.useState(initialValues.discipline);
  const [registration_date, setRegistration_date] = React.useState(
    initialValues.registration_date
  );
  const [registration_branch, setRegistration_branch] = React.useState(
    initialValues.registration_branch
  );
  const [registration_number, setRegistration_number] = React.useState(
    initialValues.registration_number
  );
  const [email, setEmail] = React.useState(initialValues.email);
  const [linkedin, setLinkedin] = React.useState(initialValues.linkedin);
  const [telephone, setTelephone] = React.useState(initialValues.telephone);
  const [skills, setSkills] = React.useState(initialValues.skills);
  const [imageUrl, setImageUrl] = React.useState(initialValues.imageUrl);
  const [status, setStatus] = React.useState(initialValues.status);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = externalUserRecord
      ? { ...initialValues, ...externalUserRecord }
      : initialValues;
    setName(cleanValues.name);
    setTitle(cleanValues.title);
    setRole(cleanValues.role);
    setCompany(cleanValues.company);
    setCompanyLogoUrl(cleanValues.companyLogoUrl);
    setDiscipline(cleanValues.discipline);
    setRegistration_date(cleanValues.registration_date);
    setRegistration_branch(cleanValues.registration_branch);
    setRegistration_number(cleanValues.registration_number);
    setEmail(cleanValues.email);
    setLinkedin(cleanValues.linkedin);
    setTelephone(cleanValues.telephone);
    setSkills(cleanValues.skills ?? []);
    setCurrentSkillsValue("");
    setImageUrl(cleanValues.imageUrl);
    setStatus(cleanValues.status);
    setCreatedAt(cleanValues.createdAt);
    setUpdatedAt(cleanValues.updatedAt);
    setErrors({});
  };
  const [externalUserRecord, setExternalUserRecord] = React.useState(
    externalUserModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getExternalUser.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getExternalUser
        : externalUserModelProp;
      setExternalUserRecord(record);
    };
    queryData();
  }, [idProp, externalUserModelProp]);
  React.useEffect(resetStateValues, [externalUserRecord]);
  const [currentSkillsValue, setCurrentSkillsValue] = React.useState("");
  const skillsRef = React.createRef();
  const validations = {
    name: [{ type: "Required" }],
    title: [],
    role: [{ type: "Required" }],
    company: [],
    companyLogoUrl: [],
    discipline: [],
    registration_date: [],
    registration_branch: [],
    registration_number: [],
    email: [{ type: "Required" }, { type: "Email" }],
    linkedin: [],
    telephone: [],
    skills: [],
    imageUrl: [],
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
          name,
          title: title ?? null,
          role,
          company: company ?? null,
          companyLogoUrl: companyLogoUrl ?? null,
          discipline: discipline ?? null,
          registration_date: registration_date ?? null,
          registration_branch: registration_branch ?? null,
          registration_number: registration_number ?? null,
          email,
          linkedin: linkedin ?? null,
          telephone: telephone ?? null,
          skills: skills ?? null,
          imageUrl: imageUrl ?? null,
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
            query: updateExternalUser.replaceAll("__typename", ""),
            variables: {
              input: {
                id: externalUserRecord.id,
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
      {...getOverrideProps(overrides, "ExternalUserUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              title,
              role,
              company,
              companyLogoUrl,
              discipline,
              registration_date,
              registration_branch,
              registration_number,
              email,
              linkedin,
              telephone,
              skills,
              imageUrl,
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
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              title: value,
              role,
              company,
              companyLogoUrl,
              discipline,
              registration_date,
              registration_branch,
              registration_number,
              email,
              linkedin,
              telephone,
              skills,
              imageUrl,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Role"
        isRequired={true}
        isReadOnly={false}
        value={role}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              title,
              role: value,
              company,
              companyLogoUrl,
              discipline,
              registration_date,
              registration_branch,
              registration_number,
              email,
              linkedin,
              telephone,
              skills,
              imageUrl,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.role ?? value;
          }
          if (errors.role?.hasError) {
            runValidationTasks("role", value);
          }
          setRole(value);
        }}
        onBlur={() => runValidationTasks("role", role)}
        errorMessage={errors.role?.errorMessage}
        hasError={errors.role?.hasError}
        {...getOverrideProps(overrides, "role")}
      ></TextField>
      <TextField
        label="Company"
        isRequired={false}
        isReadOnly={false}
        value={company}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              title,
              role,
              company: value,
              companyLogoUrl,
              discipline,
              registration_date,
              registration_branch,
              registration_number,
              email,
              linkedin,
              telephone,
              skills,
              imageUrl,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.company ?? value;
          }
          if (errors.company?.hasError) {
            runValidationTasks("company", value);
          }
          setCompany(value);
        }}
        onBlur={() => runValidationTasks("company", company)}
        errorMessage={errors.company?.errorMessage}
        hasError={errors.company?.hasError}
        {...getOverrideProps(overrides, "company")}
      ></TextField>
      <TextField
        label="Company logo url"
        isRequired={false}
        isReadOnly={false}
        value={companyLogoUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              title,
              role,
              company,
              companyLogoUrl: value,
              discipline,
              registration_date,
              registration_branch,
              registration_number,
              email,
              linkedin,
              telephone,
              skills,
              imageUrl,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.companyLogoUrl ?? value;
          }
          if (errors.companyLogoUrl?.hasError) {
            runValidationTasks("companyLogoUrl", value);
          }
          setCompanyLogoUrl(value);
        }}
        onBlur={() => runValidationTasks("companyLogoUrl", companyLogoUrl)}
        errorMessage={errors.companyLogoUrl?.errorMessage}
        hasError={errors.companyLogoUrl?.hasError}
        {...getOverrideProps(overrides, "companyLogoUrl")}
      ></TextField>
      <TextField
        label="Discipline"
        isRequired={false}
        isReadOnly={false}
        value={discipline}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              title,
              role,
              company,
              companyLogoUrl,
              discipline: value,
              registration_date,
              registration_branch,
              registration_number,
              email,
              linkedin,
              telephone,
              skills,
              imageUrl,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.discipline ?? value;
          }
          if (errors.discipline?.hasError) {
            runValidationTasks("discipline", value);
          }
          setDiscipline(value);
        }}
        onBlur={() => runValidationTasks("discipline", discipline)}
        errorMessage={errors.discipline?.errorMessage}
        hasError={errors.discipline?.hasError}
        {...getOverrideProps(overrides, "discipline")}
      ></TextField>
      <TextField
        label="Registration date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={registration_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              title,
              role,
              company,
              companyLogoUrl,
              discipline,
              registration_date: value,
              registration_branch,
              registration_number,
              email,
              linkedin,
              telephone,
              skills,
              imageUrl,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.registration_date ?? value;
          }
          if (errors.registration_date?.hasError) {
            runValidationTasks("registration_date", value);
          }
          setRegistration_date(value);
        }}
        onBlur={() =>
          runValidationTasks("registration_date", registration_date)
        }
        errorMessage={errors.registration_date?.errorMessage}
        hasError={errors.registration_date?.hasError}
        {...getOverrideProps(overrides, "registration_date")}
      ></TextField>
      <TextField
        label="Registration branch"
        isRequired={false}
        isReadOnly={false}
        value={registration_branch}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              title,
              role,
              company,
              companyLogoUrl,
              discipline,
              registration_date,
              registration_branch: value,
              registration_number,
              email,
              linkedin,
              telephone,
              skills,
              imageUrl,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.registration_branch ?? value;
          }
          if (errors.registration_branch?.hasError) {
            runValidationTasks("registration_branch", value);
          }
          setRegistration_branch(value);
        }}
        onBlur={() =>
          runValidationTasks("registration_branch", registration_branch)
        }
        errorMessage={errors.registration_branch?.errorMessage}
        hasError={errors.registration_branch?.hasError}
        {...getOverrideProps(overrides, "registration_branch")}
      ></TextField>
      <TextField
        label="Registration number"
        isRequired={false}
        isReadOnly={false}
        value={registration_number}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              title,
              role,
              company,
              companyLogoUrl,
              discipline,
              registration_date,
              registration_branch,
              registration_number: value,
              email,
              linkedin,
              telephone,
              skills,
              imageUrl,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.registration_number ?? value;
          }
          if (errors.registration_number?.hasError) {
            runValidationTasks("registration_number", value);
          }
          setRegistration_number(value);
        }}
        onBlur={() =>
          runValidationTasks("registration_number", registration_number)
        }
        errorMessage={errors.registration_number?.errorMessage}
        hasError={errors.registration_number?.hasError}
        {...getOverrideProps(overrides, "registration_number")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              title,
              role,
              company,
              companyLogoUrl,
              discipline,
              registration_date,
              registration_branch,
              registration_number,
              email: value,
              linkedin,
              telephone,
              skills,
              imageUrl,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Linkedin"
        isRequired={false}
        isReadOnly={false}
        value={linkedin}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              title,
              role,
              company,
              companyLogoUrl,
              discipline,
              registration_date,
              registration_branch,
              registration_number,
              email,
              linkedin: value,
              telephone,
              skills,
              imageUrl,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.linkedin ?? value;
          }
          if (errors.linkedin?.hasError) {
            runValidationTasks("linkedin", value);
          }
          setLinkedin(value);
        }}
        onBlur={() => runValidationTasks("linkedin", linkedin)}
        errorMessage={errors.linkedin?.errorMessage}
        hasError={errors.linkedin?.hasError}
        {...getOverrideProps(overrides, "linkedin")}
      ></TextField>
      <TextField
        label="Telephone"
        isRequired={false}
        isReadOnly={false}
        value={telephone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              title,
              role,
              company,
              companyLogoUrl,
              discipline,
              registration_date,
              registration_branch,
              registration_number,
              email,
              linkedin,
              telephone: value,
              skills,
              imageUrl,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.telephone ?? value;
          }
          if (errors.telephone?.hasError) {
            runValidationTasks("telephone", value);
          }
          setTelephone(value);
        }}
        onBlur={() => runValidationTasks("telephone", telephone)}
        errorMessage={errors.telephone?.errorMessage}
        hasError={errors.telephone?.hasError}
        {...getOverrideProps(overrides, "telephone")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              title,
              role,
              company,
              companyLogoUrl,
              discipline,
              registration_date,
              registration_branch,
              registration_number,
              email,
              linkedin,
              telephone,
              skills: values,
              imageUrl,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            values = result?.skills ?? values;
          }
          setSkills(values);
          setCurrentSkillsValue("");
        }}
        currentFieldValue={currentSkillsValue}
        label={"Skills"}
        items={skills}
        hasError={errors?.skills?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("skills", currentSkillsValue)
        }
        errorMessage={errors?.skills?.errorMessage}
        setFieldValue={setCurrentSkillsValue}
        inputFieldRef={skillsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Skills"
          isRequired={false}
          isReadOnly={false}
          value={currentSkillsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.skills?.hasError) {
              runValidationTasks("skills", value);
            }
            setCurrentSkillsValue(value);
          }}
          onBlur={() => runValidationTasks("skills", currentSkillsValue)}
          errorMessage={errors.skills?.errorMessage}
          hasError={errors.skills?.hasError}
          ref={skillsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "skills")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Image url"
        isRequired={false}
        isReadOnly={false}
        value={imageUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              title,
              role,
              company,
              companyLogoUrl,
              discipline,
              registration_date,
              registration_branch,
              registration_number,
              email,
              linkedin,
              telephone,
              skills,
              imageUrl: value,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.imageUrl ?? value;
          }
          if (errors.imageUrl?.hasError) {
            runValidationTasks("imageUrl", value);
          }
          setImageUrl(value);
        }}
        onBlur={() => runValidationTasks("imageUrl", imageUrl)}
        errorMessage={errors.imageUrl?.errorMessage}
        hasError={errors.imageUrl?.hasError}
        {...getOverrideProps(overrides, "imageUrl")}
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
              title,
              role,
              company,
              companyLogoUrl,
              discipline,
              registration_date,
              registration_branch,
              registration_number,
              email,
              linkedin,
              telephone,
              skills,
              imageUrl,
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
              title,
              role,
              company,
              companyLogoUrl,
              discipline,
              registration_date,
              registration_branch,
              registration_number,
              email,
              linkedin,
              telephone,
              skills,
              imageUrl,
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
              title,
              role,
              company,
              companyLogoUrl,
              discipline,
              registration_date,
              registration_branch,
              registration_number,
              email,
              linkedin,
              telephone,
              skills,
              imageUrl,
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
          isDisabled={!(idProp || externalUserModelProp)}
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
              !(idProp || externalUserModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

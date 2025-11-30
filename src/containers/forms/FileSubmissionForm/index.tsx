import Button from "components/UI/Button";
import { useForm, Controller } from "react-hook-form";
import { navigate } from "gatsby";
import { triggerNotification } from "../../../graphql/mutations";
import PhoneInput, {
  isValidPhoneNumber,
} from "react-phone-number-input";
import "./ContactForm.css";

const FileSubmissionForm = ({ metadata }) => {
  const {
    formState: { errors },
    control,
    handleSubmit,
    register,
    getValues,
  } = useForm();

  async function onSubmit() {
    let { fullName, email, phone, company, requirements } =
      getValues();
    let msg = {
      name: fullName,
      email: email,
      phone: phone,
      company: company,
      requirements: requirements,
      filelinks: metadata,
    };
    try {
      console.log("msg", msg, filelinks[0].cdnUrl);
      let res = await API.graphql(
        graphqlOperation(triggerNotification, {
          input: msg,
        })
      );
      console.log("form submission succes", res);
    } catch (err) {
      console.log("error in form submission: ", err);
    }
    navigate("/success");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="contactForm">
      <div className="flex justify-center w-full">
        <div className="w-full max-w-2xl">
          <div className="w-full flex flex-col items-center gap-2">
            <div className="w-full">
              <div className="field_row">
                <label htmlFor="fullName">Name *</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  className={errors.fullName ? "error" : ""}
                  {...register("fullName", {
                    required: "This field is required.",
                  })}
                />
                {errors.fullName && (
                  <div className="msg-error">
                    {errors.fullName.message}
                  </div>
                )}
              </div>

              <div className="field_row">
                <label htmlFor="email-sign-up-simple">Email *</label>
                <input
                  id="email-sign-up-simple"
                  aria-invalid={errors.email ? "true" : "false"}
                  className={errors.email ? "error" : ""}
                  {...register("email", {
                    required: "This field is required.",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message:
                        "Must be valid email. example@yourdomain.com",
                    },
                  })}
                  name="email"
                  type="email"
                  form="novalidatedform"
                />
                {errors.email && (
                  <div className="msg-error">
                    {errors.email.message}
                  </div>
                )}
              </div>

              <div className="field_row">
                <label htmlFor="phone">Phone Number *</label>
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "This field is required.",
                    },
                    validate: (value: string) => {
                      return (
                        isValidPhoneNumber(value) ||
                        "Enter valid phone number"
                      );
                    },
                  }}
                  render={({ field: { onChange, value } }) => (
                    <PhoneInput
                      value={value || ""}
                      onChange={onChange}
                      defaultCountry="SG"
                      className={errors.phone ? "error" : ""}
                    />
                  )}
                />
                {errors.phone && (
                  <div className="msg-error">
                    {errors.phone.message}
                  </div>
                )}
              </div>

              <div className="field_row">
                <label htmlFor="company">Company *</label>
                <input
                  id="company"
                  className={errors.company ? "error" : ""}
                  aria-invalid={errors.company ? "true" : "false"}
                  {...register("company", {
                    required: "This field is required.",
                  })}
                  name="company"
                  form="novalidatedform"
                />
                {errors.company && (
                  <div className="msg-error">
                    {errors.company.message}
                  </div>
                )}
              </div>

              <div className="field_row">
                <label htmlFor="requirements">Requirements *</label>
                <textarea
                  id="requirements"
                  rows={3}
                  className={errors.requirements ? "error" : ""}
                  aria-invalid={
                    errors.requirements ? "true" : "false"
                  }
                  {...register("requirements", {
                    required: "This field is required.",
                  })}
                  name="requirements"
                  form="novalidatedform"
                  placeholder="I need to convert my 2D drawings to 3D BIM models."
                />
                {errors.requirements && (
                  <div className="msg-error">
                    {errors.requirements.message}
                  </div>
                )}
              </div>
            </div>
          </div>
          <Button
            id="confirm-button"
            label="Submit"
            size="large"
            primary
            type="submit"
          />
          <p className="text-sm text-center mt-2 font-normal">
            ~ 1 Working Day Response Time
          </p>
        </div>
      </div>
    </form>
  );
};

export default FileSubmissionForm;

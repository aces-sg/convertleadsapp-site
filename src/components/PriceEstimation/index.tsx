import React, { useState, useEffect } from "react";
import CalendarInput from "components/DateInput";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import { Link } from "gatsby";
import "./styles.css";

const companyData = [
  { name: "Main Contractor", image: "/icons/maincon.svg" },
  { name: "Subcontractor", image: "/icons/subcon.svg" },
  { name: "Consultant", image: "/icons/owner.svg" },
];

const formatDate = (date: string | Date) => {
  const d = new Date(date);
  return d.toISOString().split("T")[0];
};

const PriceEstimation = () => {
  const {
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [totalValue, setTotalValue] = useState<string>(null);
  const isTablet = useMediaQuery({ query: "(max-width: 980px)" });

  async function onSubmit() {
    if (step < 2) setStep(step + 1);
    handleCalculation();
  }

  const handleCompnayTypeChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleDateRangeChange = ({ start, end }) => {
    const formattedStart = start ? formatDate(start) : "";
    const formattedEnd = end ? formatDate(end) : "";

    if (formattedStart && formattedEnd) {
      const startDate = new Date(formattedStart);
      const endDate = new Date(formattedEnd);

      const months =
        (endDate.getFullYear() - startDate.getFullYear()) * 12 +
        (endDate.getMonth() - startDate.getMonth()) +
        1;

      setFormData({
        ...formData,
        startDate: formattedStart,
        endDate: formattedEnd,
        duration: months,
      });
    } else {
      setFormData({
        ...formData,
        startDate: formattedStart || formData.startDate,
        endDate: formattedEnd || formData.endDate,
      });
    }
  };

  const handleCalculation = () => {
    const annualValue = () => {
      if (formData.activeCompany === "Subcontractor") return 1 * 4000;
      if (formData.activeCompany === "Consultant") return 2 * 4000;
      return 3 * 4000;
    };

    let { duration } = formData;
    if (!duration) return;

    let totalValue = annualValue() * duration;
    let projectValue = new Intl.NumberFormat("en-SG", {
      style: "currency",
      currency: "SGD",
    }).format(totalValue);

    setTotalValue(projectValue);
  };

  const getNextButtonDisabledStatus = () => {
    if (step === 0 && formData?.activeCompany) return false;
    if (step === 1 && formData?.duration) return false;
    if (step === 2 && formData?.projectDuration) return false;
    if (step === 3) return true;
    return true;
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const skipSteps = () => {
    const params = new URL(window.location.href).searchParams;
    const count = params.get("count");
    const duration = params.get("duration");
    if (count && duration) {
      const value = count * duration * 4000;
      const projectVal = new Intl.NumberFormat("en-SG", {
        style: "currency",
        currency: "SGD",
      }).format(value);
      setTotalValue(projectVal);
      setStep(2);
    }
  };

  useEffect(() => {
    skipSteps();
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="price_estimation">
      <div className="wrapper px-4 py-6 md:px-12">
        <div className="question_header mb-6">
          {step < 4 && (
            <h2 className="text-xl font-semibold">Need a Quote?</h2>
          )}
          {step === 4 && (
            <>
              <h2 className="text-xl font-semibold">
                We're working on it.
              </h2>
              <p>
                Someone will contact you within 3 working days to give
                you a customised price quote. In the meantime, check
                out some of these links if you want to learn more
                about us!
              </p>
            </>
          )}
          {step === 0 && <h5>Scope of Work</h5>}
          {step === 1 && <h5>Project Duration</h5>}
          {step === 2 && totalValue && (
            <div>
              <h5>Estimated Project Cost</h5>
              <Link className="text-sm underline" to="/pricing">
                Package Details
              </Link>
              <div className="questionnaire-answer-icon mt-3">
                <h3 className="text-2xl font-bold">{totalValue}</h3>
              </div>
            </div>
          )}
        </div>

        <div className="questionnaire-answers icon-select">
          <div className="answers-row flex flex-wrap gap-4">
            {step === 0 &&
              companyData.map((company, index) => (
                <div
                  className={
                    isTablet
                      ? "questionnaire-answer-wrapper w-1/2"
                      : "questionnaire-answer-wrapper w-1/4"
                  }
                  key={index}
                >
                  <div
                    className={`questionnaire-answer ${
                      formData?.activeCompany === company.name
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      handleCompnayTypeChange(
                        "activeCompany",
                        company.name
                      )
                    }
                  >
                    <img
                      className="questionnaire-answer-icon"
                      src={company.image}
                      alt={company.name}
                    />
                    <p className="questionnaire-answer-text">
                      {company.name}
                    </p>
                  </div>
                </div>
              ))}

            {step === 1 && (
              <div className="flex flex-col md:flex-row gap-6 w-full">
                <div className="w-full md:w-1/2">
                  <CalendarInput
                    label="Start Date"
                    value={formData.startDate}
                    onChange={(val) =>
                      handleDateRangeChange({
                        start: val,
                        end: formData.endDate,
                      })
                    }
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <CalendarInput
                    label="End Date"
                    value={formData.endDate}
                    onChange={(val) =>
                      handleDateRangeChange({
                        start: formData.startDate,
                        end: val,
                      })
                    }
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {step < 3 && (
          <div className="flex flex-row gap-3 justify-center mt-6">
            {step > 0 && (
              <button
                type="button"
                onClick={() => handleBack()}
                className="rounded-md bg-gray-100 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-gray-200"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
                &nbsp;&nbsp;Back
              </button>
            )}
            {step < 2 && (
              <button
                type="submit"
                disabled={getNextButtonDisabledStatus()}
                className="text-black rounded-md bg-main-primary px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-main-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              >
                Next&nbsp;&nbsp;
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            )}
          </div>
        )}
      </div>
    </form>
  );
};

export default PriceEstimation;

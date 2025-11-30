import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Box, Button, Footer, ResponsiveContext } from "grommet";
import { FormNextLink } from "grommet-icons";
import { WizardContext } from ".";

export const StepFooter = ({ nextId, submitLabel }) => {
  const size = useContext(ResponsiveContext);
  const { activeIndex, id, steps, width, errors } =
    useContext(WizardContext);

  return (
    <Box
      margin={
        !["xsmall", "small"].includes(size)
          ? { horizontal: "medium" }
          : undefined
      }
      flex={false}
    >
      <Footer
        border={{ side: "top", color: "border" }}
        justify="end"
        pad={
          !["xsmall", "small"].includes(size)
            ? { vertical: "medium" }
            : { vertical: "small", horizontal: "medium" }
        }
        alignSelf="center"
        width={width}
      >
        <Button
          id={nextId}
          icon={
            activeIndex === steps.length - 1 ? null : <FormNextLink />
          }
          primary
          reverse
          label={
            activeIndex === steps.length - 1 ? submitLabel : "Next"
          }
          form={`${id}-form`}
          type="submit"
        />
      </Footer>
    </Box>
  );
};

StepFooter.propTypes = {
  nextId: PropTypes.string,
};

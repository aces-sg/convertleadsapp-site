import React, { useState } from "react";

import {
  Grommet,
  Accordion,
  AccordionPanel,
  Box,
  Text,
} from "grommet";

const CustomHeaderAccordion = (props) => {
  const [activeIndex, setActiveIndex] = useState([0]);

  return (
    <Grommet>
      <Box>
        <Accordion
          activeIndex={activeIndex}
          onActive={(newActiveIndex) =>
            setActiveIndex(newActiveIndex)
          }
        >
          {props.data.map((feature, i) => (
            <AccordionPanel label={feature.title}>
              <Box
                pad="medium"
                background="white"
                style={{ height: "auto" }}
              >
                <Text className="border border-gray-300 rounded-xl grid gap-7">
                  {feature.features.map((ftr, j) => (
                    <div className="grid gap-7" key={j}>
                      <div className="grid gap-5 lg:grid-cols-2">
                        <h5 className="text-base font-medium mt-5 mb-0 ">
                          {ftr.name}
                        </h5>
                        <p className="text-base my-0 ">
                          {ftr.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </Text>
              </Box>
            </AccordionPanel>
          ))}
        </Accordion>
      </Box>
    </Grommet>
  );
};

export default CustomHeaderAccordion;

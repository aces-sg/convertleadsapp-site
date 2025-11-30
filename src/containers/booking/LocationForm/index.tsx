import {
  Button,
  FormField,
  Heading,
  Select,
  Text,
  TextInput,
} from "grommet";
import React, { useCallback, useEffect, useState } from "react";
import { COUNTRIES } from "../../../constants";
import useBooking from "../useBooking";
import { usePlacesWidget } from "react-google-autocomplete";
import GoogleMapReact from "google-map-react";

import "./LocationForm.scss";

const LocationForm = () => {
  const { values, setValues } = useBooking();

  const [countryOptions, setCountryOptions] = useState(COUNTRIES);
  const [addressKey, setAddressKey] = useState("");

  useEffect(() => {
    setAddressKey(values.address);
  }, []);

  const { ref } = usePlacesWidget({
    apiKey: process.env.GATSBY_GOOGLE_MAPS_API_KEY,
    options: {
      types: [],
      componentRestrictions: {
        country:
          COUNTRIES.find(
            (c) => c.name === values.country
          )?.code?.toLocaleLowerCase() || undefined,
      },
    },
    onPlaceSelected: (place) => {
      if (!place) return;
      setValues((v) => ({
        ...v,
        address: place.formatted_address,
        address_id: place.place_id,
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      }));
      setAddressKey(place.formatted_address);
    },
  });

  const handleInput = useCallback(
    (fieldName: string) => (value: string) => {
      setValues((v) => ({
        ...v,
        [fieldName]: value,
      }));
    },
    [setValues]
  );

  const handleAddressInput = useCallback((e) => {
    setAddressKey(e.target.value);
  }, []);

  const renderMarkers = useCallback((map, maps, position) => {
    new maps.Marker({
      position,
      map,
    });
  }, []);

  return (
    <div>
      <Heading level="3">Book Survey Services</Heading>
      <Text size="large">
        Provide the following information to help us determine the
        coverage in your area, price of the scan, and the right
        equipment for the appointed surveyor.
      </Text>

      <Heading level="4" style={{ marginTop: "32px" }}>
        Location
      </Heading>
      {values.currentPropertyPart === 0 && (
        <>
          <Heading level="5">Where is the property located?</Heading>
          <FormField label="Country" name="country">
            <Select
              size="medium"
              placeholder=""
              value={values.country}
              options={countryOptions}
              onChange={({ option }) => {
                handleInput("country")(option.name);
                handleInput("address")("");
                setAddressKey("");
              }}
              onClose={() => setCountryOptions(COUNTRIES)}
              onSearch={(text) => {
                const escapedText = text.replace(
                  /[-\\^$*+?.()|[\]{}]/g,
                  "\\$&"
                );
                const exp = new RegExp(escapedText, "i");
                setCountryOptions(
                  COUNTRIES.filter((o) => exp.test(o.name))
                );
              }}
            />
          </FormField>
          <div className="address-row">
            <FormField
              className="address-input"
              label="Address"
              name="address"
            >
              <TextInput
                id="text-input"
                placeholder="Address"
                ref={ref}
                value={addressKey}
                onChange={handleAddressInput}
              />
            </FormField>
            <FormField className="" label="Suite / Unit" name="unit">
              <TextInput
                placeholder=""
                value={values.addressUnit}
                onChange={(e) =>
                  handleInput("addressUnit")(e.target.value)
                }
              />
            </FormField>
          </div>
          {values.address && (
            <div className="map-view">
              <GoogleMapReact
                key={values.address}
                bootstrapURLKeys={{
                  key: process.env.GATSBY_GOOGLE_MAPS_API_KEY,
                }}
                defaultCenter={{
                  lat: values.lat,
                  lng: values.lng,
                }}
                defaultZoom={15}
                onGoogleApiLoaded={({ map, maps }) =>
                  renderMarkers(map, maps, {
                    lat: values.lat,
                    lng: values.lng,
                  })
                }
              ></GoogleMapReact>
            </div>
          )}
          <div className="actions">
            <Button
              label="Next"
              size="large"
              primary
              disabled={!values.address}
              onClick={() =>
                setValues((s) => ({
                  ...s,
                  completedProperty: 1,
                  currentPropertyPart: 1,
                }))
              }
            ></Button>
          </div>
        </>
      )}
    </div>
  );
};

export default LocationForm;

import { GlobalStateContext } from "../context/GlobalContextProvider";
import { useContext } from "react";
import { isBrowser } from "./auth";

export interface FilterInput {
  skills: Boolean;
  position: Boolean;
  date: Boolean;
}

export const listOpportunities = () => {
  if (!isBrowser()) return;
  const state = useContext(GlobalStateContext);
  const { opportunities } = state;
  return opportunities;
};

export const listUniquePositions = () => {
  if (!isBrowser()) return;
  const opportunities = listOpportunities();
  const positions: Array<String> = [];

  function pushArray(arr, arr2) {
    arr.push.apply(arr, arr2);
  }

  opportunities.map((opp) => {
    if (opp) return;
    let strippedPosition = opp.position.replace(/[\[\]']+/g, "");
    let position: Array<String> = strippedPosition.split(",");

    // check if software already exists in skills array
    let found: Boolean = positions.some(
      (r) => position.indexOf(r) >= 0
    );
    if (found) return;
    pushArray(positions, position);
  });

  return positions;
};

export const listUniqueSkills = () => {
  if (!isBrowser()) return;
  const opportunities = listOpportunities();
  const skills: Array<String> = [];

  function pushArray(arr, arr2) {
    arr.push.apply(arr, arr2);
  }

  opportunities.map((opp) => {
    if (opp) return;
    let strippedSoftware = opp.software.replace(/[\[\]']+/g, "");
    let software: Array<String> = strippedSoftware.split(",");

    // check if software already exists in skills array
    let found: Boolean = skills.some((r) => software.indexOf(r) >= 0);
    if (found) return;
    pushArray(skills, software);
  });

  return skills;
};

export const filteredOpportunties = (filter: FilterInput) => {
  if (!isBrowser()) return;
  let opportunities = listOpportunities();
};

export const listActive = async () => {
  let active: any = await API.graphql(
    graphqlOperation(listOpportunitiess, {
      filter: {
        assignedUser: { attributeExists: true },
        isArchive: { ne: true },
      },
      limit: 10000,
    })
  );
};

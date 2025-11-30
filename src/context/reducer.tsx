export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "TOGGLE_LAYER": {
      return {
        ...state,
        layer: state.layer === false ? true : false,
        centerLayerType: "message",
      };
    }

    case "TOGGLE_CONTACT": {
      return {
        ...state,
        contactLayer: {
          ...state.contactLayer,
          show: action.payload.show,
          message: action.payload.message,
        },
      };
    }

    case "START_ACTION": {
      return {
        ...state,
        layer: false,
        centerLayerType: "message",
        centerLayerAction: state.centerLayerType,
      };
    }

    case "COMPLETE_ACTION": {
      return {
        ...state,
        layer: false,
        centerLayerType: "message",
        centerLayerAction: undefined,
      };
    }

    case "SET_OPPS": {
      return {
        ...state,
        opportunities: action.payload,
      };
    }

    case "SET_USER": {
      return {
        ...state,
        user: action.payload,
      };
    }

    case "SET_ACTIVE_ITEM": {
      return {
        ...state,
        sessionTag: {
          ...state.sessionTag,
          position: action.payload.position,
          company: action.payload.name,
        },
      };
    }

    case "SET_MESSAGE": {
      return {
        ...state,
        centerLayerType: action.payload.centerLayerType || "message",
        message: {
          error: action.payload.error,
          message: action.payload.message,
        },
        layer: true,
      };
    }

    case "SET_SUCCESS": {
      return {
        ...state,
        success_message: action.payload,
        layer: true,
      };
    }

    case "SET_KEYWORDS": {
      return {
        ...state,
        filter: {
          ...state.filter,
          keywords: action.payload,
        },
      };
    }

    case "SET_LOCATION": {
      return {
        ...state,
        filter: {
          ...state.filter,
          location: action.payload,
        },
      };
    }

    case "SET_POSITION": {
      return {
        ...state,
        filter: {
          ...state.filter,
          position: action.payload,
        },
      };
    }

    case "SET_SOFTWARES": {
      return {
        ...state,
        filter: {
          ...state.filter,
          softwares: action.payload,
        },
      };
    }

    case "SET_RM": {
      return {
        ...state,
        filter: {
          ...state.filter,
          rm: action.payload,
        },
      };
    }

    case "SET_SESSION_TYPE": {
      return {
        ...state,
        sessionTag: {
          ...state.sessionTag,
          __type: action.payload,
        },
      };
    }

    case "SET_SESSION_USERNAME": {
      return {
        ...state,
        sessionTag: {
          ...state.sessionTag,
          username: action.payload,
        },
      };
    }

    case "SET_SESSION_POSITION": {
      return {
        ...state,
        sessionTag: {
          ...state.sessionTag,
          position: action.payload,
        },
      };
    }

    case "SET_SESSION_NATIONALITY": {
      return {
        ...state,
        sessionTag: {
          ...state.sessionTag,
          nationality: action.payload,
        },
      };
    }

    case "SET_SESSION_DATE": {
      return {
        ...state,
        sessionTag: {
          ...state.sessionTag,
          date: action.payload,
        },
      };
    }

    case "SET_COMPANY": {
      return {
        ...state,
        sessionTag: {
          ...state.sessionTag,
          company: action.payload,
        },
      };
    }

    case "CLEAR_FILTERS": {
      return {
        ...state,
        filter: {},
      };
    }

    case "SET_ADUSERS": {
      return {
        ...state,
        adUsers: action.payload,
      };
    }

    case "SET_DDMUSERS": {
      return {
        ...state,
        ddmUsers: action.payload,
      };
    }

    //** REDUCER ACTIONS FOR ADMIN */

    case "SET_ENGINEER": {
      return {
        ...state,
        admin: {
          ...state.admin,
          selectedEngineer: {
            id: action.payload.id,
            firstName: action.payload.name,
          },
        },
      };
    }

    case "SET_ACTIVE": {
      return {
        ...state,
        admin: {
          ...state.admin,
          activeOpportunity: action.payload,
        },
      };
    }

    case "SET_INDEX": {
      return {
        ...state,
        admin: {
          ...state.admin,
          activeIndex: action.payload,
        },
      };
    }

    default:
      throw new Error("Bad Action Type");
  }
};

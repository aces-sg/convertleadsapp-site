import { Opportunities, User } from "../graphql/API";

interface Message {
  error: Boolean;
  message: String;
  centerLayerType: String;
}

interface Session {
  __type: String;
  username: String;
  position: String;
  company: String;
  nationality: Boolean;
  date: String;
}

interface Filter {
  keywords: String;
  location: String;
  position: String;
  rm: Boolean;
  softwares: String;
}

interface AdminSession extends Opportunities {
  selectedEngineer: User | null;
  activeOpportunity: Opportunities | null;
  activeIndex: number | null;
}

interface UserProps {
  id: string;
  name: string;
  email: string;
}

export type InitialValueType = {
  centerLayerType: string;
  centerLayerAction: string;
  layer: Boolean;
  opportunities: Array<String>;
  active: String;
  user: UserProps;
  message: Message;
  adUsers: Array<String>;
  ddmUsers: Array<String>;
  sessionTag?: Session;
  filter: Filter;
  admin?: AdminSession;
};

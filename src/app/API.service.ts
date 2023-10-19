/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateHotel: OnCreateHotelSubscription;
  onUpdateHotel: OnUpdateHotelSubscription;
  onDeleteHotel: OnDeleteHotelSubscription;
  onCreateEvent: OnCreateEventSubscription;
  onUpdateEvent: OnUpdateEventSubscription;
  onDeleteEvent: OnDeleteEventSubscription;
  onCreateUserSettings: OnCreateUserSettingsSubscription;
  onUpdateUserSettings: OnUpdateUserSettingsSubscription;
  onDeleteUserSettings: OnDeleteUserSettingsSubscription;
  onCreateRestaurant: OnCreateRestaurantSubscription;
  onUpdateRestaurant: OnUpdateRestaurantSubscription;
  onDeleteRestaurant: OnDeleteRestaurantSubscription;
};

export type CreateHotelInput = {
  id?: string | null;
  name?: string | null;
  address?: string | null;
  phone?: string | null;
  description?: string | null;
  image?: string | null;
};

export type ModelHotelConditionInput = {
  name?: ModelStringInput | null;
  address?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  description?: ModelStringInput | null;
  image?: ModelStringInput | null;
  and?: Array<ModelHotelConditionInput | null> | null;
  or?: Array<ModelHotelConditionInput | null> | null;
  not?: ModelHotelConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Hotel = {
  __typename: "Hotel";
  id: string;
  name?: string | null;
  address?: string | null;
  phone?: string | null;
  description?: string | null;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateHotelInput = {
  id: string;
  name?: string | null;
  address?: string | null;
  phone?: string | null;
  description?: string | null;
  image?: string | null;
};

export type DeleteHotelInput = {
  id: string;
};

export type CreateEventInput = {
  id?: string | null;
  name?: string | null;
  date?: string | null;
  start?: string | null;
  stop?: string | null;
  image?: string | null;
  description?: string | null;
  address?: string | null;
  address_name?: string | null;
  groups?: string | null;
};

export type ModelEventConditionInput = {
  name?: ModelStringInput | null;
  date?: ModelStringInput | null;
  start?: ModelStringInput | null;
  stop?: ModelStringInput | null;
  image?: ModelStringInput | null;
  description?: ModelStringInput | null;
  address?: ModelStringInput | null;
  address_name?: ModelStringInput | null;
  groups?: ModelStringInput | null;
  and?: Array<ModelEventConditionInput | null> | null;
  or?: Array<ModelEventConditionInput | null> | null;
  not?: ModelEventConditionInput | null;
};

export type Event = {
  __typename: "Event";
  id: string;
  name?: string | null;
  date?: string | null;
  start?: string | null;
  stop?: string | null;
  image?: string | null;
  description?: string | null;
  address?: string | null;
  address_name?: string | null;
  groups?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateEventInput = {
  id: string;
  name?: string | null;
  date?: string | null;
  start?: string | null;
  stop?: string | null;
  image?: string | null;
  description?: string | null;
  address?: string | null;
  address_name?: string | null;
  groups?: string | null;
};

export type DeleteEventInput = {
  id: string;
};

export type CreateUserSettingsInput = {
  id?: string | null;
  user: string;
  language?: string | null;
};

export type ModelUserSettingsConditionInput = {
  user?: ModelStringInput | null;
  language?: ModelStringInput | null;
  and?: Array<ModelUserSettingsConditionInput | null> | null;
  or?: Array<ModelUserSettingsConditionInput | null> | null;
  not?: ModelUserSettingsConditionInput | null;
};

export type UserSettings = {
  __typename: "UserSettings";
  id: string;
  user: string;
  language?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserSettingsInput = {
  id: string;
  user?: string | null;
  language?: string | null;
};

export type DeleteUserSettingsInput = {
  id: string;
};

export type CreateRestaurantInput = {
  id?: string | null;
  name: string;
  description: string;
  city: string;
};

export type ModelRestaurantConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  city?: ModelStringInput | null;
  and?: Array<ModelRestaurantConditionInput | null> | null;
  or?: Array<ModelRestaurantConditionInput | null> | null;
  not?: ModelRestaurantConditionInput | null;
};

export type Restaurant = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRestaurantInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  city?: string | null;
};

export type DeleteRestaurantInput = {
  id: string;
};

export type ModelHotelFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  address?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  description?: ModelStringInput | null;
  image?: ModelStringInput | null;
  and?: Array<ModelHotelFilterInput | null> | null;
  or?: Array<ModelHotelFilterInput | null> | null;
  not?: ModelHotelFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelHotelConnection = {
  __typename: "ModelHotelConnection";
  items: Array<Hotel | null>;
  nextToken?: string | null;
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  date?: ModelStringInput | null;
  start?: ModelStringInput | null;
  stop?: ModelStringInput | null;
  image?: ModelStringInput | null;
  description?: ModelStringInput | null;
  address?: ModelStringInput | null;
  address_name?: ModelStringInput | null;
  groups?: ModelStringInput | null;
  and?: Array<ModelEventFilterInput | null> | null;
  or?: Array<ModelEventFilterInput | null> | null;
  not?: ModelEventFilterInput | null;
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection";
  items: Array<Event | null>;
  nextToken?: string | null;
};

export type ModelUserSettingsFilterInput = {
  id?: ModelIDInput | null;
  user?: ModelStringInput | null;
  language?: ModelStringInput | null;
  and?: Array<ModelUserSettingsFilterInput | null> | null;
  or?: Array<ModelUserSettingsFilterInput | null> | null;
  not?: ModelUserSettingsFilterInput | null;
};

export type ModelUserSettingsConnection = {
  __typename: "ModelUserSettingsConnection";
  items: Array<UserSettings | null>;
  nextToken?: string | null;
};

export type ModelRestaurantFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  city?: ModelStringInput | null;
  and?: Array<ModelRestaurantFilterInput | null> | null;
  or?: Array<ModelRestaurantFilterInput | null> | null;
  not?: ModelRestaurantFilterInput | null;
};

export type ModelRestaurantConnection = {
  __typename: "ModelRestaurantConnection";
  items: Array<Restaurant | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionHotelFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  address?: ModelSubscriptionStringInput | null;
  phone?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  image?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionHotelFilterInput | null> | null;
  or?: Array<ModelSubscriptionHotelFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionEventFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  date?: ModelSubscriptionStringInput | null;
  start?: ModelSubscriptionStringInput | null;
  stop?: ModelSubscriptionStringInput | null;
  image?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  address?: ModelSubscriptionStringInput | null;
  address_name?: ModelSubscriptionStringInput | null;
  groups?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionEventFilterInput | null> | null;
  or?: Array<ModelSubscriptionEventFilterInput | null> | null;
};

export type ModelSubscriptionUserSettingsFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  user?: ModelSubscriptionStringInput | null;
  language?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionUserSettingsFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserSettingsFilterInput | null> | null;
};

export type ModelSubscriptionRestaurantFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  city?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionRestaurantFilterInput | null> | null;
  or?: Array<ModelSubscriptionRestaurantFilterInput | null> | null;
};

export type CreateHotelMutation = {
  __typename: "Hotel";
  id: string;
  name?: string | null;
  address?: string | null;
  phone?: string | null;
  description?: string | null;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateHotelMutation = {
  __typename: "Hotel";
  id: string;
  name?: string | null;
  address?: string | null;
  phone?: string | null;
  description?: string | null;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteHotelMutation = {
  __typename: "Hotel";
  id: string;
  name?: string | null;
  address?: string | null;
  phone?: string | null;
  description?: string | null;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateEventMutation = {
  __typename: "Event";
  id: string;
  name?: string | null;
  date?: string | null;
  start?: string | null;
  stop?: string | null;
  image?: string | null;
  description?: string | null;
  address?: string | null;
  address_name?: string | null;
  groups?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateEventMutation = {
  __typename: "Event";
  id: string;
  name?: string | null;
  date?: string | null;
  start?: string | null;
  stop?: string | null;
  image?: string | null;
  description?: string | null;
  address?: string | null;
  address_name?: string | null;
  groups?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteEventMutation = {
  __typename: "Event";
  id: string;
  name?: string | null;
  date?: string | null;
  start?: string | null;
  stop?: string | null;
  image?: string | null;
  description?: string | null;
  address?: string | null;
  address_name?: string | null;
  groups?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateUserSettingsMutation = {
  __typename: "UserSettings";
  id: string;
  user: string;
  language?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserSettingsMutation = {
  __typename: "UserSettings";
  id: string;
  user: string;
  language?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUserSettingsMutation = {
  __typename: "UserSettings";
  id: string;
  user: string;
  language?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type GetHotelQuery = {
  __typename: "Hotel";
  id: string;
  name?: string | null;
  address?: string | null;
  phone?: string | null;
  description?: string | null;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListHotelsQuery = {
  __typename: "ModelHotelConnection";
  items: Array<{
    __typename: "Hotel";
    id: string;
    name?: string | null;
    address?: string | null;
    phone?: string | null;
    description?: string | null;
    image?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetEventQuery = {
  __typename: "Event";
  id: string;
  name?: string | null;
  date?: string | null;
  start?: string | null;
  stop?: string | null;
  image?: string | null;
  description?: string | null;
  address?: string | null;
  address_name?: string | null;
  groups?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListEventsQuery = {
  __typename: "ModelEventConnection";
  items: Array<{
    __typename: "Event";
    id: string;
    name?: string | null;
    date?: string | null;
    start?: string | null;
    stop?: string | null;
    image?: string | null;
    description?: string | null;
    address?: string | null;
    address_name?: string | null;
    groups?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetUserSettingsQuery = {
  __typename: "UserSettings";
  id: string;
  user: string;
  language?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListUserSettingsQuery = {
  __typename: "ModelUserSettingsConnection";
  items: Array<{
    __typename: "UserSettings";
    id: string;
    user: string;
    language?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetRestaurantQuery = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type ListRestaurantsQuery = {
  __typename: "ModelRestaurantConnection";
  items: Array<{
    __typename: "Restaurant";
    id: string;
    name: string;
    description: string;
    city: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateHotelSubscription = {
  __typename: "Hotel";
  id: string;
  name?: string | null;
  address?: string | null;
  phone?: string | null;
  description?: string | null;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateHotelSubscription = {
  __typename: "Hotel";
  id: string;
  name?: string | null;
  address?: string | null;
  phone?: string | null;
  description?: string | null;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteHotelSubscription = {
  __typename: "Hotel";
  id: string;
  name?: string | null;
  address?: string | null;
  phone?: string | null;
  description?: string | null;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateEventSubscription = {
  __typename: "Event";
  id: string;
  name?: string | null;
  date?: string | null;
  start?: string | null;
  stop?: string | null;
  image?: string | null;
  description?: string | null;
  address?: string | null;
  address_name?: string | null;
  groups?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateEventSubscription = {
  __typename: "Event";
  id: string;
  name?: string | null;
  date?: string | null;
  start?: string | null;
  stop?: string | null;
  image?: string | null;
  description?: string | null;
  address?: string | null;
  address_name?: string | null;
  groups?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteEventSubscription = {
  __typename: "Event";
  id: string;
  name?: string | null;
  date?: string | null;
  start?: string | null;
  stop?: string | null;
  image?: string | null;
  description?: string | null;
  address?: string | null;
  address_name?: string | null;
  groups?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateUserSettingsSubscription = {
  __typename: "UserSettings";
  id: string;
  user: string;
  language?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUserSettingsSubscription = {
  __typename: "UserSettings";
  id: string;
  user: string;
  language?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUserSettingsSubscription = {
  __typename: "UserSettings";
  id: string;
  user: string;
  language?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateHotel(
    input: CreateHotelInput,
    condition?: ModelHotelConditionInput
  ): Promise<CreateHotelMutation> {
    const statement = `mutation CreateHotel($input: CreateHotelInput!, $condition: ModelHotelConditionInput) {
        createHotel(input: $input, condition: $condition) {
          __typename
          id
          name
          address
          phone
          description
          image
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateHotelMutation>response.data.createHotel;
  }
  async UpdateHotel(
    input: UpdateHotelInput,
    condition?: ModelHotelConditionInput
  ): Promise<UpdateHotelMutation> {
    const statement = `mutation UpdateHotel($input: UpdateHotelInput!, $condition: ModelHotelConditionInput) {
        updateHotel(input: $input, condition: $condition) {
          __typename
          id
          name
          address
          phone
          description
          image
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateHotelMutation>response.data.updateHotel;
  }
  async DeleteHotel(
    input: DeleteHotelInput,
    condition?: ModelHotelConditionInput
  ): Promise<DeleteHotelMutation> {
    const statement = `mutation DeleteHotel($input: DeleteHotelInput!, $condition: ModelHotelConditionInput) {
        deleteHotel(input: $input, condition: $condition) {
          __typename
          id
          name
          address
          phone
          description
          image
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteHotelMutation>response.data.deleteHotel;
  }
  async CreateEvent(
    input: CreateEventInput,
    condition?: ModelEventConditionInput
  ): Promise<CreateEventMutation> {
    const statement = `mutation CreateEvent($input: CreateEventInput!, $condition: ModelEventConditionInput) {
        createEvent(input: $input, condition: $condition) {
          __typename
          id
          name
          date
          start
          stop
          image
          description
          address
          address_name
          groups
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateEventMutation>response.data.createEvent;
  }
  async UpdateEvent(
    input: UpdateEventInput,
    condition?: ModelEventConditionInput
  ): Promise<UpdateEventMutation> {
    const statement = `mutation UpdateEvent($input: UpdateEventInput!, $condition: ModelEventConditionInput) {
        updateEvent(input: $input, condition: $condition) {
          __typename
          id
          name
          date
          start
          stop
          image
          description
          address
          address_name
          groups
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateEventMutation>response.data.updateEvent;
  }
  async DeleteEvent(
    input: DeleteEventInput,
    condition?: ModelEventConditionInput
  ): Promise<DeleteEventMutation> {
    const statement = `mutation DeleteEvent($input: DeleteEventInput!, $condition: ModelEventConditionInput) {
        deleteEvent(input: $input, condition: $condition) {
          __typename
          id
          name
          date
          start
          stop
          image
          description
          address
          address_name
          groups
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteEventMutation>response.data.deleteEvent;
  }
  async CreateUserSettings(
    input: CreateUserSettingsInput,
    condition?: ModelUserSettingsConditionInput
  ): Promise<CreateUserSettingsMutation> {
    const statement = `mutation CreateUserSettings($input: CreateUserSettingsInput!, $condition: ModelUserSettingsConditionInput) {
        createUserSettings(input: $input, condition: $condition) {
          __typename
          id
          user
          language
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserSettingsMutation>response.data.createUserSettings;
  }
  async UpdateUserSettings(
    input: UpdateUserSettingsInput,
    condition?: ModelUserSettingsConditionInput
  ): Promise<UpdateUserSettingsMutation> {
    const statement = `mutation UpdateUserSettings($input: UpdateUserSettingsInput!, $condition: ModelUserSettingsConditionInput) {
        updateUserSettings(input: $input, condition: $condition) {
          __typename
          id
          user
          language
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserSettingsMutation>response.data.updateUserSettings;
  }
  async DeleteUserSettings(
    input: DeleteUserSettingsInput,
    condition?: ModelUserSettingsConditionInput
  ): Promise<DeleteUserSettingsMutation> {
    const statement = `mutation DeleteUserSettings($input: DeleteUserSettingsInput!, $condition: ModelUserSettingsConditionInput) {
        deleteUserSettings(input: $input, condition: $condition) {
          __typename
          id
          user
          language
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserSettingsMutation>response.data.deleteUserSettings;
  }
  async CreateRestaurant(
    input: CreateRestaurantInput,
    condition?: ModelRestaurantConditionInput
  ): Promise<CreateRestaurantMutation> {
    const statement = `mutation CreateRestaurant($input: CreateRestaurantInput!, $condition: ModelRestaurantConditionInput) {
        createRestaurant(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRestaurantMutation>response.data.createRestaurant;
  }
  async UpdateRestaurant(
    input: UpdateRestaurantInput,
    condition?: ModelRestaurantConditionInput
  ): Promise<UpdateRestaurantMutation> {
    const statement = `mutation UpdateRestaurant($input: UpdateRestaurantInput!, $condition: ModelRestaurantConditionInput) {
        updateRestaurant(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRestaurantMutation>response.data.updateRestaurant;
  }
  async DeleteRestaurant(
    input: DeleteRestaurantInput,
    condition?: ModelRestaurantConditionInput
  ): Promise<DeleteRestaurantMutation> {
    const statement = `mutation DeleteRestaurant($input: DeleteRestaurantInput!, $condition: ModelRestaurantConditionInput) {
        deleteRestaurant(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRestaurantMutation>response.data.deleteRestaurant;
  }
  async GetHotel(id: string): Promise<GetHotelQuery> {
    const statement = `query GetHotel($id: ID!) {
        getHotel(id: $id) {
          __typename
          id
          name
          address
          phone
          description
          image
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetHotelQuery>response.data.getHotel;
  }
  async ListHotels(
    filter?: ModelHotelFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListHotelsQuery> {
    const statement = `query ListHotels($filter: ModelHotelFilterInput, $limit: Int, $nextToken: String) {
        listHotels(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            address
            phone
            description
            image
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListHotelsQuery>response.data.listHotels;
  }
  async GetEvent(id: string): Promise<GetEventQuery> {
    const statement = `query GetEvent($id: ID!) {
        getEvent(id: $id) {
          __typename
          id
          name
          date
          start
          stop
          image
          description
          address
          address_name
          groups
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetEventQuery>response.data.getEvent;
  }
  async ListEvents(
    filter?: ModelEventFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListEventsQuery> {
    const statement = `query ListEvents($filter: ModelEventFilterInput, $limit: Int, $nextToken: String) {
        listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            date
            start
            stop
            image
            description
            address
            address_name
            groups
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListEventsQuery>response.data.listEvents;
  }
  async GetUserSettings(id: string): Promise<GetUserSettingsQuery> {
    const statement = `query GetUserSettings($id: ID!) {
        getUserSettings(id: $id) {
          __typename
          id
          user
          language
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserSettingsQuery>response.data.getUserSettings;
  }
  async ListUserSettings(
    filter?: ModelUserSettingsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUserSettingsQuery> {
    const statement = `query ListUserSettings($filter: ModelUserSettingsFilterInput, $limit: Int, $nextToken: String) {
        listUserSettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            user
            language
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUserSettingsQuery>response.data.listUserSettings;
  }
  async GetRestaurant(id: string): Promise<GetRestaurantQuery> {
    const statement = `query GetRestaurant($id: ID!) {
        getRestaurant(id: $id) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRestaurantQuery>response.data.getRestaurant;
  }
  async ListRestaurants(
    filter?: ModelRestaurantFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRestaurantsQuery> {
    const statement = `query ListRestaurants($filter: ModelRestaurantFilterInput, $limit: Int, $nextToken: String) {
        listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            city
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRestaurantsQuery>response.data.listRestaurants;
  }
  OnCreateHotelListener(
    filter?: ModelSubscriptionHotelFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateHotel">>
  > {
    const statement = `subscription OnCreateHotel($filter: ModelSubscriptionHotelFilterInput) {
        onCreateHotel(filter: $filter) {
          __typename
          id
          name
          address
          phone
          description
          image
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateHotel">>
    >;
  }

  OnUpdateHotelListener(
    filter?: ModelSubscriptionHotelFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateHotel">>
  > {
    const statement = `subscription OnUpdateHotel($filter: ModelSubscriptionHotelFilterInput) {
        onUpdateHotel(filter: $filter) {
          __typename
          id
          name
          address
          phone
          description
          image
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateHotel">>
    >;
  }

  OnDeleteHotelListener(
    filter?: ModelSubscriptionHotelFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteHotel">>
  > {
    const statement = `subscription OnDeleteHotel($filter: ModelSubscriptionHotelFilterInput) {
        onDeleteHotel(filter: $filter) {
          __typename
          id
          name
          address
          phone
          description
          image
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteHotel">>
    >;
  }

  OnCreateEventListener(
    filter?: ModelSubscriptionEventFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateEvent">>
  > {
    const statement = `subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
        onCreateEvent(filter: $filter) {
          __typename
          id
          name
          date
          start
          stop
          image
          description
          address
          address_name
          groups
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateEvent">>
    >;
  }

  OnUpdateEventListener(
    filter?: ModelSubscriptionEventFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateEvent">>
  > {
    const statement = `subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
        onUpdateEvent(filter: $filter) {
          __typename
          id
          name
          date
          start
          stop
          image
          description
          address
          address_name
          groups
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateEvent">>
    >;
  }

  OnDeleteEventListener(
    filter?: ModelSubscriptionEventFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteEvent">>
  > {
    const statement = `subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
        onDeleteEvent(filter: $filter) {
          __typename
          id
          name
          date
          start
          stop
          image
          description
          address
          address_name
          groups
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteEvent">>
    >;
  }

  OnCreateUserSettingsListener(
    filter?: ModelSubscriptionUserSettingsFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUserSettings">>
  > {
    const statement = `subscription OnCreateUserSettings($filter: ModelSubscriptionUserSettingsFilterInput) {
        onCreateUserSettings(filter: $filter) {
          __typename
          id
          user
          language
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateUserSettings">
      >
    >;
  }

  OnUpdateUserSettingsListener(
    filter?: ModelSubscriptionUserSettingsFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUserSettings">>
  > {
    const statement = `subscription OnUpdateUserSettings($filter: ModelSubscriptionUserSettingsFilterInput) {
        onUpdateUserSettings(filter: $filter) {
          __typename
          id
          user
          language
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateUserSettings">
      >
    >;
  }

  OnDeleteUserSettingsListener(
    filter?: ModelSubscriptionUserSettingsFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUserSettings">>
  > {
    const statement = `subscription OnDeleteUserSettings($filter: ModelSubscriptionUserSettingsFilterInput) {
        onDeleteUserSettings(filter: $filter) {
          __typename
          id
          user
          language
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteUserSettings">
      >
    >;
  }

  OnCreateRestaurantListener(
    filter?: ModelSubscriptionRestaurantFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRestaurant">>
  > {
    const statement = `subscription OnCreateRestaurant($filter: ModelSubscriptionRestaurantFilterInput) {
        onCreateRestaurant(filter: $filter) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRestaurant">>
    >;
  }

  OnUpdateRestaurantListener(
    filter?: ModelSubscriptionRestaurantFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRestaurant">>
  > {
    const statement = `subscription OnUpdateRestaurant($filter: ModelSubscriptionRestaurantFilterInput) {
        onUpdateRestaurant(filter: $filter) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRestaurant">>
    >;
  }

  OnDeleteRestaurantListener(
    filter?: ModelSubscriptionRestaurantFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRestaurant">>
  > {
    const statement = `subscription OnDeleteRestaurant($filter: ModelSubscriptionRestaurantFilterInput) {
        onDeleteRestaurant(filter: $filter) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRestaurant">>
    >;
  }
}

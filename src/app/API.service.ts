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
  onCreateArea: OnCreateAreaSubscription;
  onUpdateArea: OnUpdateAreaSubscription;
  onDeleteArea: OnDeleteAreaSubscription;
  onCreateQuestion: OnCreateQuestionSubscription;
  onUpdateQuestion: OnUpdateQuestionSubscription;
  onDeleteQuestion: OnDeleteQuestionSubscription;
  onCreateLogin: OnCreateLoginSubscription;
  onUpdateLogin: OnUpdateLoginSubscription;
  onDeleteLogin: OnDeleteLoginSubscription;
  onCreateCity: OnCreateCitySubscription;
  onUpdateCity: OnUpdateCitySubscription;
  onDeleteCity: OnDeleteCitySubscription;
  onCreateAirport: OnCreateAirportSubscription;
  onUpdateAirport: OnUpdateAirportSubscription;
  onDeleteAirport: OnDeleteAirportSubscription;
  onCreateUser: OnCreateUserSubscription;
  onUpdateUser: OnUpdateUserSubscription;
  onDeleteUser: OnDeleteUserSubscription;
  onCreateEvent: OnCreateEventSubscription;
  onUpdateEvent: OnUpdateEventSubscription;
  onDeleteEvent: OnDeleteEventSubscription;
  onCreateHotel: OnCreateHotelSubscription;
  onUpdateHotel: OnUpdateHotelSubscription;
  onDeleteHotel: OnDeleteHotelSubscription;
  onCreateUserSettings: OnCreateUserSettingsSubscription;
  onUpdateUserSettings: OnUpdateUserSettingsSubscription;
  onDeleteUserSettings: OnDeleteUserSettingsSubscription;
  onCreateRestaurant: OnCreateRestaurantSubscription;
  onUpdateRestaurant: OnUpdateRestaurantSubscription;
  onDeleteRestaurant: OnDeleteRestaurantSubscription;
};

export type CreateAreaInput = {
  id?: string | null;
  location?: string | null;
  description?: string | null;
  image?: string | null;
};

export type ModelAreaConditionInput = {
  location?: ModelStringInput | null;
  description?: ModelStringInput | null;
  image?: ModelStringInput | null;
  and?: Array<ModelAreaConditionInput | null> | null;
  or?: Array<ModelAreaConditionInput | null> | null;
  not?: ModelAreaConditionInput | null;
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

export type Area = {
  __typename: "Area";
  id: string;
  location?: string | null;
  description?: string | null;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAreaInput = {
  id: string;
  location?: string | null;
  description?: string | null;
  image?: string | null;
};

export type DeleteAreaInput = {
  id: string;
};

export type CreateQuestionInput = {
  id?: string | null;
  question?: string | null;
  answer?: string | null;
};

export type ModelQuestionConditionInput = {
  question?: ModelStringInput | null;
  answer?: ModelStringInput | null;
  and?: Array<ModelQuestionConditionInput | null> | null;
  or?: Array<ModelQuestionConditionInput | null> | null;
  not?: ModelQuestionConditionInput | null;
};

export type Question = {
  __typename: "Question";
  id: string;
  question?: string | null;
  answer?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateQuestionInput = {
  id: string;
  question?: string | null;
  answer?: string | null;
};

export type DeleteQuestionInput = {
  id: string;
};

export type CreateLoginInput = {
  id?: string | null;
  username?: string | null;
  login?: string | null;
};

export type ModelLoginConditionInput = {
  username?: ModelStringInput | null;
  login?: ModelStringInput | null;
  and?: Array<ModelLoginConditionInput | null> | null;
  or?: Array<ModelLoginConditionInput | null> | null;
  not?: ModelLoginConditionInput | null;
};

export type Login = {
  __typename: "Login";
  id: string;
  username?: string | null;
  login?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateLoginInput = {
  id: string;
  username?: string | null;
  login?: string | null;
};

export type DeleteLoginInput = {
  id: string;
};

export type CreateCityInput = {
  id?: string | null;
  name?: string | null;
  description?: string | null;
};

export type ModelCityConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelCityConditionInput | null> | null;
  or?: Array<ModelCityConditionInput | null> | null;
  not?: ModelCityConditionInput | null;
};

export type City = {
  __typename: "City";
  id: string;
  name?: string | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCityInput = {
  id: string;
  name?: string | null;
  description?: string | null;
};

export type DeleteCityInput = {
  id: string;
};

export type CreateAirportInput = {
  id?: string | null;
  name?: string | null;
  address?: string | null;
  description?: string | null;
};

export type ModelAirportConditionInput = {
  name?: ModelStringInput | null;
  address?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelAirportConditionInput | null> | null;
  or?: Array<ModelAirportConditionInput | null> | null;
  not?: ModelAirportConditionInput | null;
};

export type Airport = {
  __typename: "Airport";
  id: string;
  name?: string | null;
  address?: string | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAirportInput = {
  id: string;
  name?: string | null;
  address?: string | null;
  description?: string | null;
};

export type DeleteAirportInput = {
  id: string;
};

export type CreateUserInput = {
  id?: string | null;
  display_name?: string | null;
  username?: string | null;
  groups?: string | null;
  message?: string | null;
};

export type ModelUserConditionInput = {
  display_name?: ModelStringInput | null;
  username?: ModelStringInput | null;
  groups?: ModelStringInput | null;
  message?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type User = {
  __typename: "User";
  id: string;
  display_name?: string | null;
  username?: string | null;
  groups?: string | null;
  message?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserInput = {
  id: string;
  display_name?: string | null;
  username?: string | null;
  groups?: string | null;
  message?: string | null;
};

export type DeleteUserInput = {
  id: string;
};

export type CreateEventInput = {
  id?: string | null;
  name?: string | null;
  description?: string | null;
  date?: string | null;
  start?: string | null;
  stop?: string | null;
  image?: string | null;
  address?: string | null;
  address_name?: string | null;
  groups?: string | null;
};

export type ModelEventConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  date?: ModelStringInput | null;
  start?: ModelStringInput | null;
  stop?: ModelStringInput | null;
  image?: ModelStringInput | null;
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
  description?: string | null;
  date?: string | null;
  start?: string | null;
  stop?: string | null;
  image?: string | null;
  address?: string | null;
  address_name?: string | null;
  groups?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateEventInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  date?: string | null;
  start?: string | null;
  stop?: string | null;
  image?: string | null;
  address?: string | null;
  address_name?: string | null;
  groups?: string | null;
};

export type DeleteEventInput = {
  id: string;
};

export type CreateHotelInput = {
  id?: string | null;
  name?: string | null;
  address?: string | null;
  phone?: string | null;
  description?: string | null;
  image?: string | null;
  website?: string | null;
  room_block?: string | null;
};

export type ModelHotelConditionInput = {
  name?: ModelStringInput | null;
  address?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  description?: ModelStringInput | null;
  image?: ModelStringInput | null;
  website?: ModelStringInput | null;
  room_block?: ModelStringInput | null;
  and?: Array<ModelHotelConditionInput | null> | null;
  or?: Array<ModelHotelConditionInput | null> | null;
  not?: ModelHotelConditionInput | null;
};

export type Hotel = {
  __typename: "Hotel";
  id: string;
  name?: string | null;
  address?: string | null;
  phone?: string | null;
  description?: string | null;
  image?: string | null;
  website?: string | null;
  room_block?: string | null;
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
  website?: string | null;
  room_block?: string | null;
};

export type DeleteHotelInput = {
  id: string;
};

export type CreateUserSettingsInput = {
  id?: string | null;
  user?: string | null;
  language?: string | null;
  notifications?: boolean | null;
  email?: string | null;
};

export type ModelUserSettingsConditionInput = {
  user?: ModelStringInput | null;
  language?: ModelStringInput | null;
  notifications?: ModelBooleanInput | null;
  email?: ModelStringInput | null;
  and?: Array<ModelUserSettingsConditionInput | null> | null;
  or?: Array<ModelUserSettingsConditionInput | null> | null;
  not?: ModelUserSettingsConditionInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UserSettings = {
  __typename: "UserSettings";
  id: string;
  user?: string | null;
  language?: string | null;
  notifications?: boolean | null;
  email?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserSettingsInput = {
  id: string;
  user?: string | null;
  language?: string | null;
  notifications?: boolean | null;
  email?: string | null;
};

export type DeleteUserSettingsInput = {
  id: string;
};

export type CreateRestaurantInput = {
  id?: string | null;
  name: string;
  description: string;
  address: string;
};

export type ModelRestaurantConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  address?: ModelStringInput | null;
  and?: Array<ModelRestaurantConditionInput | null> | null;
  or?: Array<ModelRestaurantConditionInput | null> | null;
  not?: ModelRestaurantConditionInput | null;
};

export type Restaurant = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  address: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRestaurantInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  address?: string | null;
};

export type DeleteRestaurantInput = {
  id: string;
};

export type ModelAreaFilterInput = {
  id?: ModelIDInput | null;
  location?: ModelStringInput | null;
  description?: ModelStringInput | null;
  image?: ModelStringInput | null;
  and?: Array<ModelAreaFilterInput | null> | null;
  or?: Array<ModelAreaFilterInput | null> | null;
  not?: ModelAreaFilterInput | null;
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

export type ModelAreaConnection = {
  __typename: "ModelAreaConnection";
  items: Array<Area | null>;
  nextToken?: string | null;
};

export type ModelQuestionFilterInput = {
  id?: ModelIDInput | null;
  question?: ModelStringInput | null;
  answer?: ModelStringInput | null;
  and?: Array<ModelQuestionFilterInput | null> | null;
  or?: Array<ModelQuestionFilterInput | null> | null;
  not?: ModelQuestionFilterInput | null;
};

export type ModelQuestionConnection = {
  __typename: "ModelQuestionConnection";
  items: Array<Question | null>;
  nextToken?: string | null;
};

export type ModelLoginFilterInput = {
  id?: ModelIDInput | null;
  username?: ModelStringInput | null;
  login?: ModelStringInput | null;
  and?: Array<ModelLoginFilterInput | null> | null;
  or?: Array<ModelLoginFilterInput | null> | null;
  not?: ModelLoginFilterInput | null;
};

export type ModelLoginConnection = {
  __typename: "ModelLoginConnection";
  items: Array<Login | null>;
  nextToken?: string | null;
};

export type ModelCityFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelCityFilterInput | null> | null;
  or?: Array<ModelCityFilterInput | null> | null;
  not?: ModelCityFilterInput | null;
};

export type ModelCityConnection = {
  __typename: "ModelCityConnection";
  items: Array<City | null>;
  nextToken?: string | null;
};

export type ModelAirportFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  address?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelAirportFilterInput | null> | null;
  or?: Array<ModelAirportFilterInput | null> | null;
  not?: ModelAirportFilterInput | null;
};

export type ModelAirportConnection = {
  __typename: "ModelAirportConnection";
  items: Array<Airport | null>;
  nextToken?: string | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  display_name?: ModelStringInput | null;
  username?: ModelStringInput | null;
  groups?: ModelStringInput | null;
  message?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection";
  items: Array<User | null>;
  nextToken?: string | null;
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  date?: ModelStringInput | null;
  start?: ModelStringInput | null;
  stop?: ModelStringInput | null;
  image?: ModelStringInput | null;
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

export type ModelHotelFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  address?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  description?: ModelStringInput | null;
  image?: ModelStringInput | null;
  website?: ModelStringInput | null;
  room_block?: ModelStringInput | null;
  and?: Array<ModelHotelFilterInput | null> | null;
  or?: Array<ModelHotelFilterInput | null> | null;
  not?: ModelHotelFilterInput | null;
};

export type ModelHotelConnection = {
  __typename: "ModelHotelConnection";
  items: Array<Hotel | null>;
  nextToken?: string | null;
};

export type ModelUserSettingsFilterInput = {
  id?: ModelIDInput | null;
  user?: ModelStringInput | null;
  language?: ModelStringInput | null;
  notifications?: ModelBooleanInput | null;
  email?: ModelStringInput | null;
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
  address?: ModelStringInput | null;
  and?: Array<ModelRestaurantFilterInput | null> | null;
  or?: Array<ModelRestaurantFilterInput | null> | null;
  not?: ModelRestaurantFilterInput | null;
};

export type ModelRestaurantConnection = {
  __typename: "ModelRestaurantConnection";
  items: Array<Restaurant | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionAreaFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  location?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  image?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionAreaFilterInput | null> | null;
  or?: Array<ModelSubscriptionAreaFilterInput | null> | null;
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

export type ModelSubscriptionQuestionFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  question?: ModelSubscriptionStringInput | null;
  answer?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionQuestionFilterInput | null> | null;
  or?: Array<ModelSubscriptionQuestionFilterInput | null> | null;
};

export type ModelSubscriptionLoginFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  username?: ModelSubscriptionStringInput | null;
  login?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionLoginFilterInput | null> | null;
  or?: Array<ModelSubscriptionLoginFilterInput | null> | null;
};

export type ModelSubscriptionCityFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionCityFilterInput | null> | null;
  or?: Array<ModelSubscriptionCityFilterInput | null> | null;
};

export type ModelSubscriptionAirportFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  address?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionAirportFilterInput | null> | null;
  or?: Array<ModelSubscriptionAirportFilterInput | null> | null;
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  display_name?: ModelSubscriptionStringInput | null;
  username?: ModelSubscriptionStringInput | null;
  groups?: ModelSubscriptionStringInput | null;
  message?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionUserFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserFilterInput | null> | null;
};

export type ModelSubscriptionEventFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  date?: ModelSubscriptionStringInput | null;
  start?: ModelSubscriptionStringInput | null;
  stop?: ModelSubscriptionStringInput | null;
  image?: ModelSubscriptionStringInput | null;
  address?: ModelSubscriptionStringInput | null;
  address_name?: ModelSubscriptionStringInput | null;
  groups?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionEventFilterInput | null> | null;
  or?: Array<ModelSubscriptionEventFilterInput | null> | null;
};

export type ModelSubscriptionHotelFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  address?: ModelSubscriptionStringInput | null;
  phone?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  image?: ModelSubscriptionStringInput | null;
  website?: ModelSubscriptionStringInput | null;
  room_block?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionHotelFilterInput | null> | null;
  or?: Array<ModelSubscriptionHotelFilterInput | null> | null;
};

export type ModelSubscriptionUserSettingsFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  user?: ModelSubscriptionStringInput | null;
  language?: ModelSubscriptionStringInput | null;
  notifications?: ModelSubscriptionBooleanInput | null;
  email?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionUserSettingsFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserSettingsFilterInput | null> | null;
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type ModelSubscriptionRestaurantFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  address?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionRestaurantFilterInput | null> | null;
  or?: Array<ModelSubscriptionRestaurantFilterInput | null> | null;
};

export type CreateAreaMutation = {
  __typename: "Area";
  id: string;
  location?: string | null;
  description?: string | null;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAreaMutation = {
  __typename: "Area";
  id: string;
  location?: string | null;
  description?: string | null;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteAreaMutation = {
  __typename: "Area";
  id: string;
  location?: string | null;
  description?: string | null;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateQuestionMutation = {
  __typename: "Question";
  id: string;
  question?: string | null;
  answer?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateQuestionMutation = {
  __typename: "Question";
  id: string;
  question?: string | null;
  answer?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteQuestionMutation = {
  __typename: "Question";
  id: string;
  question?: string | null;
  answer?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateLoginMutation = {
  __typename: "Login";
  id: string;
  username?: string | null;
  login?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateLoginMutation = {
  __typename: "Login";
  id: string;
  username?: string | null;
  login?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteLoginMutation = {
  __typename: "Login";
  id: string;
  username?: string | null;
  login?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateCityMutation = {
  __typename: "City";
  id: string;
  name?: string | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCityMutation = {
  __typename: "City";
  id: string;
  name?: string | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCityMutation = {
  __typename: "City";
  id: string;
  name?: string | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateAirportMutation = {
  __typename: "Airport";
  id: string;
  name?: string | null;
  address?: string | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAirportMutation = {
  __typename: "Airport";
  id: string;
  name?: string | null;
  address?: string | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteAirportMutation = {
  __typename: "Airport";
  id: string;
  name?: string | null;
  address?: string | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  display_name?: string | null;
  username?: string | null;
  groups?: string | null;
  message?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  display_name?: string | null;
  username?: string | null;
  groups?: string | null;
  message?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  display_name?: string | null;
  username?: string | null;
  groups?: string | null;
  message?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateEventMutation = {
  __typename: "Event";
  id: string;
  name?: string | null;
  description?: string | null;
  date?: string | null;
  start?: string | null;
  stop?: string | null;
  image?: string | null;
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
  description?: string | null;
  date?: string | null;
  start?: string | null;
  stop?: string | null;
  image?: string | null;
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
  description?: string | null;
  date?: string | null;
  start?: string | null;
  stop?: string | null;
  image?: string | null;
  address?: string | null;
  address_name?: string | null;
  groups?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateHotelMutation = {
  __typename: "Hotel";
  id: string;
  name?: string | null;
  address?: string | null;
  phone?: string | null;
  description?: string | null;
  image?: string | null;
  website?: string | null;
  room_block?: string | null;
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
  website?: string | null;
  room_block?: string | null;
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
  website?: string | null;
  room_block?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateUserSettingsMutation = {
  __typename: "UserSettings";
  id: string;
  user?: string | null;
  language?: string | null;
  notifications?: boolean | null;
  email?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserSettingsMutation = {
  __typename: "UserSettings";
  id: string;
  user?: string | null;
  language?: string | null;
  notifications?: boolean | null;
  email?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUserSettingsMutation = {
  __typename: "UserSettings";
  id: string;
  user?: string | null;
  language?: string | null;
  notifications?: boolean | null;
  email?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  address: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  address: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  address: string;
  createdAt: string;
  updatedAt: string;
};

export type GetAreaQuery = {
  __typename: "Area";
  id: string;
  location?: string | null;
  description?: string | null;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListAreasQuery = {
  __typename: "ModelAreaConnection";
  items: Array<{
    __typename: "Area";
    id: string;
    location?: string | null;
    description?: string | null;
    image?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetQuestionQuery = {
  __typename: "Question";
  id: string;
  question?: string | null;
  answer?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListQuestionsQuery = {
  __typename: "ModelQuestionConnection";
  items: Array<{
    __typename: "Question";
    id: string;
    question?: string | null;
    answer?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetLoginQuery = {
  __typename: "Login";
  id: string;
  username?: string | null;
  login?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListLoginsQuery = {
  __typename: "ModelLoginConnection";
  items: Array<{
    __typename: "Login";
    id: string;
    username?: string | null;
    login?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetCityQuery = {
  __typename: "City";
  id: string;
  name?: string | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCitiesQuery = {
  __typename: "ModelCityConnection";
  items: Array<{
    __typename: "City";
    id: string;
    name?: string | null;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetAirportQuery = {
  __typename: "Airport";
  id: string;
  name?: string | null;
  address?: string | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListAirportsQuery = {
  __typename: "ModelAirportConnection";
  items: Array<{
    __typename: "Airport";
    id: string;
    name?: string | null;
    address?: string | null;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  display_name?: string | null;
  username?: string | null;
  groups?: string | null;
  message?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    display_name?: string | null;
    username?: string | null;
    groups?: string | null;
    message?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetEventQuery = {
  __typename: "Event";
  id: string;
  name?: string | null;
  description?: string | null;
  date?: string | null;
  start?: string | null;
  stop?: string | null;
  image?: string | null;
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
    description?: string | null;
    date?: string | null;
    start?: string | null;
    stop?: string | null;
    image?: string | null;
    address?: string | null;
    address_name?: string | null;
    groups?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetHotelQuery = {
  __typename: "Hotel";
  id: string;
  name?: string | null;
  address?: string | null;
  phone?: string | null;
  description?: string | null;
  image?: string | null;
  website?: string | null;
  room_block?: string | null;
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
    website?: string | null;
    room_block?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetUserSettingsQuery = {
  __typename: "UserSettings";
  id: string;
  user?: string | null;
  language?: string | null;
  notifications?: boolean | null;
  email?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListUserSettingsQuery = {
  __typename: "ModelUserSettingsConnection";
  items: Array<{
    __typename: "UserSettings";
    id: string;
    user?: string | null;
    language?: string | null;
    notifications?: boolean | null;
    email?: string | null;
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
  address: string;
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
    address: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateAreaSubscription = {
  __typename: "Area";
  id: string;
  location?: string | null;
  description?: string | null;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateAreaSubscription = {
  __typename: "Area";
  id: string;
  location?: string | null;
  description?: string | null;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteAreaSubscription = {
  __typename: "Area";
  id: string;
  location?: string | null;
  description?: string | null;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateQuestionSubscription = {
  __typename: "Question";
  id: string;
  question?: string | null;
  answer?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateQuestionSubscription = {
  __typename: "Question";
  id: string;
  question?: string | null;
  answer?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteQuestionSubscription = {
  __typename: "Question";
  id: string;
  question?: string | null;
  answer?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateLoginSubscription = {
  __typename: "Login";
  id: string;
  username?: string | null;
  login?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateLoginSubscription = {
  __typename: "Login";
  id: string;
  username?: string | null;
  login?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteLoginSubscription = {
  __typename: "Login";
  id: string;
  username?: string | null;
  login?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCitySubscription = {
  __typename: "City";
  id: string;
  name?: string | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCitySubscription = {
  __typename: "City";
  id: string;
  name?: string | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCitySubscription = {
  __typename: "City";
  id: string;
  name?: string | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateAirportSubscription = {
  __typename: "Airport";
  id: string;
  name?: string | null;
  address?: string | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateAirportSubscription = {
  __typename: "Airport";
  id: string;
  name?: string | null;
  address?: string | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteAirportSubscription = {
  __typename: "Airport";
  id: string;
  name?: string | null;
  address?: string | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  display_name?: string | null;
  username?: string | null;
  groups?: string | null;
  message?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  display_name?: string | null;
  username?: string | null;
  groups?: string | null;
  message?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  display_name?: string | null;
  username?: string | null;
  groups?: string | null;
  message?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateEventSubscription = {
  __typename: "Event";
  id: string;
  name?: string | null;
  description?: string | null;
  date?: string | null;
  start?: string | null;
  stop?: string | null;
  image?: string | null;
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
  description?: string | null;
  date?: string | null;
  start?: string | null;
  stop?: string | null;
  image?: string | null;
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
  description?: string | null;
  date?: string | null;
  start?: string | null;
  stop?: string | null;
  image?: string | null;
  address?: string | null;
  address_name?: string | null;
  groups?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateHotelSubscription = {
  __typename: "Hotel";
  id: string;
  name?: string | null;
  address?: string | null;
  phone?: string | null;
  description?: string | null;
  image?: string | null;
  website?: string | null;
  room_block?: string | null;
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
  website?: string | null;
  room_block?: string | null;
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
  website?: string | null;
  room_block?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateUserSettingsSubscription = {
  __typename: "UserSettings";
  id: string;
  user?: string | null;
  language?: string | null;
  notifications?: boolean | null;
  email?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUserSettingsSubscription = {
  __typename: "UserSettings";
  id: string;
  user?: string | null;
  language?: string | null;
  notifications?: boolean | null;
  email?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUserSettingsSubscription = {
  __typename: "UserSettings";
  id: string;
  user?: string | null;
  language?: string | null;
  notifications?: boolean | null;
  email?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  address: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  address: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  address: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateArea(
    input: CreateAreaInput,
    condition?: ModelAreaConditionInput
  ): Promise<CreateAreaMutation> {
    const statement = `mutation CreateArea($input: CreateAreaInput!, $condition: ModelAreaConditionInput) {
        createArea(input: $input, condition: $condition) {
          __typename
          id
          location
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
    return <CreateAreaMutation>response.data.createArea;
  }
  async UpdateArea(
    input: UpdateAreaInput,
    condition?: ModelAreaConditionInput
  ): Promise<UpdateAreaMutation> {
    const statement = `mutation UpdateArea($input: UpdateAreaInput!, $condition: ModelAreaConditionInput) {
        updateArea(input: $input, condition: $condition) {
          __typename
          id
          location
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
    return <UpdateAreaMutation>response.data.updateArea;
  }
  async DeleteArea(
    input: DeleteAreaInput,
    condition?: ModelAreaConditionInput
  ): Promise<DeleteAreaMutation> {
    const statement = `mutation DeleteArea($input: DeleteAreaInput!, $condition: ModelAreaConditionInput) {
        deleteArea(input: $input, condition: $condition) {
          __typename
          id
          location
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
    return <DeleteAreaMutation>response.data.deleteArea;
  }
  async CreateQuestion(
    input: CreateQuestionInput,
    condition?: ModelQuestionConditionInput
  ): Promise<CreateQuestionMutation> {
    const statement = `mutation CreateQuestion($input: CreateQuestionInput!, $condition: ModelQuestionConditionInput) {
        createQuestion(input: $input, condition: $condition) {
          __typename
          id
          question
          answer
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
    return <CreateQuestionMutation>response.data.createQuestion;
  }
  async UpdateQuestion(
    input: UpdateQuestionInput,
    condition?: ModelQuestionConditionInput
  ): Promise<UpdateQuestionMutation> {
    const statement = `mutation UpdateQuestion($input: UpdateQuestionInput!, $condition: ModelQuestionConditionInput) {
        updateQuestion(input: $input, condition: $condition) {
          __typename
          id
          question
          answer
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
    return <UpdateQuestionMutation>response.data.updateQuestion;
  }
  async DeleteQuestion(
    input: DeleteQuestionInput,
    condition?: ModelQuestionConditionInput
  ): Promise<DeleteQuestionMutation> {
    const statement = `mutation DeleteQuestion($input: DeleteQuestionInput!, $condition: ModelQuestionConditionInput) {
        deleteQuestion(input: $input, condition: $condition) {
          __typename
          id
          question
          answer
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
    return <DeleteQuestionMutation>response.data.deleteQuestion;
  }
  async CreateLogin(
    input: CreateLoginInput,
    condition?: ModelLoginConditionInput
  ): Promise<CreateLoginMutation> {
    const statement = `mutation CreateLogin($input: CreateLoginInput!, $condition: ModelLoginConditionInput) {
        createLogin(input: $input, condition: $condition) {
          __typename
          id
          username
          login
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
    return <CreateLoginMutation>response.data.createLogin;
  }
  async UpdateLogin(
    input: UpdateLoginInput,
    condition?: ModelLoginConditionInput
  ): Promise<UpdateLoginMutation> {
    const statement = `mutation UpdateLogin($input: UpdateLoginInput!, $condition: ModelLoginConditionInput) {
        updateLogin(input: $input, condition: $condition) {
          __typename
          id
          username
          login
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
    return <UpdateLoginMutation>response.data.updateLogin;
  }
  async DeleteLogin(
    input: DeleteLoginInput,
    condition?: ModelLoginConditionInput
  ): Promise<DeleteLoginMutation> {
    const statement = `mutation DeleteLogin($input: DeleteLoginInput!, $condition: ModelLoginConditionInput) {
        deleteLogin(input: $input, condition: $condition) {
          __typename
          id
          username
          login
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
    return <DeleteLoginMutation>response.data.deleteLogin;
  }
  async CreateCity(
    input: CreateCityInput,
    condition?: ModelCityConditionInput
  ): Promise<CreateCityMutation> {
    const statement = `mutation CreateCity($input: CreateCityInput!, $condition: ModelCityConditionInput) {
        createCity(input: $input, condition: $condition) {
          __typename
          id
          name
          description
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
    return <CreateCityMutation>response.data.createCity;
  }
  async UpdateCity(
    input: UpdateCityInput,
    condition?: ModelCityConditionInput
  ): Promise<UpdateCityMutation> {
    const statement = `mutation UpdateCity($input: UpdateCityInput!, $condition: ModelCityConditionInput) {
        updateCity(input: $input, condition: $condition) {
          __typename
          id
          name
          description
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
    return <UpdateCityMutation>response.data.updateCity;
  }
  async DeleteCity(
    input: DeleteCityInput,
    condition?: ModelCityConditionInput
  ): Promise<DeleteCityMutation> {
    const statement = `mutation DeleteCity($input: DeleteCityInput!, $condition: ModelCityConditionInput) {
        deleteCity(input: $input, condition: $condition) {
          __typename
          id
          name
          description
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
    return <DeleteCityMutation>response.data.deleteCity;
  }
  async CreateAirport(
    input: CreateAirportInput,
    condition?: ModelAirportConditionInput
  ): Promise<CreateAirportMutation> {
    const statement = `mutation CreateAirport($input: CreateAirportInput!, $condition: ModelAirportConditionInput) {
        createAirport(input: $input, condition: $condition) {
          __typename
          id
          name
          address
          description
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
    return <CreateAirportMutation>response.data.createAirport;
  }
  async UpdateAirport(
    input: UpdateAirportInput,
    condition?: ModelAirportConditionInput
  ): Promise<UpdateAirportMutation> {
    const statement = `mutation UpdateAirport($input: UpdateAirportInput!, $condition: ModelAirportConditionInput) {
        updateAirport(input: $input, condition: $condition) {
          __typename
          id
          name
          address
          description
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
    return <UpdateAirportMutation>response.data.updateAirport;
  }
  async DeleteAirport(
    input: DeleteAirportInput,
    condition?: ModelAirportConditionInput
  ): Promise<DeleteAirportMutation> {
    const statement = `mutation DeleteAirport($input: DeleteAirportInput!, $condition: ModelAirportConditionInput) {
        deleteAirport(input: $input, condition: $condition) {
          __typename
          id
          name
          address
          description
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
    return <DeleteAirportMutation>response.data.deleteAirport;
  }
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          display_name
          username
          groups
          message
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
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          display_name
          username
          groups
          message
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
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          display_name
          username
          groups
          message
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
    return <DeleteUserMutation>response.data.deleteUser;
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
          description
          date
          start
          stop
          image
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
          description
          date
          start
          stop
          image
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
          description
          date
          start
          stop
          image
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
          website
          room_block
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
          website
          room_block
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
          website
          room_block
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
          notifications
          email
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
          notifications
          email
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
          notifications
          email
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
          address
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
          address
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
          address
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
  async GetArea(id: string): Promise<GetAreaQuery> {
    const statement = `query GetArea($id: ID!) {
        getArea(id: $id) {
          __typename
          id
          location
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
    return <GetAreaQuery>response.data.getArea;
  }
  async ListAreas(
    filter?: ModelAreaFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAreasQuery> {
    const statement = `query ListAreas($filter: ModelAreaFilterInput, $limit: Int, $nextToken: String) {
        listAreas(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            location
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
    return <ListAreasQuery>response.data.listAreas;
  }
  async GetQuestion(id: string): Promise<GetQuestionQuery> {
    const statement = `query GetQuestion($id: ID!) {
        getQuestion(id: $id) {
          __typename
          id
          question
          answer
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
    return <GetQuestionQuery>response.data.getQuestion;
  }
  async ListQuestions(
    filter?: ModelQuestionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListQuestionsQuery> {
    const statement = `query ListQuestions($filter: ModelQuestionFilterInput, $limit: Int, $nextToken: String) {
        listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            question
            answer
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
    return <ListQuestionsQuery>response.data.listQuestions;
  }
  async GetLogin(id: string): Promise<GetLoginQuery> {
    const statement = `query GetLogin($id: ID!) {
        getLogin(id: $id) {
          __typename
          id
          username
          login
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
    return <GetLoginQuery>response.data.getLogin;
  }
  async ListLogins(
    filter?: ModelLoginFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListLoginsQuery> {
    const statement = `query ListLogins($filter: ModelLoginFilterInput, $limit: Int, $nextToken: String) {
        listLogins(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            username
            login
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
    return <ListLoginsQuery>response.data.listLogins;
  }
  async GetCity(id: string): Promise<GetCityQuery> {
    const statement = `query GetCity($id: ID!) {
        getCity(id: $id) {
          __typename
          id
          name
          description
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
    return <GetCityQuery>response.data.getCity;
  }
  async ListCities(
    filter?: ModelCityFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCitiesQuery> {
    const statement = `query ListCities($filter: ModelCityFilterInput, $limit: Int, $nextToken: String) {
        listCities(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
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
    return <ListCitiesQuery>response.data.listCities;
  }
  async GetAirport(id: string): Promise<GetAirportQuery> {
    const statement = `query GetAirport($id: ID!) {
        getAirport(id: $id) {
          __typename
          id
          name
          address
          description
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
    return <GetAirportQuery>response.data.getAirport;
  }
  async ListAirports(
    filter?: ModelAirportFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAirportsQuery> {
    const statement = `query ListAirports($filter: ModelAirportFilterInput, $limit: Int, $nextToken: String) {
        listAirports(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            address
            description
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
    return <ListAirportsQuery>response.data.listAirports;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          display_name
          username
          groups
          message
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
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            display_name
            username
            groups
            message
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
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetEvent(id: string): Promise<GetEventQuery> {
    const statement = `query GetEvent($id: ID!) {
        getEvent(id: $id) {
          __typename
          id
          name
          description
          date
          start
          stop
          image
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
            description
            date
            start
            stop
            image
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
          website
          room_block
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
            website
            room_block
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
  async GetUserSettings(id: string): Promise<GetUserSettingsQuery> {
    const statement = `query GetUserSettings($id: ID!) {
        getUserSettings(id: $id) {
          __typename
          id
          user
          language
          notifications
          email
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
            notifications
            email
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
          address
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
            address
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
  OnCreateAreaListener(
    filter?: ModelSubscriptionAreaFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateArea">>
  > {
    const statement = `subscription OnCreateArea($filter: ModelSubscriptionAreaFilterInput) {
        onCreateArea(filter: $filter) {
          __typename
          id
          location
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateArea">>
    >;
  }

  OnUpdateAreaListener(
    filter?: ModelSubscriptionAreaFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateArea">>
  > {
    const statement = `subscription OnUpdateArea($filter: ModelSubscriptionAreaFilterInput) {
        onUpdateArea(filter: $filter) {
          __typename
          id
          location
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateArea">>
    >;
  }

  OnDeleteAreaListener(
    filter?: ModelSubscriptionAreaFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteArea">>
  > {
    const statement = `subscription OnDeleteArea($filter: ModelSubscriptionAreaFilterInput) {
        onDeleteArea(filter: $filter) {
          __typename
          id
          location
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteArea">>
    >;
  }

  OnCreateQuestionListener(
    filter?: ModelSubscriptionQuestionFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateQuestion">>
  > {
    const statement = `subscription OnCreateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
        onCreateQuestion(filter: $filter) {
          __typename
          id
          question
          answer
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateQuestion">>
    >;
  }

  OnUpdateQuestionListener(
    filter?: ModelSubscriptionQuestionFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateQuestion">>
  > {
    const statement = `subscription OnUpdateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
        onUpdateQuestion(filter: $filter) {
          __typename
          id
          question
          answer
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateQuestion">>
    >;
  }

  OnDeleteQuestionListener(
    filter?: ModelSubscriptionQuestionFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteQuestion">>
  > {
    const statement = `subscription OnDeleteQuestion($filter: ModelSubscriptionQuestionFilterInput) {
        onDeleteQuestion(filter: $filter) {
          __typename
          id
          question
          answer
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteQuestion">>
    >;
  }

  OnCreateLoginListener(
    filter?: ModelSubscriptionLoginFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateLogin">>
  > {
    const statement = `subscription OnCreateLogin($filter: ModelSubscriptionLoginFilterInput) {
        onCreateLogin(filter: $filter) {
          __typename
          id
          username
          login
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateLogin">>
    >;
  }

  OnUpdateLoginListener(
    filter?: ModelSubscriptionLoginFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateLogin">>
  > {
    const statement = `subscription OnUpdateLogin($filter: ModelSubscriptionLoginFilterInput) {
        onUpdateLogin(filter: $filter) {
          __typename
          id
          username
          login
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateLogin">>
    >;
  }

  OnDeleteLoginListener(
    filter?: ModelSubscriptionLoginFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteLogin">>
  > {
    const statement = `subscription OnDeleteLogin($filter: ModelSubscriptionLoginFilterInput) {
        onDeleteLogin(filter: $filter) {
          __typename
          id
          username
          login
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteLogin">>
    >;
  }

  OnCreateCityListener(
    filter?: ModelSubscriptionCityFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCity">>
  > {
    const statement = `subscription OnCreateCity($filter: ModelSubscriptionCityFilterInput) {
        onCreateCity(filter: $filter) {
          __typename
          id
          name
          description
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCity">>
    >;
  }

  OnUpdateCityListener(
    filter?: ModelSubscriptionCityFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCity">>
  > {
    const statement = `subscription OnUpdateCity($filter: ModelSubscriptionCityFilterInput) {
        onUpdateCity(filter: $filter) {
          __typename
          id
          name
          description
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCity">>
    >;
  }

  OnDeleteCityListener(
    filter?: ModelSubscriptionCityFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCity">>
  > {
    const statement = `subscription OnDeleteCity($filter: ModelSubscriptionCityFilterInput) {
        onDeleteCity(filter: $filter) {
          __typename
          id
          name
          description
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCity">>
    >;
  }

  OnCreateAirportListener(
    filter?: ModelSubscriptionAirportFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateAirport">>
  > {
    const statement = `subscription OnCreateAirport($filter: ModelSubscriptionAirportFilterInput) {
        onCreateAirport(filter: $filter) {
          __typename
          id
          name
          address
          description
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateAirport">>
    >;
  }

  OnUpdateAirportListener(
    filter?: ModelSubscriptionAirportFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateAirport">>
  > {
    const statement = `subscription OnUpdateAirport($filter: ModelSubscriptionAirportFilterInput) {
        onUpdateAirport(filter: $filter) {
          __typename
          id
          name
          address
          description
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateAirport">>
    >;
  }

  OnDeleteAirportListener(
    filter?: ModelSubscriptionAirportFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteAirport">>
  > {
    const statement = `subscription OnDeleteAirport($filter: ModelSubscriptionAirportFilterInput) {
        onDeleteAirport(filter: $filter) {
          __typename
          id
          name
          address
          description
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteAirport">>
    >;
  }

  OnCreateUserListener(
    filter?: ModelSubscriptionUserFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUser">>
  > {
    const statement = `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
        onCreateUser(filter: $filter) {
          __typename
          id
          display_name
          username
          groups
          message
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUser">>
    >;
  }

  OnUpdateUserListener(
    filter?: ModelSubscriptionUserFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUser">>
  > {
    const statement = `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
        onUpdateUser(filter: $filter) {
          __typename
          id
          display_name
          username
          groups
          message
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUser">>
    >;
  }

  OnDeleteUserListener(
    filter?: ModelSubscriptionUserFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUser">>
  > {
    const statement = `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
        onDeleteUser(filter: $filter) {
          __typename
          id
          display_name
          username
          groups
          message
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUser">>
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
          description
          date
          start
          stop
          image
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
          description
          date
          start
          stop
          image
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
          description
          date
          start
          stop
          image
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
          website
          room_block
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
          website
          room_block
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
          website
          room_block
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
          notifications
          email
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
          notifications
          email
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
          notifications
          email
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
          address
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
          address
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
          address
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

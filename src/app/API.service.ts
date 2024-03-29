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
  onCreateActivity: OnCreateActivitySubscription;
  onUpdateActivity: OnUpdateActivitySubscription;
  onDeleteActivity: OnDeleteActivitySubscription;
  onCreateCharity: OnCreateCharitySubscription;
  onUpdateCharity: OnUpdateCharitySubscription;
  onDeleteCharity: OnDeleteCharitySubscription;
  onCreateRSVP: OnCreateRSVPSubscription;
  onUpdateRSVP: OnUpdateRSVPSubscription;
  onDeleteRSVP: OnDeleteRSVPSubscription;
  onCreateWelcome: OnCreateWelcomeSubscription;
  onUpdateWelcome: OnUpdateWelcomeSubscription;
  onDeleteWelcome: OnDeleteWelcomeSubscription;
  onCreatePicture: OnCreatePictureSubscription;
  onUpdatePicture: OnUpdatePictureSubscription;
  onDeletePicture: OnDeletePictureSubscription;
  onCreateStory: OnCreateStorySubscription;
  onUpdateStory: OnUpdateStorySubscription;
  onDeleteStory: OnDeleteStorySubscription;
  onCreateTranslation: OnCreateTranslationSubscription;
  onUpdateTranslation: OnUpdateTranslationSubscription;
  onDeleteTranslation: OnDeleteTranslationSubscription;
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

export type CreateActivityInput = {
  id?: string | null;
  name?: string | null;
  description?: string | null;
  location?: string | null;
  address?: string | null;
  image?: string | null;
  url?: string | null;
};

export type ModelActivityConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  location?: ModelStringInput | null;
  address?: ModelStringInput | null;
  image?: ModelStringInput | null;
  url?: ModelStringInput | null;
  and?: Array<ModelActivityConditionInput | null> | null;
  or?: Array<ModelActivityConditionInput | null> | null;
  not?: ModelActivityConditionInput | null;
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

export type Activity = {
  __typename: "Activity";
  id: string;
  name?: string | null;
  description?: string | null;
  location?: string | null;
  address?: string | null;
  image?: string | null;
  url?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateActivityInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  location?: string | null;
  address?: string | null;
  image?: string | null;
  url?: string | null;
};

export type DeleteActivityInput = {
  id: string;
};

export type CreateCharityInput = {
  id?: string | null;
  name?: string | null;
  link?: string | null;
  description?: string | null;
  image?: string | null;
};

export type ModelCharityConditionInput = {
  name?: ModelStringInput | null;
  link?: ModelStringInput | null;
  description?: ModelStringInput | null;
  image?: ModelStringInput | null;
  and?: Array<ModelCharityConditionInput | null> | null;
  or?: Array<ModelCharityConditionInput | null> | null;
  not?: ModelCharityConditionInput | null;
};

export type Charity = {
  __typename: "Charity";
  id: string;
  name?: string | null;
  link?: string | null;
  description?: string | null;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCharityInput = {
  id: string;
  name?: string | null;
  link?: string | null;
  description?: string | null;
  image?: string | null;
};

export type DeleteCharityInput = {
  id: string;
};

export type CreateRSVPInput = {
  id?: string | null;
  username?: string | null;
  coming?: string | null;
  info?: string | null;
  time?: string | null;
};

export type ModelRSVPConditionInput = {
  username?: ModelStringInput | null;
  coming?: ModelStringInput | null;
  info?: ModelStringInput | null;
  time?: ModelStringInput | null;
  and?: Array<ModelRSVPConditionInput | null> | null;
  or?: Array<ModelRSVPConditionInput | null> | null;
  not?: ModelRSVPConditionInput | null;
};

export type RSVP = {
  __typename: "RSVP";
  id: string;
  username?: string | null;
  coming?: string | null;
  info?: string | null;
  time?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRSVPInput = {
  id: string;
  username?: string | null;
  coming?: string | null;
  info?: string | null;
  time?: string | null;
};

export type DeleteRSVPInput = {
  id: string;
};

export type CreateWelcomeInput = {
  id?: string | null;
  header?: string | null;
  image?: string | null;
  body?: string | null;
  footer?: string | null;
};

export type ModelWelcomeConditionInput = {
  header?: ModelStringInput | null;
  image?: ModelStringInput | null;
  body?: ModelStringInput | null;
  footer?: ModelStringInput | null;
  and?: Array<ModelWelcomeConditionInput | null> | null;
  or?: Array<ModelWelcomeConditionInput | null> | null;
  not?: ModelWelcomeConditionInput | null;
};

export type Welcome = {
  __typename: "Welcome";
  id: string;
  header?: string | null;
  image?: string | null;
  body?: string | null;
  footer?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateWelcomeInput = {
  id: string;
  header?: string | null;
  image?: string | null;
  body?: string | null;
  footer?: string | null;
};

export type DeleteWelcomeInput = {
  id: string;
};

export type CreatePictureInput = {
  id?: string | null;
  itemImageSrc?: string | null;
  cols?: number | null;
  rows?: number | null;
  alt?: string | null;
  frameSrc?: string | null;
  frameCut?: number | null;
  frameRepeat?: string | null;
};

export type ModelPictureConditionInput = {
  itemImageSrc?: ModelStringInput | null;
  cols?: ModelIntInput | null;
  rows?: ModelIntInput | null;
  alt?: ModelStringInput | null;
  frameSrc?: ModelStringInput | null;
  frameCut?: ModelIntInput | null;
  frameRepeat?: ModelStringInput | null;
  and?: Array<ModelPictureConditionInput | null> | null;
  or?: Array<ModelPictureConditionInput | null> | null;
  not?: ModelPictureConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Picture = {
  __typename: "Picture";
  id: string;
  itemImageSrc?: string | null;
  cols?: number | null;
  rows?: number | null;
  alt?: string | null;
  frameSrc?: string | null;
  frameCut?: number | null;
  frameRepeat?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePictureInput = {
  id: string;
  itemImageSrc?: string | null;
  cols?: number | null;
  rows?: number | null;
  alt?: string | null;
  frameSrc?: string | null;
  frameCut?: number | null;
  frameRepeat?: string | null;
};

export type DeletePictureInput = {
  id: string;
};

export type CreateStoryInput = {
  id?: string | null;
  body?: string | null;
  image?: string | null;
  header?: string | null;
  footer?: string | null;
};

export type ModelStoryConditionInput = {
  body?: ModelStringInput | null;
  image?: ModelStringInput | null;
  header?: ModelStringInput | null;
  footer?: ModelStringInput | null;
  and?: Array<ModelStoryConditionInput | null> | null;
  or?: Array<ModelStoryConditionInput | null> | null;
  not?: ModelStoryConditionInput | null;
};

export type Story = {
  __typename: "Story";
  id: string;
  body?: string | null;
  image?: string | null;
  header?: string | null;
  footer?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateStoryInput = {
  id: string;
  body?: string | null;
  image?: string | null;
  header?: string | null;
  footer?: string | null;
};

export type DeleteStoryInput = {
  id: string;
};

export type CreateTranslationInput = {
  id?: string | null;
  key?: string | null;
  en?: string | null;
  ko?: string | null;
};

export type ModelTranslationConditionInput = {
  key?: ModelStringInput | null;
  en?: ModelStringInput | null;
  ko?: ModelStringInput | null;
  and?: Array<ModelTranslationConditionInput | null> | null;
  or?: Array<ModelTranslationConditionInput | null> | null;
  not?: ModelTranslationConditionInput | null;
};

export type Translation = {
  __typename: "Translation";
  id: string;
  key?: string | null;
  en?: string | null;
  ko?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTranslationInput = {
  id: string;
  key?: string | null;
  en?: string | null;
  ko?: string | null;
};

export type DeleteTranslationInput = {
  id: string;
};

export type CreateAreaInput = {
  id?: string | null;
  location?: string | null;
  description?: string | null;
  image?: string | null;
  website?: string | null;
};

export type ModelAreaConditionInput = {
  location?: ModelStringInput | null;
  description?: ModelStringInput | null;
  image?: ModelStringInput | null;
  website?: ModelStringInput | null;
  and?: Array<ModelAreaConditionInput | null> | null;
  or?: Array<ModelAreaConditionInput | null> | null;
  not?: ModelAreaConditionInput | null;
};

export type Area = {
  __typename: "Area";
  id: string;
  location?: string | null;
  description?: string | null;
  image?: string | null;
  website?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAreaInput = {
  id: string;
  location?: string | null;
  description?: string | null;
  image?: string | null;
  website?: string | null;
};

export type DeleteAreaInput = {
  id: string;
};

export type CreateQuestionInput = {
  id?: string | null;
  question?: string | null;
  answer?: string | null;
  username?: string | null;
  group?: string | null;
};

export type ModelQuestionConditionInput = {
  question?: ModelStringInput | null;
  answer?: ModelStringInput | null;
  username?: ModelStringInput | null;
  group?: ModelStringInput | null;
  and?: Array<ModelQuestionConditionInput | null> | null;
  or?: Array<ModelQuestionConditionInput | null> | null;
  not?: ModelQuestionConditionInput | null;
};

export type Question = {
  __typename: "Question";
  id: string;
  question?: string | null;
  answer?: string | null;
  username?: string | null;
  group?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateQuestionInput = {
  id: string;
  question?: string | null;
  answer?: string | null;
  username?: string | null;
  group?: string | null;
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
  image?: string | null;
};

export type ModelCityConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  image?: ModelStringInput | null;
  and?: Array<ModelCityConditionInput | null> | null;
  or?: Array<ModelCityConditionInput | null> | null;
  not?: ModelCityConditionInput | null;
};

export type City = {
  __typename: "City";
  id: string;
  name?: string | null;
  description?: string | null;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCityInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  image?: string | null;
};

export type DeleteCityInput = {
  id: string;
};

export type CreateAirportInput = {
  id?: string | null;
  name?: string | null;
  address?: string | null;
  description?: string | null;
  image?: string | null;
};

export type ModelAirportConditionInput = {
  name?: ModelStringInput | null;
  address?: ModelStringInput | null;
  description?: ModelStringInput | null;
  image?: ModelStringInput | null;
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
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAirportInput = {
  id: string;
  name?: string | null;
  address?: string | null;
  description?: string | null;
  image?: string | null;
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
  family?: string | null;
};

export type ModelUserConditionInput = {
  display_name?: ModelStringInput | null;
  username?: ModelStringInput | null;
  groups?: ModelStringInput | null;
  message?: ModelStringInput | null;
  family?: ModelStringInput | null;
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
  family?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserInput = {
  id: string;
  display_name?: string | null;
  username?: string | null;
  groups?: string | null;
  message?: string | null;
  family?: string | null;
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
  city?: string | null;
};

export type ModelHotelConditionInput = {
  name?: ModelStringInput | null;
  address?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  description?: ModelStringInput | null;
  image?: ModelStringInput | null;
  website?: ModelStringInput | null;
  room_block?: ModelStringInput | null;
  city?: ModelStringInput | null;
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
  city?: string | null;
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
  city?: string | null;
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
  image?: string | null;
};

export type ModelRestaurantConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  address?: ModelStringInput | null;
  image?: ModelStringInput | null;
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
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRestaurantInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  address?: string | null;
  image?: string | null;
};

export type DeleteRestaurantInput = {
  id: string;
};

export type ModelActivityFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  location?: ModelStringInput | null;
  address?: ModelStringInput | null;
  image?: ModelStringInput | null;
  url?: ModelStringInput | null;
  and?: Array<ModelActivityFilterInput | null> | null;
  or?: Array<ModelActivityFilterInput | null> | null;
  not?: ModelActivityFilterInput | null;
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

export type ModelActivityConnection = {
  __typename: "ModelActivityConnection";
  items: Array<Activity | null>;
  nextToken?: string | null;
};

export type ModelCharityFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  link?: ModelStringInput | null;
  description?: ModelStringInput | null;
  image?: ModelStringInput | null;
  and?: Array<ModelCharityFilterInput | null> | null;
  or?: Array<ModelCharityFilterInput | null> | null;
  not?: ModelCharityFilterInput | null;
};

export type ModelCharityConnection = {
  __typename: "ModelCharityConnection";
  items: Array<Charity | null>;
  nextToken?: string | null;
};

export type ModelRSVPFilterInput = {
  id?: ModelIDInput | null;
  username?: ModelStringInput | null;
  coming?: ModelStringInput | null;
  info?: ModelStringInput | null;
  time?: ModelStringInput | null;
  and?: Array<ModelRSVPFilterInput | null> | null;
  or?: Array<ModelRSVPFilterInput | null> | null;
  not?: ModelRSVPFilterInput | null;
};

export type ModelRSVPConnection = {
  __typename: "ModelRSVPConnection";
  items: Array<RSVP | null>;
  nextToken?: string | null;
};

export type ModelWelcomeFilterInput = {
  id?: ModelIDInput | null;
  header?: ModelStringInput | null;
  image?: ModelStringInput | null;
  body?: ModelStringInput | null;
  footer?: ModelStringInput | null;
  and?: Array<ModelWelcomeFilterInput | null> | null;
  or?: Array<ModelWelcomeFilterInput | null> | null;
  not?: ModelWelcomeFilterInput | null;
};

export type ModelWelcomeConnection = {
  __typename: "ModelWelcomeConnection";
  items: Array<Welcome | null>;
  nextToken?: string | null;
};

export type ModelPictureFilterInput = {
  id?: ModelIDInput | null;
  itemImageSrc?: ModelStringInput | null;
  cols?: ModelIntInput | null;
  rows?: ModelIntInput | null;
  alt?: ModelStringInput | null;
  frameSrc?: ModelStringInput | null;
  frameCut?: ModelIntInput | null;
  frameRepeat?: ModelStringInput | null;
  and?: Array<ModelPictureFilterInput | null> | null;
  or?: Array<ModelPictureFilterInput | null> | null;
  not?: ModelPictureFilterInput | null;
};

export type ModelPictureConnection = {
  __typename: "ModelPictureConnection";
  items: Array<Picture | null>;
  nextToken?: string | null;
};

export type ModelStoryFilterInput = {
  id?: ModelIDInput | null;
  body?: ModelStringInput | null;
  image?: ModelStringInput | null;
  header?: ModelStringInput | null;
  footer?: ModelStringInput | null;
  and?: Array<ModelStoryFilterInput | null> | null;
  or?: Array<ModelStoryFilterInput | null> | null;
  not?: ModelStoryFilterInput | null;
};

export type ModelStoryConnection = {
  __typename: "ModelStoryConnection";
  items: Array<Story | null>;
  nextToken?: string | null;
};

export type ModelTranslationFilterInput = {
  id?: ModelIDInput | null;
  key?: ModelStringInput | null;
  en?: ModelStringInput | null;
  ko?: ModelStringInput | null;
  and?: Array<ModelTranslationFilterInput | null> | null;
  or?: Array<ModelTranslationFilterInput | null> | null;
  not?: ModelTranslationFilterInput | null;
};

export type ModelTranslationConnection = {
  __typename: "ModelTranslationConnection";
  items: Array<Translation | null>;
  nextToken?: string | null;
};

export type ModelAreaFilterInput = {
  id?: ModelIDInput | null;
  location?: ModelStringInput | null;
  description?: ModelStringInput | null;
  image?: ModelStringInput | null;
  website?: ModelStringInput | null;
  and?: Array<ModelAreaFilterInput | null> | null;
  or?: Array<ModelAreaFilterInput | null> | null;
  not?: ModelAreaFilterInput | null;
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
  username?: ModelStringInput | null;
  group?: ModelStringInput | null;
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
  image?: ModelStringInput | null;
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
  image?: ModelStringInput | null;
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
  family?: ModelStringInput | null;
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
  city?: ModelStringInput | null;
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
  image?: ModelStringInput | null;
  and?: Array<ModelRestaurantFilterInput | null> | null;
  or?: Array<ModelRestaurantFilterInput | null> | null;
  not?: ModelRestaurantFilterInput | null;
};

export type ModelRestaurantConnection = {
  __typename: "ModelRestaurantConnection";
  items: Array<Restaurant | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionActivityFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  location?: ModelSubscriptionStringInput | null;
  address?: ModelSubscriptionStringInput | null;
  image?: ModelSubscriptionStringInput | null;
  url?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionActivityFilterInput | null> | null;
  or?: Array<ModelSubscriptionActivityFilterInput | null> | null;
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

export type ModelSubscriptionCharityFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  link?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  image?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionCharityFilterInput | null> | null;
  or?: Array<ModelSubscriptionCharityFilterInput | null> | null;
};

export type ModelSubscriptionRSVPFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  username?: ModelSubscriptionStringInput | null;
  coming?: ModelSubscriptionStringInput | null;
  info?: ModelSubscriptionStringInput | null;
  time?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionRSVPFilterInput | null> | null;
  or?: Array<ModelSubscriptionRSVPFilterInput | null> | null;
};

export type ModelSubscriptionWelcomeFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  header?: ModelSubscriptionStringInput | null;
  image?: ModelSubscriptionStringInput | null;
  body?: ModelSubscriptionStringInput | null;
  footer?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionWelcomeFilterInput | null> | null;
  or?: Array<ModelSubscriptionWelcomeFilterInput | null> | null;
};

export type ModelSubscriptionPictureFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  itemImageSrc?: ModelSubscriptionStringInput | null;
  cols?: ModelSubscriptionIntInput | null;
  rows?: ModelSubscriptionIntInput | null;
  alt?: ModelSubscriptionStringInput | null;
  frameSrc?: ModelSubscriptionStringInput | null;
  frameCut?: ModelSubscriptionIntInput | null;
  frameRepeat?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionPictureFilterInput | null> | null;
  or?: Array<ModelSubscriptionPictureFilterInput | null> | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionStoryFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  body?: ModelSubscriptionStringInput | null;
  image?: ModelSubscriptionStringInput | null;
  header?: ModelSubscriptionStringInput | null;
  footer?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionStoryFilterInput | null> | null;
  or?: Array<ModelSubscriptionStoryFilterInput | null> | null;
};

export type ModelSubscriptionTranslationFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  key?: ModelSubscriptionStringInput | null;
  en?: ModelSubscriptionStringInput | null;
  ko?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionTranslationFilterInput | null> | null;
  or?: Array<ModelSubscriptionTranslationFilterInput | null> | null;
};

export type ModelSubscriptionAreaFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  location?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  image?: ModelSubscriptionStringInput | null;
  website?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionAreaFilterInput | null> | null;
  or?: Array<ModelSubscriptionAreaFilterInput | null> | null;
};

export type ModelSubscriptionQuestionFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  question?: ModelSubscriptionStringInput | null;
  answer?: ModelSubscriptionStringInput | null;
  username?: ModelSubscriptionStringInput | null;
  group?: ModelSubscriptionStringInput | null;
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
  image?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionCityFilterInput | null> | null;
  or?: Array<ModelSubscriptionCityFilterInput | null> | null;
};

export type ModelSubscriptionAirportFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  address?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  image?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionAirportFilterInput | null> | null;
  or?: Array<ModelSubscriptionAirportFilterInput | null> | null;
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  display_name?: ModelSubscriptionStringInput | null;
  username?: ModelSubscriptionStringInput | null;
  groups?: ModelSubscriptionStringInput | null;
  message?: ModelSubscriptionStringInput | null;
  family?: ModelSubscriptionStringInput | null;
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
  city?: ModelSubscriptionStringInput | null;
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
  image?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionRestaurantFilterInput | null> | null;
  or?: Array<ModelSubscriptionRestaurantFilterInput | null> | null;
};

export type CreateActivityMutation = {
  __typename: "Activity";
  id: string;
  name?: string | null;
  description?: string | null;
  location?: string | null;
  address?: string | null;
  image?: string | null;
  url?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateActivityMutation = {
  __typename: "Activity";
  id: string;
  name?: string | null;
  description?: string | null;
  location?: string | null;
  address?: string | null;
  image?: string | null;
  url?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteActivityMutation = {
  __typename: "Activity";
  id: string;
  name?: string | null;
  description?: string | null;
  location?: string | null;
  address?: string | null;
  image?: string | null;
  url?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateCharityMutation = {
  __typename: "Charity";
  id: string;
  name?: string | null;
  link?: string | null;
  description?: string | null;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCharityMutation = {
  __typename: "Charity";
  id: string;
  name?: string | null;
  link?: string | null;
  description?: string | null;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCharityMutation = {
  __typename: "Charity";
  id: string;
  name?: string | null;
  link?: string | null;
  description?: string | null;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateRSVPMutation = {
  __typename: "RSVP";
  id: string;
  username?: string | null;
  coming?: string | null;
  info?: string | null;
  time?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRSVPMutation = {
  __typename: "RSVP";
  id: string;
  username?: string | null;
  coming?: string | null;
  info?: string | null;
  time?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteRSVPMutation = {
  __typename: "RSVP";
  id: string;
  username?: string | null;
  coming?: string | null;
  info?: string | null;
  time?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateWelcomeMutation = {
  __typename: "Welcome";
  id: string;
  header?: string | null;
  image?: string | null;
  body?: string | null;
  footer?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateWelcomeMutation = {
  __typename: "Welcome";
  id: string;
  header?: string | null;
  image?: string | null;
  body?: string | null;
  footer?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteWelcomeMutation = {
  __typename: "Welcome";
  id: string;
  header?: string | null;
  image?: string | null;
  body?: string | null;
  footer?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreatePictureMutation = {
  __typename: "Picture";
  id: string;
  itemImageSrc?: string | null;
  cols?: number | null;
  rows?: number | null;
  alt?: string | null;
  frameSrc?: string | null;
  frameCut?: number | null;
  frameRepeat?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePictureMutation = {
  __typename: "Picture";
  id: string;
  itemImageSrc?: string | null;
  cols?: number | null;
  rows?: number | null;
  alt?: string | null;
  frameSrc?: string | null;
  frameCut?: number | null;
  frameRepeat?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeletePictureMutation = {
  __typename: "Picture";
  id: string;
  itemImageSrc?: string | null;
  cols?: number | null;
  rows?: number | null;
  alt?: string | null;
  frameSrc?: string | null;
  frameCut?: number | null;
  frameRepeat?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateStoryMutation = {
  __typename: "Story";
  id: string;
  body?: string | null;
  image?: string | null;
  header?: string | null;
  footer?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateStoryMutation = {
  __typename: "Story";
  id: string;
  body?: string | null;
  image?: string | null;
  header?: string | null;
  footer?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteStoryMutation = {
  __typename: "Story";
  id: string;
  body?: string | null;
  image?: string | null;
  header?: string | null;
  footer?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateTranslationMutation = {
  __typename: "Translation";
  id: string;
  key?: string | null;
  en?: string | null;
  ko?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTranslationMutation = {
  __typename: "Translation";
  id: string;
  key?: string | null;
  en?: string | null;
  ko?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTranslationMutation = {
  __typename: "Translation";
  id: string;
  key?: string | null;
  en?: string | null;
  ko?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateAreaMutation = {
  __typename: "Area";
  id: string;
  location?: string | null;
  description?: string | null;
  image?: string | null;
  website?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAreaMutation = {
  __typename: "Area";
  id: string;
  location?: string | null;
  description?: string | null;
  image?: string | null;
  website?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteAreaMutation = {
  __typename: "Area";
  id: string;
  location?: string | null;
  description?: string | null;
  image?: string | null;
  website?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateQuestionMutation = {
  __typename: "Question";
  id: string;
  question?: string | null;
  answer?: string | null;
  username?: string | null;
  group?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateQuestionMutation = {
  __typename: "Question";
  id: string;
  question?: string | null;
  answer?: string | null;
  username?: string | null;
  group?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteQuestionMutation = {
  __typename: "Question";
  id: string;
  question?: string | null;
  answer?: string | null;
  username?: string | null;
  group?: string | null;
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
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCityMutation = {
  __typename: "City";
  id: string;
  name?: string | null;
  description?: string | null;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCityMutation = {
  __typename: "City";
  id: string;
  name?: string | null;
  description?: string | null;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateAirportMutation = {
  __typename: "Airport";
  id: string;
  name?: string | null;
  address?: string | null;
  description?: string | null;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAirportMutation = {
  __typename: "Airport";
  id: string;
  name?: string | null;
  address?: string | null;
  description?: string | null;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteAirportMutation = {
  __typename: "Airport";
  id: string;
  name?: string | null;
  address?: string | null;
  description?: string | null;
  image?: string | null;
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
  family?: string | null;
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
  family?: string | null;
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
  family?: string | null;
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
  city?: string | null;
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
  city?: string | null;
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
  city?: string | null;
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
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  address: string;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  address: string;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetActivityQuery = {
  __typename: "Activity";
  id: string;
  name?: string | null;
  description?: string | null;
  location?: string | null;
  address?: string | null;
  image?: string | null;
  url?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListActivitiesQuery = {
  __typename: "ModelActivityConnection";
  items: Array<{
    __typename: "Activity";
    id: string;
    name?: string | null;
    description?: string | null;
    location?: string | null;
    address?: string | null;
    image?: string | null;
    url?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetCharityQuery = {
  __typename: "Charity";
  id: string;
  name?: string | null;
  link?: string | null;
  description?: string | null;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCharitiesQuery = {
  __typename: "ModelCharityConnection";
  items: Array<{
    __typename: "Charity";
    id: string;
    name?: string | null;
    link?: string | null;
    description?: string | null;
    image?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetRSVPQuery = {
  __typename: "RSVP";
  id: string;
  username?: string | null;
  coming?: string | null;
  info?: string | null;
  time?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListRSVPSQuery = {
  __typename: "ModelRSVPConnection";
  items: Array<{
    __typename: "RSVP";
    id: string;
    username?: string | null;
    coming?: string | null;
    info?: string | null;
    time?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetWelcomeQuery = {
  __typename: "Welcome";
  id: string;
  header?: string | null;
  image?: string | null;
  body?: string | null;
  footer?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListWelcomesQuery = {
  __typename: "ModelWelcomeConnection";
  items: Array<{
    __typename: "Welcome";
    id: string;
    header?: string | null;
    image?: string | null;
    body?: string | null;
    footer?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetPictureQuery = {
  __typename: "Picture";
  id: string;
  itemImageSrc?: string | null;
  cols?: number | null;
  rows?: number | null;
  alt?: string | null;
  frameSrc?: string | null;
  frameCut?: number | null;
  frameRepeat?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListPicturesQuery = {
  __typename: "ModelPictureConnection";
  items: Array<{
    __typename: "Picture";
    id: string;
    itemImageSrc?: string | null;
    cols?: number | null;
    rows?: number | null;
    alt?: string | null;
    frameSrc?: string | null;
    frameCut?: number | null;
    frameRepeat?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetStoryQuery = {
  __typename: "Story";
  id: string;
  body?: string | null;
  image?: string | null;
  header?: string | null;
  footer?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListStoriesQuery = {
  __typename: "ModelStoryConnection";
  items: Array<{
    __typename: "Story";
    id: string;
    body?: string | null;
    image?: string | null;
    header?: string | null;
    footer?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetTranslationQuery = {
  __typename: "Translation";
  id: string;
  key?: string | null;
  en?: string | null;
  ko?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListTranslationsQuery = {
  __typename: "ModelTranslationConnection";
  items: Array<{
    __typename: "Translation";
    id: string;
    key?: string | null;
    en?: string | null;
    ko?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetAreaQuery = {
  __typename: "Area";
  id: string;
  location?: string | null;
  description?: string | null;
  image?: string | null;
  website?: string | null;
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
    website?: string | null;
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
  username?: string | null;
  group?: string | null;
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
    username?: string | null;
    group?: string | null;
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
  image?: string | null;
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
    image?: string | null;
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
  image?: string | null;
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
    image?: string | null;
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
  family?: string | null;
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
    family?: string | null;
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
  city?: string | null;
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
    city?: string | null;
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
  image?: string | null;
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
    image?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateActivitySubscription = {
  __typename: "Activity";
  id: string;
  name?: string | null;
  description?: string | null;
  location?: string | null;
  address?: string | null;
  image?: string | null;
  url?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateActivitySubscription = {
  __typename: "Activity";
  id: string;
  name?: string | null;
  description?: string | null;
  location?: string | null;
  address?: string | null;
  image?: string | null;
  url?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteActivitySubscription = {
  __typename: "Activity";
  id: string;
  name?: string | null;
  description?: string | null;
  location?: string | null;
  address?: string | null;
  image?: string | null;
  url?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCharitySubscription = {
  __typename: "Charity";
  id: string;
  name?: string | null;
  link?: string | null;
  description?: string | null;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCharitySubscription = {
  __typename: "Charity";
  id: string;
  name?: string | null;
  link?: string | null;
  description?: string | null;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCharitySubscription = {
  __typename: "Charity";
  id: string;
  name?: string | null;
  link?: string | null;
  description?: string | null;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateRSVPSubscription = {
  __typename: "RSVP";
  id: string;
  username?: string | null;
  coming?: string | null;
  info?: string | null;
  time?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateRSVPSubscription = {
  __typename: "RSVP";
  id: string;
  username?: string | null;
  coming?: string | null;
  info?: string | null;
  time?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteRSVPSubscription = {
  __typename: "RSVP";
  id: string;
  username?: string | null;
  coming?: string | null;
  info?: string | null;
  time?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateWelcomeSubscription = {
  __typename: "Welcome";
  id: string;
  header?: string | null;
  image?: string | null;
  body?: string | null;
  footer?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateWelcomeSubscription = {
  __typename: "Welcome";
  id: string;
  header?: string | null;
  image?: string | null;
  body?: string | null;
  footer?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteWelcomeSubscription = {
  __typename: "Welcome";
  id: string;
  header?: string | null;
  image?: string | null;
  body?: string | null;
  footer?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePictureSubscription = {
  __typename: "Picture";
  id: string;
  itemImageSrc?: string | null;
  cols?: number | null;
  rows?: number | null;
  alt?: string | null;
  frameSrc?: string | null;
  frameCut?: number | null;
  frameRepeat?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePictureSubscription = {
  __typename: "Picture";
  id: string;
  itemImageSrc?: string | null;
  cols?: number | null;
  rows?: number | null;
  alt?: string | null;
  frameSrc?: string | null;
  frameCut?: number | null;
  frameRepeat?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePictureSubscription = {
  __typename: "Picture";
  id: string;
  itemImageSrc?: string | null;
  cols?: number | null;
  rows?: number | null;
  alt?: string | null;
  frameSrc?: string | null;
  frameCut?: number | null;
  frameRepeat?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateStorySubscription = {
  __typename: "Story";
  id: string;
  body?: string | null;
  image?: string | null;
  header?: string | null;
  footer?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateStorySubscription = {
  __typename: "Story";
  id: string;
  body?: string | null;
  image?: string | null;
  header?: string | null;
  footer?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteStorySubscription = {
  __typename: "Story";
  id: string;
  body?: string | null;
  image?: string | null;
  header?: string | null;
  footer?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateTranslationSubscription = {
  __typename: "Translation";
  id: string;
  key?: string | null;
  en?: string | null;
  ko?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTranslationSubscription = {
  __typename: "Translation";
  id: string;
  key?: string | null;
  en?: string | null;
  ko?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTranslationSubscription = {
  __typename: "Translation";
  id: string;
  key?: string | null;
  en?: string | null;
  ko?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateAreaSubscription = {
  __typename: "Area";
  id: string;
  location?: string | null;
  description?: string | null;
  image?: string | null;
  website?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateAreaSubscription = {
  __typename: "Area";
  id: string;
  location?: string | null;
  description?: string | null;
  image?: string | null;
  website?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteAreaSubscription = {
  __typename: "Area";
  id: string;
  location?: string | null;
  description?: string | null;
  image?: string | null;
  website?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateQuestionSubscription = {
  __typename: "Question";
  id: string;
  question?: string | null;
  answer?: string | null;
  username?: string | null;
  group?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateQuestionSubscription = {
  __typename: "Question";
  id: string;
  question?: string | null;
  answer?: string | null;
  username?: string | null;
  group?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteQuestionSubscription = {
  __typename: "Question";
  id: string;
  question?: string | null;
  answer?: string | null;
  username?: string | null;
  group?: string | null;
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
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCitySubscription = {
  __typename: "City";
  id: string;
  name?: string | null;
  description?: string | null;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCitySubscription = {
  __typename: "City";
  id: string;
  name?: string | null;
  description?: string | null;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateAirportSubscription = {
  __typename: "Airport";
  id: string;
  name?: string | null;
  address?: string | null;
  description?: string | null;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateAirportSubscription = {
  __typename: "Airport";
  id: string;
  name?: string | null;
  address?: string | null;
  description?: string | null;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteAirportSubscription = {
  __typename: "Airport";
  id: string;
  name?: string | null;
  address?: string | null;
  description?: string | null;
  image?: string | null;
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
  family?: string | null;
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
  family?: string | null;
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
  family?: string | null;
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
  city?: string | null;
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
  city?: string | null;
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
  city?: string | null;
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
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  address: string;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  address: string;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateActivity(
    input: CreateActivityInput,
    condition?: ModelActivityConditionInput
  ): Promise<CreateActivityMutation> {
    const statement = `mutation CreateActivity($input: CreateActivityInput!, $condition: ModelActivityConditionInput) {
        createActivity(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          location
          address
          image
          url
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
    return <CreateActivityMutation>response.data.createActivity;
  }
  async UpdateActivity(
    input: UpdateActivityInput,
    condition?: ModelActivityConditionInput
  ): Promise<UpdateActivityMutation> {
    const statement = `mutation UpdateActivity($input: UpdateActivityInput!, $condition: ModelActivityConditionInput) {
        updateActivity(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          location
          address
          image
          url
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
    return <UpdateActivityMutation>response.data.updateActivity;
  }
  async DeleteActivity(
    input: DeleteActivityInput,
    condition?: ModelActivityConditionInput
  ): Promise<DeleteActivityMutation> {
    const statement = `mutation DeleteActivity($input: DeleteActivityInput!, $condition: ModelActivityConditionInput) {
        deleteActivity(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          location
          address
          image
          url
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
    return <DeleteActivityMutation>response.data.deleteActivity;
  }
  async CreateCharity(
    input: CreateCharityInput,
    condition?: ModelCharityConditionInput
  ): Promise<CreateCharityMutation> {
    const statement = `mutation CreateCharity($input: CreateCharityInput!, $condition: ModelCharityConditionInput) {
        createCharity(input: $input, condition: $condition) {
          __typename
          id
          name
          link
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
    return <CreateCharityMutation>response.data.createCharity;
  }
  async UpdateCharity(
    input: UpdateCharityInput,
    condition?: ModelCharityConditionInput
  ): Promise<UpdateCharityMutation> {
    const statement = `mutation UpdateCharity($input: UpdateCharityInput!, $condition: ModelCharityConditionInput) {
        updateCharity(input: $input, condition: $condition) {
          __typename
          id
          name
          link
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
    return <UpdateCharityMutation>response.data.updateCharity;
  }
  async DeleteCharity(
    input: DeleteCharityInput,
    condition?: ModelCharityConditionInput
  ): Promise<DeleteCharityMutation> {
    const statement = `mutation DeleteCharity($input: DeleteCharityInput!, $condition: ModelCharityConditionInput) {
        deleteCharity(input: $input, condition: $condition) {
          __typename
          id
          name
          link
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
    return <DeleteCharityMutation>response.data.deleteCharity;
  }
  async CreateRSVP(
    input: CreateRSVPInput,
    condition?: ModelRSVPConditionInput
  ): Promise<CreateRSVPMutation> {
    const statement = `mutation CreateRSVP($input: CreateRSVPInput!, $condition: ModelRSVPConditionInput) {
        createRSVP(input: $input, condition: $condition) {
          __typename
          id
          username
          coming
          info
          time
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
    return <CreateRSVPMutation>response.data.createRSVP;
  }
  async UpdateRSVP(
    input: UpdateRSVPInput,
    condition?: ModelRSVPConditionInput
  ): Promise<UpdateRSVPMutation> {
    const statement = `mutation UpdateRSVP($input: UpdateRSVPInput!, $condition: ModelRSVPConditionInput) {
        updateRSVP(input: $input, condition: $condition) {
          __typename
          id
          username
          coming
          info
          time
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
    return <UpdateRSVPMutation>response.data.updateRSVP;
  }
  async DeleteRSVP(
    input: DeleteRSVPInput,
    condition?: ModelRSVPConditionInput
  ): Promise<DeleteRSVPMutation> {
    const statement = `mutation DeleteRSVP($input: DeleteRSVPInput!, $condition: ModelRSVPConditionInput) {
        deleteRSVP(input: $input, condition: $condition) {
          __typename
          id
          username
          coming
          info
          time
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
    return <DeleteRSVPMutation>response.data.deleteRSVP;
  }
  async CreateWelcome(
    input: CreateWelcomeInput,
    condition?: ModelWelcomeConditionInput
  ): Promise<CreateWelcomeMutation> {
    const statement = `mutation CreateWelcome($input: CreateWelcomeInput!, $condition: ModelWelcomeConditionInput) {
        createWelcome(input: $input, condition: $condition) {
          __typename
          id
          header
          image
          body
          footer
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
    return <CreateWelcomeMutation>response.data.createWelcome;
  }
  async UpdateWelcome(
    input: UpdateWelcomeInput,
    condition?: ModelWelcomeConditionInput
  ): Promise<UpdateWelcomeMutation> {
    const statement = `mutation UpdateWelcome($input: UpdateWelcomeInput!, $condition: ModelWelcomeConditionInput) {
        updateWelcome(input: $input, condition: $condition) {
          __typename
          id
          header
          image
          body
          footer
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
    return <UpdateWelcomeMutation>response.data.updateWelcome;
  }
  async DeleteWelcome(
    input: DeleteWelcomeInput,
    condition?: ModelWelcomeConditionInput
  ): Promise<DeleteWelcomeMutation> {
    const statement = `mutation DeleteWelcome($input: DeleteWelcomeInput!, $condition: ModelWelcomeConditionInput) {
        deleteWelcome(input: $input, condition: $condition) {
          __typename
          id
          header
          image
          body
          footer
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
    return <DeleteWelcomeMutation>response.data.deleteWelcome;
  }
  async CreatePicture(
    input: CreatePictureInput,
    condition?: ModelPictureConditionInput
  ): Promise<CreatePictureMutation> {
    const statement = `mutation CreatePicture($input: CreatePictureInput!, $condition: ModelPictureConditionInput) {
        createPicture(input: $input, condition: $condition) {
          __typename
          id
          itemImageSrc
          cols
          rows
          alt
          frameSrc
          frameCut
          frameRepeat
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
    return <CreatePictureMutation>response.data.createPicture;
  }
  async UpdatePicture(
    input: UpdatePictureInput,
    condition?: ModelPictureConditionInput
  ): Promise<UpdatePictureMutation> {
    const statement = `mutation UpdatePicture($input: UpdatePictureInput!, $condition: ModelPictureConditionInput) {
        updatePicture(input: $input, condition: $condition) {
          __typename
          id
          itemImageSrc
          cols
          rows
          alt
          frameSrc
          frameCut
          frameRepeat
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
    return <UpdatePictureMutation>response.data.updatePicture;
  }
  async DeletePicture(
    input: DeletePictureInput,
    condition?: ModelPictureConditionInput
  ): Promise<DeletePictureMutation> {
    const statement = `mutation DeletePicture($input: DeletePictureInput!, $condition: ModelPictureConditionInput) {
        deletePicture(input: $input, condition: $condition) {
          __typename
          id
          itemImageSrc
          cols
          rows
          alt
          frameSrc
          frameCut
          frameRepeat
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
    return <DeletePictureMutation>response.data.deletePicture;
  }
  async CreateStory(
    input: CreateStoryInput,
    condition?: ModelStoryConditionInput
  ): Promise<CreateStoryMutation> {
    const statement = `mutation CreateStory($input: CreateStoryInput!, $condition: ModelStoryConditionInput) {
        createStory(input: $input, condition: $condition) {
          __typename
          id
          body
          image
          header
          footer
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
    return <CreateStoryMutation>response.data.createStory;
  }
  async UpdateStory(
    input: UpdateStoryInput,
    condition?: ModelStoryConditionInput
  ): Promise<UpdateStoryMutation> {
    const statement = `mutation UpdateStory($input: UpdateStoryInput!, $condition: ModelStoryConditionInput) {
        updateStory(input: $input, condition: $condition) {
          __typename
          id
          body
          image
          header
          footer
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
    return <UpdateStoryMutation>response.data.updateStory;
  }
  async DeleteStory(
    input: DeleteStoryInput,
    condition?: ModelStoryConditionInput
  ): Promise<DeleteStoryMutation> {
    const statement = `mutation DeleteStory($input: DeleteStoryInput!, $condition: ModelStoryConditionInput) {
        deleteStory(input: $input, condition: $condition) {
          __typename
          id
          body
          image
          header
          footer
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
    return <DeleteStoryMutation>response.data.deleteStory;
  }
  async CreateTranslation(
    input: CreateTranslationInput,
    condition?: ModelTranslationConditionInput
  ): Promise<CreateTranslationMutation> {
    const statement = `mutation CreateTranslation($input: CreateTranslationInput!, $condition: ModelTranslationConditionInput) {
        createTranslation(input: $input, condition: $condition) {
          __typename
          id
          key
          en
          ko
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
    return <CreateTranslationMutation>response.data.createTranslation;
  }
  async UpdateTranslation(
    input: UpdateTranslationInput,
    condition?: ModelTranslationConditionInput
  ): Promise<UpdateTranslationMutation> {
    const statement = `mutation UpdateTranslation($input: UpdateTranslationInput!, $condition: ModelTranslationConditionInput) {
        updateTranslation(input: $input, condition: $condition) {
          __typename
          id
          key
          en
          ko
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
    return <UpdateTranslationMutation>response.data.updateTranslation;
  }
  async DeleteTranslation(
    input: DeleteTranslationInput,
    condition?: ModelTranslationConditionInput
  ): Promise<DeleteTranslationMutation> {
    const statement = `mutation DeleteTranslation($input: DeleteTranslationInput!, $condition: ModelTranslationConditionInput) {
        deleteTranslation(input: $input, condition: $condition) {
          __typename
          id
          key
          en
          ko
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
    return <DeleteTranslationMutation>response.data.deleteTranslation;
  }
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
          website
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
          website
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
          website
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
          username
          group
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
          username
          group
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
          username
          group
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
          family
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
          family
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
          family
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
    return <DeleteRestaurantMutation>response.data.deleteRestaurant;
  }
  async GetActivity(id: string): Promise<GetActivityQuery> {
    const statement = `query GetActivity($id: ID!) {
        getActivity(id: $id) {
          __typename
          id
          name
          description
          location
          address
          image
          url
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
    return <GetActivityQuery>response.data.getActivity;
  }
  async ListActivities(
    filter?: ModelActivityFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListActivitiesQuery> {
    const statement = `query ListActivities($filter: ModelActivityFilterInput, $limit: Int, $nextToken: String) {
        listActivities(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            location
            address
            image
            url
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
    return <ListActivitiesQuery>response.data.listActivities;
  }
  async GetCharity(id: string): Promise<GetCharityQuery> {
    const statement = `query GetCharity($id: ID!) {
        getCharity(id: $id) {
          __typename
          id
          name
          link
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
    return <GetCharityQuery>response.data.getCharity;
  }
  async ListCharities(
    filter?: ModelCharityFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCharitiesQuery> {
    const statement = `query ListCharities($filter: ModelCharityFilterInput, $limit: Int, $nextToken: String) {
        listCharities(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            link
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
    return <ListCharitiesQuery>response.data.listCharities;
  }
  async GetRSVP(id: string): Promise<GetRSVPQuery> {
    const statement = `query GetRSVP($id: ID!) {
        getRSVP(id: $id) {
          __typename
          id
          username
          coming
          info
          time
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
    return <GetRSVPQuery>response.data.getRSVP;
  }
  async ListRSVPS(
    filter?: ModelRSVPFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRSVPSQuery> {
    const statement = `query ListRSVPS($filter: ModelRSVPFilterInput, $limit: Int, $nextToken: String) {
        listRSVPS(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            username
            coming
            info
            time
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
    return <ListRSVPSQuery>response.data.listRSVPS;
  }
  async GetWelcome(id: string): Promise<GetWelcomeQuery> {
    const statement = `query GetWelcome($id: ID!) {
        getWelcome(id: $id) {
          __typename
          id
          header
          image
          body
          footer
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
    return <GetWelcomeQuery>response.data.getWelcome;
  }
  async ListWelcomes(
    filter?: ModelWelcomeFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListWelcomesQuery> {
    const statement = `query ListWelcomes($filter: ModelWelcomeFilterInput, $limit: Int, $nextToken: String) {
        listWelcomes(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            header
            image
            body
            footer
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
    return <ListWelcomesQuery>response.data.listWelcomes;
  }
  async GetPicture(id: string): Promise<GetPictureQuery> {
    const statement = `query GetPicture($id: ID!) {
        getPicture(id: $id) {
          __typename
          id
          itemImageSrc
          cols
          rows
          alt
          frameSrc
          frameCut
          frameRepeat
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
    return <GetPictureQuery>response.data.getPicture;
  }
  async ListPictures(
    filter?: ModelPictureFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPicturesQuery> {
    const statement = `query ListPictures($filter: ModelPictureFilterInput, $limit: Int, $nextToken: String) {
        listPictures(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            itemImageSrc
            cols
            rows
            alt
            frameSrc
            frameCut
            frameRepeat
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
    return <ListPicturesQuery>response.data.listPictures;
  }
  async GetStory(id: string): Promise<GetStoryQuery> {
    const statement = `query GetStory($id: ID!) {
        getStory(id: $id) {
          __typename
          id
          body
          image
          header
          footer
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
    return <GetStoryQuery>response.data.getStory;
  }
  async ListStories(
    filter?: ModelStoryFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListStoriesQuery> {
    const statement = `query ListStories($filter: ModelStoryFilterInput, $limit: Int, $nextToken: String) {
        listStories(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            body
            image
            header
            footer
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
    return <ListStoriesQuery>response.data.listStories;
  }
  async GetTranslation(id: string): Promise<GetTranslationQuery> {
    const statement = `query GetTranslation($id: ID!) {
        getTranslation(id: $id) {
          __typename
          id
          key
          en
          ko
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
    return <GetTranslationQuery>response.data.getTranslation;
  }
  async ListTranslations(
    filter?: ModelTranslationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTranslationsQuery> {
    const statement = `query ListTranslations($filter: ModelTranslationFilterInput, $limit: Int, $nextToken: String) {
        listTranslations(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            key
            en
            ko
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
    return <ListTranslationsQuery>response.data.listTranslations;
  }
  async GetArea(id: string): Promise<GetAreaQuery> {
    const statement = `query GetArea($id: ID!) {
        getArea(id: $id) {
          __typename
          id
          location
          description
          image
          website
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
            website
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
          username
          group
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
            username
            group
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
          family
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
            family
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
    return <ListRestaurantsQuery>response.data.listRestaurants;
  }
  OnCreateActivityListener(
    filter?: ModelSubscriptionActivityFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateActivity">>
  > {
    const statement = `subscription OnCreateActivity($filter: ModelSubscriptionActivityFilterInput) {
        onCreateActivity(filter: $filter) {
          __typename
          id
          name
          description
          location
          address
          image
          url
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateActivity">>
    >;
  }

  OnUpdateActivityListener(
    filter?: ModelSubscriptionActivityFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateActivity">>
  > {
    const statement = `subscription OnUpdateActivity($filter: ModelSubscriptionActivityFilterInput) {
        onUpdateActivity(filter: $filter) {
          __typename
          id
          name
          description
          location
          address
          image
          url
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateActivity">>
    >;
  }

  OnDeleteActivityListener(
    filter?: ModelSubscriptionActivityFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteActivity">>
  > {
    const statement = `subscription OnDeleteActivity($filter: ModelSubscriptionActivityFilterInput) {
        onDeleteActivity(filter: $filter) {
          __typename
          id
          name
          description
          location
          address
          image
          url
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteActivity">>
    >;
  }

  OnCreateCharityListener(
    filter?: ModelSubscriptionCharityFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCharity">>
  > {
    const statement = `subscription OnCreateCharity($filter: ModelSubscriptionCharityFilterInput) {
        onCreateCharity(filter: $filter) {
          __typename
          id
          name
          link
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCharity">>
    >;
  }

  OnUpdateCharityListener(
    filter?: ModelSubscriptionCharityFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCharity">>
  > {
    const statement = `subscription OnUpdateCharity($filter: ModelSubscriptionCharityFilterInput) {
        onUpdateCharity(filter: $filter) {
          __typename
          id
          name
          link
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCharity">>
    >;
  }

  OnDeleteCharityListener(
    filter?: ModelSubscriptionCharityFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCharity">>
  > {
    const statement = `subscription OnDeleteCharity($filter: ModelSubscriptionCharityFilterInput) {
        onDeleteCharity(filter: $filter) {
          __typename
          id
          name
          link
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCharity">>
    >;
  }

  OnCreateRSVPListener(
    filter?: ModelSubscriptionRSVPFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRSVP">>
  > {
    const statement = `subscription OnCreateRSVP($filter: ModelSubscriptionRSVPFilterInput) {
        onCreateRSVP(filter: $filter) {
          __typename
          id
          username
          coming
          info
          time
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRSVP">>
    >;
  }

  OnUpdateRSVPListener(
    filter?: ModelSubscriptionRSVPFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRSVP">>
  > {
    const statement = `subscription OnUpdateRSVP($filter: ModelSubscriptionRSVPFilterInput) {
        onUpdateRSVP(filter: $filter) {
          __typename
          id
          username
          coming
          info
          time
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRSVP">>
    >;
  }

  OnDeleteRSVPListener(
    filter?: ModelSubscriptionRSVPFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRSVP">>
  > {
    const statement = `subscription OnDeleteRSVP($filter: ModelSubscriptionRSVPFilterInput) {
        onDeleteRSVP(filter: $filter) {
          __typename
          id
          username
          coming
          info
          time
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRSVP">>
    >;
  }

  OnCreateWelcomeListener(
    filter?: ModelSubscriptionWelcomeFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateWelcome">>
  > {
    const statement = `subscription OnCreateWelcome($filter: ModelSubscriptionWelcomeFilterInput) {
        onCreateWelcome(filter: $filter) {
          __typename
          id
          header
          image
          body
          footer
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateWelcome">>
    >;
  }

  OnUpdateWelcomeListener(
    filter?: ModelSubscriptionWelcomeFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateWelcome">>
  > {
    const statement = `subscription OnUpdateWelcome($filter: ModelSubscriptionWelcomeFilterInput) {
        onUpdateWelcome(filter: $filter) {
          __typename
          id
          header
          image
          body
          footer
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateWelcome">>
    >;
  }

  OnDeleteWelcomeListener(
    filter?: ModelSubscriptionWelcomeFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteWelcome">>
  > {
    const statement = `subscription OnDeleteWelcome($filter: ModelSubscriptionWelcomeFilterInput) {
        onDeleteWelcome(filter: $filter) {
          __typename
          id
          header
          image
          body
          footer
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteWelcome">>
    >;
  }

  OnCreatePictureListener(
    filter?: ModelSubscriptionPictureFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePicture">>
  > {
    const statement = `subscription OnCreatePicture($filter: ModelSubscriptionPictureFilterInput) {
        onCreatePicture(filter: $filter) {
          __typename
          id
          itemImageSrc
          cols
          rows
          alt
          frameSrc
          frameCut
          frameRepeat
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePicture">>
    >;
  }

  OnUpdatePictureListener(
    filter?: ModelSubscriptionPictureFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePicture">>
  > {
    const statement = `subscription OnUpdatePicture($filter: ModelSubscriptionPictureFilterInput) {
        onUpdatePicture(filter: $filter) {
          __typename
          id
          itemImageSrc
          cols
          rows
          alt
          frameSrc
          frameCut
          frameRepeat
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePicture">>
    >;
  }

  OnDeletePictureListener(
    filter?: ModelSubscriptionPictureFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePicture">>
  > {
    const statement = `subscription OnDeletePicture($filter: ModelSubscriptionPictureFilterInput) {
        onDeletePicture(filter: $filter) {
          __typename
          id
          itemImageSrc
          cols
          rows
          alt
          frameSrc
          frameCut
          frameRepeat
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePicture">>
    >;
  }

  OnCreateStoryListener(
    filter?: ModelSubscriptionStoryFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateStory">>
  > {
    const statement = `subscription OnCreateStory($filter: ModelSubscriptionStoryFilterInput) {
        onCreateStory(filter: $filter) {
          __typename
          id
          body
          image
          header
          footer
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateStory">>
    >;
  }

  OnUpdateStoryListener(
    filter?: ModelSubscriptionStoryFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateStory">>
  > {
    const statement = `subscription OnUpdateStory($filter: ModelSubscriptionStoryFilterInput) {
        onUpdateStory(filter: $filter) {
          __typename
          id
          body
          image
          header
          footer
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateStory">>
    >;
  }

  OnDeleteStoryListener(
    filter?: ModelSubscriptionStoryFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteStory">>
  > {
    const statement = `subscription OnDeleteStory($filter: ModelSubscriptionStoryFilterInput) {
        onDeleteStory(filter: $filter) {
          __typename
          id
          body
          image
          header
          footer
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteStory">>
    >;
  }

  OnCreateTranslationListener(
    filter?: ModelSubscriptionTranslationFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTranslation">>
  > {
    const statement = `subscription OnCreateTranslation($filter: ModelSubscriptionTranslationFilterInput) {
        onCreateTranslation(filter: $filter) {
          __typename
          id
          key
          en
          ko
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTranslation">>
    >;
  }

  OnUpdateTranslationListener(
    filter?: ModelSubscriptionTranslationFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTranslation">>
  > {
    const statement = `subscription OnUpdateTranslation($filter: ModelSubscriptionTranslationFilterInput) {
        onUpdateTranslation(filter: $filter) {
          __typename
          id
          key
          en
          ko
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTranslation">>
    >;
  }

  OnDeleteTranslationListener(
    filter?: ModelSubscriptionTranslationFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTranslation">>
  > {
    const statement = `subscription OnDeleteTranslation($filter: ModelSubscriptionTranslationFilterInput) {
        onDeleteTranslation(filter: $filter) {
          __typename
          id
          key
          en
          ko
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTranslation">>
    >;
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
          website
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
          website
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
          website
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
          username
          group
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
          username
          group
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
          username
          group
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
          family
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
          family
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
          family
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRestaurant">>
    >;
  }
}

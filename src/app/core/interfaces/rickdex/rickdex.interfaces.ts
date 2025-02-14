export interface ResourceBase {
  id: number;
  name: string;
  created: string;
}

export interface ResponseInfo {
  count: number;
  pages: number;
  next: number;
  prev: number;
}

export interface Character extends ResourceBase {
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: LocationInterface;
  location: LocationInterface;
  image: string;
  episode: Episode[];
}

export interface ListCharacterResponse {
  info: ResponseInfo;
  results: Character[];
}

export enum CharacterStatus {
  Dead = 'Dead',
  Alive = 'Alive',
  Unknown = 'unknown',
}

export enum CharacterGender {
  Female = 'Female',
  Male = 'Male',
  Genderless = 'Genderless',
  Unknown = 'unknown',
}

export interface Episode extends ResourceBase {
  air_date: string;
  episode: string;
  characters?: Character[];
}

export interface ListEpisodeResponse {
  info: ResponseInfo;
  results: Episode[];
}

export interface LocationInterface extends ResourceBase {
  type: string;
  dimension: string;
  residents?: Character[];
}

export interface ListLocationResponse {
  info: ResponseInfo;
  results: LocationInterface[];
}

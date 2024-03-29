// LIT naming convention: "Class" (uppercase), "property" (lowercase)

const MUD_BASE_URL =
  "https://raw.githubusercontent.com/Multi-User-Domain/vocab/main/mud.ttl";
const MUD_ACCT_BASE_URL =
  "https://raw.githubusercontent.com/Multi-User-Domain/vocab/main/mudacct.ttl";
const MUD_CONTENT_BASE_URL =
  "https://raw.githubusercontent.com/Multi-User-Domain/vocab/main/mudcontent.ttl";
const MUD_LOGIC_BASE_URL =
  "https://raw.githubusercontent.com/Multi-User-Domain/vocab/main/mudlogic.ttl";
const MUD_CHARACTER_BASE_URL =
  "https://raw.githubusercontent.com/Multi-User-Domain/vocab/main/mudchar.ttl";
const MUD_DIALOGUE_BASE_URL =
  "https://raw.githubusercontent.com/Multi-User-Domain/vocab/main/muddialogue.ttl";

export const MUD = {
  Configuration: MUD_BASE_URL + "#Configuration",
  worldEndpoint: MUD_BASE_URL + "#worldEndpoint",
  sceneGenerationEndpoint: MUD_BASE_URL + "#sceneGenerationEndpoint",

  owner: MUD_BASE_URL + "#ownedBy",

  Settlement: MUD_BASE_URL + "#Settlement",
  population: MUD_BASE_URL + "#population",
  hasBuilding: MUD_BASE_URL + "#hasBuilding",

  primaryTextContent: MUD_BASE_URL + "#primaryTextContent",
  primaryImageContent: MUD_BASE_URL + "#primaryImageContent",
};

export const MUD_ACCT = {
  account: MUD_ACCT_BASE_URL + "#Account",
  charactersList: MUD_ACCT_BASE_URL + "#CharacterList",
};

export const MUD_CHARACTER = {
  Party: MUD_CHARACTER_BASE_URL + "#Party",
  Character: MUD_CHARACTER_BASE_URL + "#Character",

  hasTask: MUD_CHARACTER_BASE_URL + "#hasTask",
  mainParty: MUD_CHARACTER_BASE_URL + "#mainParty",
};

export const MUD_CONTENT = {
  sceneDescriptionEndpoint: MUD_CONTENT_BASE_URL + "#sceneDescriptionEndpoint",
  simpleObjectDescriptionEndpoint:
    MUD_CONTENT_BASE_URL + "#simpleObjectDescriptionEndpoint",

  Content: MUD_CONTENT_BASE_URL + "#Content",
  sees: MUD_CONTENT_BASE_URL + "#sees",
  describes: MUD_CONTENT_BASE_URL + "#describes",
  hasText: MUD_CONTENT_BASE_URL + "#hasText",
  hasImage: MUD_CONTENT_BASE_URL + "#hasImage",
};

export const MUD_LOGIC = {
  actionDiscoveryEndpoint: MUD_LOGIC_BASE_URL + "#actionDiscoveryEndpoint",

  Task: MUD_LOGIC_BASE_URL + "#Task",
  Transit: MUD_LOGIC_BASE_URL + "#Transit",
  actAt: MUD_LOGIC_BASE_URL + "#actAt",
};

export const MUD_DIALOGUE = {
  Message: MUD_DIALOGUE_BASE_URL + "#Message",
  performer: MUD_DIALOGUE_BASE_URL + "#performer",
  content: MUD_DIALOGUE_BASE_URL + "#content",
  shorthand: MUD_DIALOGUE_BASE_URL + "#shorthand",
  includeContinuePrompt: MUD_DIALOGUE_BASE_URL + "#includeContinuePrompt",
  selectFollowup: MUD_DIALOGUE_BASE_URL + "#selectFollowup",
  getResponses: MUD_DIALOGUE_BASE_URL + "#getResponses",
  responses: MUD_DIALOGUE_BASE_URL + "#responses",
};

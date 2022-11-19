import { camelCase } from 'change-case';

export const generateId = (elementName, elementType) =>
  `${camelCase(elementName)}_${elementType}`;

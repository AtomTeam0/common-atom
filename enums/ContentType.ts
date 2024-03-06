import { pipe, values, without, filter } from "lodash/fp";

export enum ContentType {
  DOCUMENT = "document",
  VIDEO = "video",
  AUDIO = "audio",
  IMAGE = "image",
  LINK = "link",
}
export const FileContentType = filter(
  (contentType) => contentType !== ContentType.LINK,
  values(ContentType),
);

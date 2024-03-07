export enum ContentType {
  DOCUMENT = "document",
  VIDEO = "video",
  AUDIO = "audio",
  IMAGE = "image",
  LINK = "link",
}

export const fileContentTypes: (
  | ContentType.AUDIO
  | ContentType.DOCUMENT
  | ContentType.IMAGE
  | ContentType.VIDEO
)[] = [
  ContentType.AUDIO,
  ContentType.DOCUMENT,
  ContentType.IMAGE,
  ContentType.VIDEO,
];

export type FileContentType = (typeof fileTypes)[number];

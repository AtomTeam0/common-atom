export enum ContentType {
  DOCUMENT = "document",
  VIDEO = "video",
  AUDIO = "audio",
  IMAGE = "image",
  LINK = "link",
}

export const fileTypes: (
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

export type FileTypes = (typeof fileTypes)[number];

export enum ContentType {
  DOCUMENT = "document",
  VIDEO = "video",
  AUDIO = "audio",
  IMAGE = "image",
  LINK = "link",
}

export const FileContentType: (
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

export type FileContentType = (typeof FileContentType)[number];

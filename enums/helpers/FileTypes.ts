export enum FileTypes {
  IMAGE = "img",
  MP3 = "mp3",
  MP4 = "mp4",
}

export const getContainerNameByFileType = (fileType: FileTypes) => {
  switch (fileType) {
    case FileTypes.IMAGE:
      return "images";
    case FileTypes.MP3:
      return "audio";
    case FileTypes.MP4:
      return "video";
    default:
      return "other";
  }
};

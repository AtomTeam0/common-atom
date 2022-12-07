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
  }
};

export const getMimeTypeByFileType = (fileType: FileTypes) => {
  switch (fileType) {
    case FileTypes.IMAGE:
      return "image/png";
    case FileTypes.MP3:
      return "audio/mpeg";
    case FileTypes.MP4:
      return "video/mp4";
  }
};

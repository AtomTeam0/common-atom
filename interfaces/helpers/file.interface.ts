export interface IFileDetails {
   filepath: string,
   originalFilename: string,
   mimeType: string,
}

export interface IFileValidator {
   maxFileSize: number,
   allowedMimeTypes: string[],
}
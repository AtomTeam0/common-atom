export interface IFileDetails {
   filepath: string,
   originalFilename: string
}

export interface IFileValidator {
   maxFileSize: string,
   allowedMimeTypes: string[],
}
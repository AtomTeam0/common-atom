export interface IFileDetails {
   filepath: string,
   originalFilename: string
}

export interface IFileValidator {
   maxFileSize: number,
   allowedMimeTypes: string[],
}
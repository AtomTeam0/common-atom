export interface IFileDetails {
   filepath: string,
   originalFilename: string,
   mimetype: string,
}

export interface IFileValidator {
   maxFileSize: number,
   allowedMimeTypes: string[],
}
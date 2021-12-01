export class FileUpload {
    key!: string;
    name!: string;
    url!: string;
    file: File;
    entityKey: string;
    percentage?: number;

    constructor(file: File) {
      this.file = file
    }
  }

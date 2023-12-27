export interface ImageDialog {
  isOpen: boolean;
  headTitle: string;
  description: string;
  defaultText?: string;
  placeHolder?: string;
  maxChars?: number;
  onClose: () => void;
  onSubmit: (val: any) => void;
}

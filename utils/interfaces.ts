export interface ImageDialog {
  isOpen: boolean;
  headTitle: string;
  description: string;
  defaultText?: string;
  placeHolder?: string;
  onClose: () => void;
  onSubmit: (val: any) => void;
}

import type { RadioProps } from "@mui/material/Radio";
import type { SliderProps } from "@mui/material/Slider";
import type { TextFieldProps } from "@mui/material/TextField";
import { TypographyProps} from "@mui/material";


type RadioType = string | number;




type TextFieldDesignOmissions =
  | "classes"
  | "FormHelperTextProps"
  | "InputLabelProps"
  | "inputProps"
  | "InputProps"
  | "inputRef"
  | "SelectProps"
  | "slotProps"
  | "slots"
  | "variant"
  | "size";

type SliderDesignOmissions =
  | "classes"
  | "components"
  | "componentsProps"
  | "slotProps"
  | "slots"
  | "color"
  | "orientation";

type RadioDesignOmissions =
  | "classes"
  | "inputProps"
  | "inputRef"
  | "slotProps"
  | "slots"
  | "color"
  | "size";


  export type TextLikeProps = {
  inputType: "text" | "password" | "number";
  onChange?: TextFieldProps["onChange"];
  value?: TextFieldProps["value"];
  defaultValue?: TextFieldProps["defaultValue"];
  disabled?: TextFieldProps["disabled"];
  type?: TextFieldProps["type"];
  ref?: React.Ref<InputTypeToRef["text"]>;
} & Omit<
  TextFieldProps,
  | TextFieldDesignOmissions
  | "onChange"
  | "value"
  | "defaultValue"
  | "disabled"
  | "type"
  | "ref"
>;

export type RangeProps = {
  inputType: "range";
  onChange?: SliderProps["onChange"];
  onChangeCommitted?: SliderProps["onChangeCommitted"];
  value?: SliderProps["value"];
  defaultValue?: SliderProps["defaultValue"];
  disabled?: SliderProps["disabled"];
  trackClassName?: string;
  thumbClassName?: string;
  railClassName?: string;
  ref?: React.Ref<InputTypeToRef["range"]>;
} & Omit<
  SliderProps,
  | SliderDesignOmissions
  | "onChange"
  | "onChangeCommitted"
  | "value"
  | "defaultValue"
  | "disabled"
  | "ref"
>;

export type RadioInputProps = {
  inputType: "radio";
  onChange?: RadioProps["onChange"];
  value?: RadioType;
  checked?: RadioProps["checked"];
  checkedIcon?: RadioProps["checkedIcon"];
  icon?: RadioProps["icon"];
  ref?: React.Ref<InputTypeToRef["radio"]>;
} & Omit<
  RadioProps,
  | RadioDesignOmissions
  | "onChange"
  | "value"
  | "checked"
  | "checkedIcon"
  | "icon"
  | "ref"
>;

export type TypedInputProps =
  | TextLikeProps
  | RangeProps
  | RadioInputProps;


  export type InputTypeToRef = {
  text: HTMLDivElement;
  password: HTMLDivElement;
  number: HTMLDivElement;
  range: HTMLSpanElement;   
  radio: HTMLButtonElement;
};

export type TypedInputComponent = <T extends TypedInputProps["inputType"]>(
  props: Extract<TypedInputProps, { inputType: T }> & {
    ref?: React.Ref<InputTypeToRef[T]>;
  }
) => React.ReactElement | null;



export const mapTypography = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  inherit: 'p'
} as const

type TypeMapTypography = typeof mapTypography

export type TypeVariantTypography = keyof typeof mapTypography;

export type MapVariantTag<V extends TypeVariantTypography> =
  HTMLElementTagNameMap[TypeMapTypography [V]]

/*Este type genera la unión de variantes
type Variant = keyof typeof VariantElementMapTypography;

Eso significa:
"h1" | "h2" | "h3" | "h4" | "h5" | "h6" |
"subtitle1" | "subtitle2" | "body1" | "body2" | "inherit"

O sea: todas las claves del objeto.
*/


export type VariantTypographyComponent = <V extends TypeVariantTypography>(
  props: TypographyProps & {
    variant: V;
    ref?: React.Ref<MapVariantTag<V>>;
  }
) => React.ReactElement | null;


const AlignMainAxis = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  stretch: 'stretch',
  baseline: 'baseline',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly'
} as const;


const AlignCrossAxis = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  stretch: 'stretch',
  baseline: 'baseline'
} as const;

export type TypeAlignMainAxis = keyof typeof AlignMainAxis
export const mapAlignMainAxis = (align: TypeAlignMainAxis = 'center') => {
    return AlignMainAxis[align];
}
export type MainAlign = ReturnType<typeof mapAlignMainAxis>;

export type TypeAlignCrossAxis = keyof typeof AlignCrossAxis
export const mapAlignCrossAxis = (align: TypeAlignCrossAxis = 'center') => {
    return AlignCrossAxis[align];
}
export type CrossAlign = ReturnType<typeof mapAlignCrossAxis>;

export type AlignDirection = 'row' | 'column';


export type AlignMain = keyof typeof AlignMainAxis;
export type AlignCross = keyof typeof AlignCrossAxis;
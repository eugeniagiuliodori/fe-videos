
import type { Tokens } from "../../types/tokens";
import type { Shadow } from "../../types/tokens";


/*
Tokens (estructura semántica)
        ↓
CSS Variables (estructura plana)
*/

type CSSVariables = Record<string, string | number | undefined>;

const shadows : Record<Shadow, string> = {
  none: "none",
  base: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
  medium: "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
  full: "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)"
}

export const translateCSSVariablesToIdentity  = (tokens:Tokens)=>{
    const variables: CSSVariables = {

        /* palette */
        
        "--pmui-palette-primary-main": "black",
        "--pmui-palette-primary-light": tokens.palette.primary.light??undefined,
        "--pmui-palette-primary-dark": tokens.palette.primary.dark??undefined,
        "--pmui-palette-primary-contrastText": tokens.palette.primary.contrastText??undefined,
        "--pmui-palette-primary-bghover": tokens.palette.primary.hover?tokens.palette.primary.hover.backgroundColor?? undefined:undefined,
        "--pmui-palette-primary-bchover": tokens.palette.primary.hover?tokens.palette.primary.hover.borderColor?? undefined:undefined,
        "--pmui-palette-primary-bgfocus": tokens.palette.primary.focus?tokens.palette.primary.focus.backgroundColor?? undefined:undefined,
        "--pmui-palette-primary-bcfocus": tokens.palette.primary.focus?tokens.palette.primary.focus.borderColor?? undefined:undefined,
        "--pmui-palette-primary-bghactive": tokens.palette.primary.active?tokens.palette.primary.active.backgroundColor?? undefined:undefined,
        "--pmui-palette-primary-bcactive": tokens.palette.primary.active?tokens.palette.primary.active.borderColor?? undefined:undefined,
        "--pmui-palette-primary-bgdisabled": tokens.palette.primary.disabled?tokens.palette.primary.disabled.backgroundColor?? undefined:undefined,
        "--pmui-palette-primary-bcdisabled": tokens.palette.primary.disabled?tokens.palette.primary.disabled.borderColor?? undefined:undefined,
        "--pmui-palette-primary-bsdisabled": tokens.palette.primary.disabled?tokens.palette.primary.disabled.borderStyle?? undefined:undefined,
        "--pmui-palette-primary-bwdisabled": tokens.palette.primary.disabled?tokens.palette.primary.disabled.borderWidth?? undefined:undefined,

        "--pmui-palette-secondary-main": tokens.palette.secondary?tokens.palette.secondary.main??undefined:undefined,
        "--pmui-palette-secondary-light": tokens.palette.secondary?tokens.palette.secondary.light??undefined:undefined,
        "--pmui-palette-secondary-dark": tokens.palette.secondary?tokens.palette.secondary.dark??undefined:undefined,
        "--pmui-palette-secondary-contrastText": tokens.palette.secondary?tokens.palette.secondary.contrastText??undefined:undefined,
        "--pmui-palette-secondary-bghover": tokens.palette.secondary?tokens.palette.secondary.hover?tokens.palette.secondary.hover.backgroundColor?? undefined:undefined:undefined,
        "--pmui-palette-secondary-bchover": tokens.palette.secondary?tokens.palette.secondary.hover?tokens.palette.secondary.hover.borderColor?? undefined:undefined:undefined,
        "--pmui-palette-secondary-bgfocus": tokens.palette.secondary?tokens.palette.secondary.focus?tokens.palette.secondary.focus.backgroundColor?? undefined:undefined:undefined,
        "--pmui-palette-secondary-bcfocus": tokens.palette.secondary?tokens.palette.secondary.focus?tokens.palette.secondary.focus.borderColor?? undefined:undefined:undefined,
        "--pmui-palette-secondary-bghactive": tokens.palette.secondary?tokens.palette.secondary.active?tokens.palette.secondary.active.backgroundColor?? undefined:undefined:undefined,
        "--pmui-palette-secondary-bcactive": tokens.palette.secondary?tokens.palette.secondary.active?tokens.palette.secondary.active.borderColor?? undefined:undefined:undefined,
        "--pmui-palette-secondary-bgStartGradientHover": tokens.palette.secondary?tokens.palette.secondary.bgStartGradientHover??undefined:undefined,
        "--pmui-palette-secondary-bgEndGradientHover": tokens.palette.secondary?tokens.palette.secondary.bgEndGradientHover??undefined:undefined,

        "--pmui-palette-error-main": tokens.palette.error?tokens.palette.error.main??undefined:undefined,
        "--pmui-palette-error-light": tokens.palette.error?tokens.palette.error.light??undefined:undefined,
        "--pmui-palette-error-dark": tokens.palette.error?tokens.palette.error.dark??undefined:undefined,
        "--pmui-palette-error-contrastText": tokens.palette.error?tokens.palette.error.contrastText??undefined:undefined,
        "--pmui-palette-error-bghover": tokens.palette.error?tokens.palette.error.hover?tokens.palette.error.hover.backgroundColor?? undefined:undefined:undefined,
        "--pmui-palette-error-bchover": tokens.palette.error?tokens.palette.error.hover?tokens.palette.error.hover.borderColor?? undefined:undefined:undefined,
        "--pmui-palette-error-bgfocus": tokens.palette.error?tokens.palette.error.focus?tokens.palette.error.focus.backgroundColor?? undefined:undefined:undefined,
        "--pmui-palette-error-bcfocus": tokens.palette.error?tokens.palette.error.focus?tokens.palette.error.focus.borderColor?? undefined:undefined:undefined,
        "--pmui-palette-error-bghactive": tokens.palette.error?tokens.palette.error.active?tokens.palette.error.active.backgroundColor?? undefined:undefined:undefined,
        "--pmui-palette-error-bcactive": tokens.palette.error?tokens.palette.error.active?tokens.palette.error.active.borderColor?? undefined:undefined:undefined,

        "--pmui-palette-warning-main": tokens.palette.warning?tokens.palette.warning.main??undefined:undefined,
        "--pmui-palette-warning-light": tokens.palette.warning?tokens.palette.warning.light??undefined:undefined,
        "--pmui-palette-warning-dark": tokens.palette.warning?tokens.palette.warning.dark??undefined:undefined,
        "--pmui-palette-warning-contrastText": tokens.palette.warning?tokens.palette.warning.contrastText??undefined:undefined,
        "--pmui-palette-warning-bghover": tokens.palette.warning?tokens.palette.warning.hover?tokens.palette.warning.hover.backgroundColor?? undefined:undefined:undefined,
        "--pmui-palette-warning-bchover": tokens.palette.warning?tokens.palette.warning.hover?tokens.palette.warning.hover.borderColor?? undefined:undefined:undefined,
        "--pmui-palette-warning-bgfocus": tokens.palette.warning?tokens.palette.warning.focus?tokens.palette.warning.focus.backgroundColor?? undefined:undefined:undefined,
        "--pmui-palette-warning-bcfocus": tokens.palette.warning?tokens.palette.warning.focus?tokens.palette.warning.focus.borderColor?? undefined:undefined:undefined,
        "--pmui-palette-warning-bghactive": tokens.palette.warning?tokens.palette.warning.active?tokens.palette.warning.active.backgroundColor?? undefined:undefined:undefined,
        "--pmui-palette-warning-bcactive": tokens.palette.warning?tokens.palette.warning.active?tokens.palette.warning.active.borderColor?? undefined:undefined:undefined,

        "--pmui-palette-info-main": tokens.palette.info?tokens.palette.info.main??undefined:undefined,
        "--pmui-palette-info-light": tokens.palette.info?tokens.palette.info.light??undefined:undefined,
        "--pmui-palette-info-dark": tokens.palette.info?tokens.palette.info.dark??undefined:undefined,
        "--pmui-palette-info-contrastText": tokens.palette.info?tokens.palette.info.contrastText??undefined:undefined,
        "--pmui-palette-info-bghover": tokens.palette.info?tokens.palette.info.hover?tokens.palette.info.hover.backgroundColor?? undefined:undefined:undefined,
        "--pmui-palette-info-bchover": tokens.palette.info?tokens.palette.info.hover?tokens.palette.info.hover.borderColor?? undefined:undefined:undefined,
        "--pmui-palette-info-bgfocus": tokens.palette.info?tokens.palette.info.focus?tokens.palette.info.focus.backgroundColor?? undefined:undefined:undefined,
        "--pmui-palette-info-bcfocus": tokens.palette.info?tokens.palette.info.focus?tokens.palette.info.focus.borderColor?? undefined:undefined:undefined,
        "--pmui-palette-info-bghactive": tokens.palette.info?tokens.palette.info.active?tokens.palette.info.active.backgroundColor?? undefined:undefined:undefined,
        "--pmui-palette-info-bcactive": tokens.palette.info?tokens.palette.info.active?tokens.palette.info.active.borderColor?? undefined:undefined:undefined,

        "--pmui-palette-success-main": tokens.palette.success?tokens.palette.success.main??undefined:undefined,
        "--pmui-palette-success-light": tokens.palette.success?tokens.palette.success.light??undefined:undefined,
        "--pmui-palette-success-dark": tokens.palette.success?tokens.palette.success.dark??undefined:undefined,
        "--pmui-palette-success-contrastText": tokens.palette.success?tokens.palette.success.contrastText??undefined:undefined,
        "--pmui-palette-success-bghover": tokens.palette.success?tokens.palette.success.hover?tokens.palette.success.hover.backgroundColor?? undefined:undefined:undefined,
        "--pmui-palette-success-bchover": tokens.palette.success?tokens.palette.success.hover?tokens.palette.success.hover.borderColor?? undefined:undefined:undefined,
        "--pmui-palette-success-bgfocus": tokens.palette.success?tokens.palette.success.focus?tokens.palette.success.focus.backgroundColor?? undefined:undefined:undefined,
        "--pmui-palette-success-bcfocus": tokens.palette.success?tokens.palette.success.focus?tokens.palette.success.focus.borderColor?? undefined:undefined:undefined,
        "--pmui-palette-success-bghactive": tokens.palette.success?tokens.palette.success.active?tokens.palette.success.active.backgroundColor?? undefined:undefined:undefined,
        "--pmui-palette-success-bcactive": tokens.palette.success?tokens.palette.success.active?tokens.palette.success.active.borderColor?? undefined:undefined:undefined,
    
        "--pmui-palette-text-primary": tokens.palette.text?tokens.palette.text.primary:undefined,
        "--pmui-palette-text-secondary": tokens.palette.text?tokens.palette.text.secondary:undefined,
        "--pmui-palette-text-disabled": tokens.palette.text?tokens.palette.text.disabled:undefined,
    
        "--pmui-palette-background-default": tokens.palette.background?tokens.palette.background.default:undefined,
        "--pmui-palette-background-paper": tokens.palette.background?tokens.palette.background.paper:undefined,
    
        "--pmui-palette-divider": tokens.palette.divider?tokens.palette.divider:undefined,
    
        /* typography */
        "--pmui-typography-fontFamily":tokens.typography?tokens.typography.fontFamily:undefined,
        "--pmui-typography-fontSize":tokens.typography?tokens.typography.fontSize:undefined,
        "--pmui-typography-fontWeightRegular":tokens.typography?Number(tokens.typography.fontWeightRegular):undefined,
        "--pmui-typography-fontWeightBold":tokens.typography?Number(tokens.typography.fontWeightBold):undefined,
    
        /* defaultSmallComponent */
        "--pmui-dsc-maxHeight":tokens.defaultSmallComponent?tokens.defaultSmallComponent.maxHeight:undefined,
        "--pmui-dsc-minHeight":tokens.defaultSmallComponent?tokens.defaultSmallComponent.minHeight:undefined,
        "--pmui-dsc-maxWidth":tokens.defaultSmallComponent?tokens.defaultSmallComponent.maxWidth:undefined,
        "--pmui-dsc-minWidth":tokens.defaultSmallComponent?tokens.defaultSmallComponent.minWidth:undefined,
        "--pmui-dsc-width":tokens.defaultSmallComponent?tokens.defaultSmallComponent.width:undefined,
        "--pmui-dsc-height":tokens.defaultSmallComponent?tokens.defaultSmallComponent.height:undefined,
        "--pmui-dsc-padding":tokens.defaultSmallComponent?tokens.defaultSmallComponent.padding:undefined,
        "--pmui-dsc-flexDirection":tokens.defaultSmallComponent?tokens.defaultSmallComponent.flexDirection:undefined,
        "--pmui-dsc-alignItem":tokens.defaultSmallComponent?tokens.defaultSmallComponent.alignItem:undefined,
        "--pmui-dsc-justifyContent":tokens.defaultSmallComponent?tokens.defaultSmallComponent.justifyContent:undefined,
        /*"--pmui-dsc-borderRadius":tokens.defaultSmallComponent?tokens.defaultSmallComponent.borderRadius:undefined,*/
        "--pmui-dsc-borderColor":tokens.defaultSmallComponent?tokens.defaultSmallComponent.borderColor:undefined,
        "--pmui-dsc-borderWidth":tokens.defaultSmallComponent?tokens.defaultSmallComponent.borderWidth:undefined,
        "--pmui-dsc-borderStyle":tokens.defaultSmallComponent?tokens.defaultSmallComponent.borderStyle:undefined,
        "--pmui-select-borderRadius":tokens.defaultSmallComponent?tokens.defaultSmallComponent.finalComponent.select.borderRadius:undefined,
        "--pmui-select-border":tokens.defaultSmallComponent?tokens.defaultSmallComponent.finalComponent.select.border:undefined,
        "--pmui-select-minWidth":tokens.defaultSmallComponent?tokens.defaultSmallComponent.finalComponent.select.minWidth:undefined,
        "--pmui-select-lineHeight":tokens.defaultSmallComponent?tokens.defaultSmallComponent.finalComponent.select.lineHeight:undefined,
        "--pmui-svg-minWidth":tokens.defaultSmallComponent?tokens.defaultSmallComponent.finalComponent.svg.minWidth:undefined,
        "--pmui-svg-width":tokens.defaultSmallComponent?tokens.defaultSmallComponent.finalComponent.svg.width:undefined,
        "--pmui-svg-height":tokens.defaultSmallComponent?tokens.defaultSmallComponent.finalComponent.svg.height:undefined,


        /* common colors */
        "--pmui-color-white" : tokens.palette.common?.white,
        "--pmui-color-black" : tokens.palette.common?.black,

        /* surface */
          /* elevations */
          "--pmui-surface-shadow": shadows[tokens.surface.elevations.shadow],

          /* background */
          "--pmui-surface-bgimage": tokens.surface.background?.image,
          "--pmui-surface-bgsize": tokens.surface.background?.size,
          "--pmui-surface-bgpos": tokens.surface.background?.position,
          "--pmui-surface-bgrepeat" : tokens.surface.background?.repeat,
          "--pmui-surface-bgcolor" : tokens.surface.background?.color
    };

    return variables;

}

export const translateCSSVblesToPublicVbles = (
  variables: CSSVariables
): CSSVariables => {

  const result:CSSVariables = {};

  for (const [key, value] of Object.entries(variables)) {

    let newKey = key
      .replaceAll("-palette-primary", "-color-primary")
      .replaceAll("-palette-secondary", "-color-secondary")
      .replaceAll("-palette-error", "-color-error")
      .replaceAll("-palette-warning", "-color-warning")
      .replaceAll("-palette-info", "-color-info")
      .replaceAll("-palette-success", "-color-success")
      .replaceAll("-palette", "-color")
      .replaceAll("-typography", "")

    result[newKey] = value;
  }
  return result;
};

export const buildCSSBlock = (vars: CSSVariables) => {
  const body = Object.entries(vars)
    .map(([key, value]) => `${key}: ${value};`)
    .join("\n");

  return `:root {\n${body}\n}`;
}

export const injectCSSVariables = (vars: Record<string, string>) => {
  const styleId = "mlui-theme-vars";
  let styleTag = document.getElementById(styleId) as HTMLStyleElement | null;

  const css = buildCSSBlock(vars);

  if (!styleTag) {
    styleTag = document.createElement("style");
    styleTag.id = styleId;
    document.head.appendChild(styleTag);
  }

  styleTag.innerHTML = css;
}



        
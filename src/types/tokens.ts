

import { hexToRgba } from "@/components/utils/utils";
import { Theme } from "@mui/material";

export type Shadow = 'none' | 'base' | 'medium' | 'full'

/* -----------------------------tokens de diseño de temas------------------------------ */

export type Tokens = {
  palette: {
    mode?: 'light' | 'dark';
    common?:{
      white:string,
      black:string
    },
    primary: {
        main: string;
        light?: string;
        dark?: string;
        contrastText?: string;
        hover?:{
            backgroundColor?: string;
            borderColor?: string;
            borderStyle?:string;
            borderWidth?:string;
        },
        focus?:{
            backgroundColor?: string;
            borderColor?: string;
            borderStyle?:string;
            borderWidth?:string;
        },
        active?:{
            backgroundColor?: string;
            borderColor?: string;
            borderStyle?:string;
            borderWidth?:string;
        },
        disabled?:{
            backgroundColor?: string;
            borderColor?: string;
            borderStyle?:string;
            borderWidth?:string;
        }
    };
    secondary?: {
        main: string;
        light?: string;
        dark?: string;
        contrastText?: string;
        bgStartGradientHover?: string;
        bgEndGradientHover?: string;
        hover?:{
            backgroundColor?: string;
            borderColor?: string;
            borderStyle?:string;
            borderWidth?:string;
        },
        focus?:{
            backgroundColor?: string;
            borderColor?: string;
            borderStyle?:string;
            borderWidth?:string;
        },
        active?:{
            backgroundColor?: string;
            borderColor?: string;
            borderStyle?:string;
            borderWidth?:string;
        },
          disabled?:{
            backgroundColor?: string;
            borderColor?: string;
            borderStyle?:string;
            borderWidth?:string;
        }
    };
    error?: {
        main: string;
        light?: string;
        dark?: string;
        contrastText?: string;
        hover?:{
            backgroundColor?: string;
            borderColor?: string;
            borderStyle?:string;
            borderWidth?:string;
        },
        focus?:{
            backgroundColor?: string;
            borderColor?: string;
            borderStyle?:string;
            borderWidth?:string;
        },
        active?:{
            backgroundColor?: string;
            borderColor?: string;
            borderStyle?:string;
            borderWidth?:string;
        },
        disabled?:{
            backgroundColor?: string;
            borderColor?: string;
            borderStyle?:string;
            borderWidth?:string;
        }
    };
    warning?: {
        main: string;
        light?: string;
        dark?: string;
        contrastText?: string;
        hover?:{
            backgroundColor?: string;
            borderColor?: string;
            borderStyle?:string;
            borderWidth?:string;
        },
        focus?:{
            backgroundColor?: string;
            borderColor?: string;
            borderStyle?:string;
            borderWidth?:string;
        },
        active?:{
            backgroundColor?: string;
            borderColor?: string;
            borderStyle?:string;
            borderWidth?:string;
        },
          disabled?:{
            backgroundColor?: string;
            borderColor?: string;
            borderStyle?:string;
            borderWidth?:string;
        }
    };
    info?: {
        main: string;
        light?: string;
        dark?: string;
        contrastText?: string;
        hover?:{
            backgroundColor?: string;
            borderColor?: string;
            borderStyle?:string;
            borderWidth?:string;
        },
        focus?:{
            backgroundColor?: string;
            borderColor?: string;
            borderStyle?:string;
            borderWidth?:string;
        },
        active?:{
            backgroundColor?: string;
            borderColor?: string;
            borderStyle?:string;
            borderWidth?:string;
        },
          disabled?:{
            backgroundColor?: string;
            borderColor?: string;
            borderStyle?:string;
            borderWidth?:string;
        }
    };
    success?: {
        main: string;
        light?: string;
        dark?: string;
        contrastText?: string;
        hover?:{
            backgroundColor?: string;
            borderColor?: string;
            borderStyle?:string;
            borderWidth?:string;
        },
        focus?:{
            backgroundColor?: string;
            borderColor?: string;
            borderStyle?:string;
            borderWidth?:string;
        },
        active?:{
            backgroundColor?: string;
            borderColor?: string;
            borderStyle?:string;
            borderWidth?:string;
        },
          disabled?:{
            backgroundColor?: string;
            borderColor?: string;
            borderStyle?:string;
            borderWidth?:string;
        }
    };

    text?: {
        primary: string;
        secondary: string;
        disabled: string;
    };
    background?: {
        default: string;
        paper: string;
    };
    divider?: string;
    action?:{
       active: string,
       focus: string,
       hover: string,
       disabled:string,
       disabledBackground:string,
       disabledOpacity:number,
       borderColor:string
    }
  },

  typography:{
    fontFamily: string;      
    fontSize: string;   
    fontWeightRegular: string;
    fontWeightBold: string;
  },
  defaultSmallComponent:{
    maxHeight:string;
    minHeight: string;
    maxWidth: string;
    minWidth: string;
    width:string;
    height:string;
    padding:string;
    flexDirection:string;
    alignItem:string;
    justifyContent:string;
    borderRadius:string;
    borderColor:string;
    borderStyle:string;
    borderWidth:string;
    finalComponent:{
      select:{
        minWidth:string;
        borderRadius:string;
        border: string;
        lineHeight:string;
      },
      svg:{
        minWidth:string;
        width:string;
        height:string;
      }
    }
  },
  surface:{
    elevations:{
      shadow:Shadow
    },
    background?:{
      image?:string;
      color?:string;
      size?:string; 
      position?:string;
      repeat?:string;
    }
  }  
}

export type AppTheme = {
  name: string,
  mode: string,
  tokens: Tokens 
}

/* ----------------------------------Inicializacion tokens---------------------------------- */


 const baseVersion: Tokens = {

  palette: {
    common:{
      white:"#fdfdfdff",
      black:"#030000ff"
    },
   primary: {
              main: "#d50000",
              light: "#ffffffff",
              dark:"#000000",
              hover:{
                backgroundColor:hexToRgba("#600000", 0.2),
                borderColor: "#600000",
                borderStyle:"dashed",
                borderWidth:"0.5px"
              },
              focus:{
                borderColor: "#600000",
                borderStyle:"dashed",
                borderWidth:"0.5px"
              },
               disabled:{
                borderColor: "#706c6cff",
                backgroundColor: "#b6aaaaff"
               }
            
            },

    secondary: {
      main: "#ffebee",
      light: "#ffebee",
      dark:"#ef5350",
      bgStartGradientHover:"#ffcdd2",
      bgEndGradientHover:"#ef5350"
    },
     text: {
        primary: "#600000",
        secondary: "#ef5350",
        disabled: '#776d6bff'
    },
   /*
    action:{
       active: "",
       focus: "",
       hover: "",
       disabled:"",
       disabledBackground:"",
       disabledOpacity:0.4,
       borderColor:""
    }
    */

  },
   typography:{
    fontFamily: "Roboto",      
    fontSize: '12',   
    fontWeightRegular: '400',
    fontWeightBold: '600'
  },
  defaultSmallComponent:{
    maxHeight:"3rem",
    minHeight: "2rem",
    maxWidth: "2rem",
    minWidth: "2rem",
    width:"2rem",
    height:"3rem",
    padding:"0rem",
    flexDirection:"row",
    alignItem:"center",
    justifyContent:"center",
    borderRadius:"10rem",
    borderColor: "#600000",
    borderStyle:"dashed",
    borderWidth:"0.5px",
    finalComponent: {
      select: {
        minWidth:"3rem",
        borderRadius: "15px",
        border: "2px solid white",
        lineHeight:"1.2"
      },
      svg:{
        minWidth:"0",
        width:"1.25",
        height:"1.25"
      }
    }
  },
  surface :{
    elevations:{
      shadow: "none"
    },
    background:{
      image: "url('/images/dialog-bg.jpeg')",
      size: "cover",
      position: "center",
      repeat: "no-repeat"
    }
  }
};

const versionLight : Tokens = {
  ...baseVersion,
  palette: { 
            ...baseVersion.palette, 
             
            mode: 'light',
            background: {
              default: "#ff0000",
              paper: 'white'
            },
            
          },
};


const versionDark : Tokens = {
  ...baseVersion,
  palette: { 
            ...baseVersion.palette, 
             primary: {
              main: "#000000",
              light: "white",
              dark:"#000000",
              hover:{
                backgroundColor:hexToRgba("#ff0000", 0.2),
                borderColor: "#ff0000",
                borderStyle:"dashed",
                borderWidth:"0.5px"
              },
              focus:{
                borderColor: "#ff0000",
                borderStyle:"dashed",
                borderWidth:"0.5px"
              },
               disabled:{
                backgroundColor: "gray",
                borderColor: "gray"
               }
            
            },
            mode: 'dark',
            background: {
              default: "#000000ff",
              paper: 'white'
            },
            text:{
              primary: "#600000",
              secondary: "#c25b94ff",
              disabled: '#c0bfbc'
            },
          },
};




 export const lightTheme: AppTheme = {
  name: "default-light",
  mode: "light",
  tokens: versionLight 
}

 export const darkTheme: AppTheme = {
  name: "default-dark",
  mode: "dark",
  tokens: versionDark
}

 export const activeTheme: AppTheme = lightTheme;

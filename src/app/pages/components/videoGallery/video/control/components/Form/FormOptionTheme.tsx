
import React from "react";
import { PlayerThemeProps } from "@/types/interfaces";
import RadioGroup from "@mui/material/RadioGroup";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { FormControlLabel } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@/components/common/ui/Typography";
import SimpleCustomInput from "@/components/common/ui/TypedInput";
import muiStyles from "@/pages/components/videoGallery/video/control/styles/mui.module.css";
import styles from "@/pages/components/videoGallery/video/control/styles/control.module.css";
import {globaltheme} from "@/app/styles/Themes";
import { CSSProperties } from "@mui/material/styles";
import clsx from 'clsx';
import {darkTheme, lightTheme} from '@/types/tokens';
import { useContext } from 'react';
import { ThemeContext } from '@/app/ThemeProviderWrapper';



const FormOptionTheme: React.FC<PlayerThemeProps> = (props) => {

  const composedClassName = clsx(muiStyles, styles.container);
const { activeTheme, setActiveTheme } = useContext(ThemeContext);
 

  return (

    <Box className={styles.container}>
      <Typography variant="inherit" className={styles.label}>
        Tema de colores:
      </Typography>

     
    <Stack direction="row" spacing={4} alignItems="center">
        <RadioGroup row   sx={{width:"100%"}} >     
              <FormControlLabel value="claro" label="Claro" labelPlacement="bottom" className={muiStyles.FormLabelTheme} 
                control=
                  {<SimpleCustomInput  inputType="radio" name="tema"  className={muiStyles.RadioInput}
                    icon= {
                            <Box className={muiStyles.RadioIconBox}> 
                              <RadioButtonUncheckedIcon className={muiStyles.uncheckedIcon} sx={{}}/>
                            </Box>
                          } 
                      checkedIcon={
                                    <Box className={muiStyles.RadioIconBox}> 
                                      <RadioButtonCheckedIcon 
                                          sx={{   
                                                transform: 'translate(-0.2px, 0.2px)',
                                                '--radio-checked-color': globaltheme.palette.primary.main
                                              } as CSSProperties}
                                              className={muiStyles.checkedIcon}
                                      />
                                    </Box>
                                  }
                      onClick={(e)=>{setActiveTheme(lightTheme)}}
                  />}   
              
              />
              <FormControlLabel value="oscuro" label="Oscuro" labelPlacement="bottom" className={muiStyles.FormLabelTheme} 
                control=
                  {<SimpleCustomInput  inputType="radio" name="tema"  className={muiStyles.RadioInput}
                      icon={<Box className={muiStyles.RadioIconBox}
                            > 
                              <RadioButtonUncheckedIcon className={muiStyles.uncheckedIcon}/>
                            </Box>
                      } 
                      checkedIcon={ 
                            <Box className={muiStyles.RadioIconBox}>   
                              <RadioButtonCheckedIcon 
                                  sx={{
                                        transform: 'translate(-0.2px, 0.2px)',
                                        "--radio-checked-color": globaltheme.palette.primary.main 
                                      } as CSSProperties} 
                                      className={muiStyles.checkedIcon}
                                />
                            </Box>
                      }
                      onClick={(e)=>{setActiveTheme(darkTheme)}}
                  />}         
                />
                
   
      </RadioGroup>
 
    </Stack>
    </Box>

  );
};

export default FormOptionTheme;

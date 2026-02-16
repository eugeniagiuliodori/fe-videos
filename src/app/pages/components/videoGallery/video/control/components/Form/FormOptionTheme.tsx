import React from "react";
import { PlayerThemeProps } from "@/interfaces/interfaces";
import RadioGroup from "@mui/material/RadioGroup";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { FormControlLabel } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@/components/common/ui/Typography";
import SimpleCustomInput from "@/components/common/ui/TypedInput";
import styles from "@/pages/components/videoGallery/video/control/Control.module.css";
import {globaltheme} from "@/pages/Themes";
import { CSSProperties } from "@mui/material/styles";


const FormOptionTheme: React.FC<PlayerThemeProps> = ({theme, setTheme }) => {


  return (

    <Box className={styles.container}>
      <Typography variant="inherit" className={styles.label}>
        Tema de colores:
      </Typography>

     
    <Stack direction="row" spacing={4} alignItems="center">
        <RadioGroup row   sx={{width:"100%"}} >     
              <FormControlLabel value="claro" label="Claro" labelPlacement="bottom" className={styles.FormLabelTheme} 
                control=
                  {<SimpleCustomInput  inputType="radio" name="tema"  className={styles.RadioInput}
                    icon= {
                            <Box className={styles.RadioIconBox}> 
                              <RadioButtonUncheckedIcon className={styles.uncheckedIcon} sx={{}}/>
                            </Box>
                          } 
                      checkedIcon={
                                    <Box className={styles.RadioIconBox}> 
                                      <RadioButtonCheckedIcon 
                                          sx={{   
                                                transform: 'translate(-0.2px, 0.2px)',
                                                '--radio-checked-color': globaltheme.palette.primary.main
                                              } as CSSProperties}
                                              className={styles.checkedIcon}
                                      />
                                    </Box>
                                  }
                      onClick={()=>setTheme("youtubered")}
                  />}   
              
              />
              <FormControlLabel value="oscuro" label="Oscuro" labelPlacement="bottom" className={styles.FormLabelTheme} 
                control=
                  {<SimpleCustomInput  inputType="radio" name="tema"  className={styles.RadioInput}
                      icon={<Box className={styles.RadioIconBox}
                            > 
                              <RadioButtonUncheckedIcon className={styles.uncheckedIcon}/>
                            </Box>
                      } 
                      checkedIcon={ 
                            <Box className={styles.RadioIconBox}>   
                              <RadioButtonCheckedIcon 
                                  sx={{
                                        transform: 'translate(-0.2px, 0.2px)',
                                        "--radio-checked-color": globaltheme.palette.primary.main 
                                      } as CSSProperties} 
                                      className={styles.checkedIcon}
                                />
                            </Box>
                      }
                      onClick={()=>setTheme("youtubedark")}
                  />}         
                />
                
   
      </RadioGroup>
 
    </Stack>
    </Box>

  );
};

export default FormOptionTheme;

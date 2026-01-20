import React from "react";
import { PlayerThemeProps } from "@/interfaces/interfaces";
import RadioGroup from "@mui/material/RadioGroup";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SimpleCustomInput from "@/components/common/ui/TypedInput";
import styles from "../../Control.module.css";

const PlayerTheme: React.FC<PlayerThemeProps> = ({ theme, setTheme }) => {

 const radioLabelSX = {
  display: 'inline-flex',   
  flexDirection: 'row',
  alignItems: 'center',
  width: 'auto',          
};
  const radioInputSX = {
    width: 28,
    height: 28,
    color: 'white',
    '&.Mui-checked': { color: 'gray' },
    
  };

  const radioIconBoxSX = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  };

  return (
    <Box className={styles.container}>
      <Typography className={styles.label} component="p">
        Tema de colores:
      </Typography>

     
    <Stack direction="row" spacing={4} alignItems="center">
        <RadioGroup row   sx={{width:"100%"}} >     
        <FormControlLabel value="claro" label="Claro" labelPlacement="bottom" 
                sx={{width:"50%", margin:"0", '& .MuiFormControlLabel-label': {fontSize: '0.7rem', lineHeight: 1.2}}}
                control=
                  {<SimpleCustomInput  inputType="radio" name="tema"
                      sx={{'& .MuiSvgIcon-root': {fontSize: '0.8rem'}}}
                      icon={<Box sx={{  borderRadius: "50%",color: "#ffffff", bgcolor:"#ffffff",
                                        display: "flex", alignItems: "center", justifyContent: "center",}}
                            > 
                              <RadioButtonUncheckedIcon />
                            </Box>
                            } 
                      checkedIcon={<RadioButtonCheckedIcon sx={{ color: "#374151"}} />}
                      onClick={()=>setTheme("youtubered")}
                  />}   
              
              />
              <FormControlLabel value="oscuro" label="Oscuro" labelPlacement="bottom"
                sx={{width:"50%", margin:"0", '& .MuiFormControlLabel-label': {fontSize: '0.7rem', lineHeight: 1.2}}}
                control=
                  {<SimpleCustomInput  inputType="radio" name="tema"
                      sx={{'& .MuiSvgIcon-root': {fontSize: '0.8rem'}}}
                      icon={<Box sx={{  borderRadius: "50%",color: "#ffffff",bgcolor:"#ffffff",
                                        display: "flex", alignItems: "center", justifyContent: "center",}}
                            > 
                              <RadioButtonUncheckedIcon />
                            </Box>
                            } 
                      checkedIcon={ <RadioButtonCheckedIcon sx={{ color: "#374151" }} />}
                      onClick={()=>setTheme("youtubedark")}
                  />}         
                >
                </FormControlLabel>
   
      </RadioGroup>
 
    </Stack>
    </Box>
  );
};

export default PlayerTheme;

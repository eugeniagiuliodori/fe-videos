"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@/components/common/ui/Button";
import Typography from "@/components/common/ui/Typography";
import { redirect } from "next/navigation";
import styles from "./page-home.module.css";
import {DEFAULT_IDENTITY} from "@/types/interfaces";
import SVGPaths from "@/components/common/ui/SVGPaths";
import logo from "@/assets/logo/icon/logo.json";
import { useTheme } from "@mui/material";
import { CSSProperties } from "@mui/material/styles";
import { activeTheme } from "@/types/tokens";
import { TokenBox} from "@/pages/components/videoGallery/video/control/components/Box/CustomBox";
import {MenuItem} from "@/pages/components/videoGallery/video/control/components/MenuItem/MenuItem";
import Menu from "@/components/common/ui/Menu";

export default function Home() {
  const theme = useTheme();
  return (

    <Container component="main" className={styles.main}  data-brand={DEFAULT_IDENTITY.brand} data-theme={DEFAULT_IDENTITY.theme}>
        <Box sx={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",   minHeight: "100vh", minWidth: "100vw"}}>
           <Box  sx={{ display:"flex", flexDirection:"row", justifyContent:"left", alignItems:"center", minWidth: "100vw", position:"absolute",top:"0px"}}>
          <Menu disabled={true}  text="PREMIUM">
            <MenuItem<string> disabled={true}  value="1">OPCION 1</MenuItem>
            <MenuItem<string> disabled={true} value="2">OPCION 2</MenuItem>
          </Menu>
          </Box>
          <Box className={styles.containerTitle}>
            <Box component="span" className={styles.logoTitle} >
           
                  <Box component="span" sx={{ padding:"0px", width:"20%" ,height:"20%" ,display: "inline-flex", alignItems: "center", mr: 1 }}>
                    <SVGPaths   viewBox={logo.viewBox}  fill={activeTheme.tokens.palette.primary.hover?.borderColor}
                                paths={[{d:logo.paths[0]}]}   
                    />
                  </Box>
          
              <Typography variant="h3"  className={styles.title} >
                UN ESPACIO MUSICAL
              </Typography>
            </Box>
          </Box>
          <TokenBox className={styles.buttonContainer}>
           {/*
              <Button 
                onClick={() => redirect("/pages/playlists")}
                className={styles.playlistButton}
                style={{"--pmuibtn-color":theme.palette.text.primary}as CSSProperties}
              >
                            <Typography variant="h6" className={styles.textBtns} >MIS PLAYLIST</Typography>
              </Button>
            */}
            
            <Button
              onClick={() => redirect("/pages/gallery")}
              className={styles.activePlaylistButton}
              style={{"--pmuibtn-color":theme.palette.text.primary}as CSSProperties}
      
          >
              <Typography variant="h6" className={styles.textBtns} >REPRODUCIR</Typography>
            </Button>
          </TokenBox>
        </Box>
    </Container>
   
  );
}

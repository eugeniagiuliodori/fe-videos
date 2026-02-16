import { Button as MUIButton, ButtonProps as ButtonType} from "@mui/material";
import {mapAlignMainAxis, mapAlignCrossAxis,AlignMain, AlignCross, AlignDirection } from '../types/interfaces';
import type {TypeAlignMainAxis, TypeAlignCrossAxis} from '../types/interfaces';
import styles from './structure_styles/styles.module.css';
import { mergeSx } from "@/components/utils/utils";
import clsx from 'clsx';

export type ButtonProps  = Omit<ButtonType,'ref' | 'classes'| 'loadingIndicator'> 
                            & {
                                loadingIndicator?:React.ReactElement,
                                mainAxis?: AlignMain,  
                                crossAxis?: AlignCross,
                                directionFlex?: AlignDirection                            
                              };

const isLayoutSafe = (flexDirection?: AlignDirection, justifyContent?: AlignMain, alignItems?: AlignCross, hasIcon: boolean) => {
  return !!(flexDirection && justifyContent && alignItems)
         ||
         (flexDirection===undefined && justifyContent===undefined && alignItems===undefined) 
  /*if (flexDirection === 'column') {
    if (['between','around','evenly'].includes(justifyContent)) return false;
    if (hasIcon) return false; // icon dentro de column puede romper layout
  }
  if (alignItems === 'stretch') return false; // rompe altura uniforme
  if (alignItems === 'baseline' && hasIcon) return false;
  return true; // combinaciones “seguros”
  */
}                              


const Button = 
(props: ButtonProps & {ref?: React.Ref<HTMLButtonElement>}) => {
  const { className, ref, children,loading, loadingIndicator, mainAxis, crossAxis, directionFlex, disabled, ['aria-busy']: ariaBusy, sx, ...rest } = props;

  const mergedSx = mergeSx(sx);
  const composedClassName = clsx(className);
  //Escalabilidad con definicion de merge:
  /*
    const defaultSx : SxProps<Theme> = {}
    const mergedSx = mergeSx(
    defaultSx,
    variableSx1,
    variableSx2,
    ...
    variableSxN,
    sx // siempre último = prioridad del usuario

    const mergedSx = mergeSx(variableSx1...,variableSxN, defaultSx,sx);
    Si variableSx1, ..., variableSxN tambien las define el usuario, van al ultimo analizando bien el 
    orden entre ellas para garantizar lo maximo posible la prioridad de los estilos
    definidos por el usuario
  )
  */


  return (
    <MUIButton
      ref={ref}
      className={composedClassName}
      sx={mergedSx}
      loading={loading}
      loadingIndicator={loadingIndicator}
      disabled={disabled}
      aria-busy={ariaBusy}

      {...rest}
      >
        <div className={ 
          isLayoutSafe(
                        directionFlex,
                        mainAxis,
                        crossAxis,
                       !!(props.startIcon||props.endIcon)
                      ) 
                       
          ? 
          styles.innerLayoutButtonCustom : styles.innerLayoutDefault
                      
              }
              style={{
                ['--btn-justify-content' as TypeAlignMainAxis]: mapAlignMainAxis(mainAxis),
                ['--btn-align-items' as TypeAlignCrossAxis]: mapAlignCrossAxis(crossAxis),
                ['--btn-flex-direction' as any]: directionFlex,
              }}
        > 
          {children}
        </div>    
    </MUIButton>
  );
}
export default Button;


/*

| Situación                                   | Consideración                            | Razonamiento                                                            |
| ------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------- |
| `row` + `alignItems: stretch`               | ⚠️ potencial de altura inconsistente     | Botones suelen tener altura uniforme; `stretch` puede estirar hijos     |

| `column` + `justifyContent: space-between`  | ⚠️ puede generar grandes gaps verticales | Si el botón es alto, el contenido se separa demasiado                   |

| `column` + icon lateral dentro label        | ⚠️ layout puede romperse                 | Mejor definir que iconos externos se manejen con `row`                  |

| `row` + `space-between` + icon lateral      | ✅ generalmente seguro                    | Solo hay que mantener padding interno mínimo                            |

| `baseline`                                  | ⚠️ revisar tipografías                   | Si el label tiene iconos + texto, baseline puede desalinear visualmente |

| `center` en ambos ejes                      | ✅ seguro                                 | Mantiene coherencia visual en la mayoría de casos                       |

| `flex-start`/`flex-end` en uno o ambos ejes | ✅ seguro, pero documentar                | Solo cambiará posición dentro del botón, sin romper layout              |



Algunas ideas para tu función de verificación inicial:

Detectar combinaciones conocidas como problemáticas

flex-direction: column + justify-content: space-between/space-around/space-evenly → puede generar gaps demasiado grandes

align-items: stretch → puede romper altura uniforme

Detectar combinaciones potencialmente problemáticas con iconos/texto

flex-direction: column + iconos dentro del label

baseline con iconos → puede desalinear visualmente

Reglas de fallback

Si detecta combinación de riesgo → aplicar center/center como default o lanzar warning de dev

Tipado + runtime check

TS tipa los valores permitidos de props → previene errores de sintaxis

La función runtime hace alerta temprana sobre incoherencias visuales, no solo errores de tipo



*/
import clsx from 'clsx';
import styles from './styles/SVG/svg.module.css';
import { styled } from "@mui/material/styles";


const StyledIcon = styled("svg")<{ }>(
  ({  }) => ({
    transition: "fill 0.15s ease, color 0.15s ease"
  })
);

const SVGPaths = 
(props: Omit<React.SVGProps<SVGSVGElement>, "children" | "ref"> 
    & { paths: React.SVGProps<SVGPathElement>[], ref?: React.Ref<SVGSVGElement>}) => {
  const { className,ref, color, fill, viewBox, paths, ...rest } = props;

  const composedClassName = clsx(styles.pmuiSVGSize, className);
  

  return (
    
    < StyledIcon  className={composedClassName} viewBox={viewBox} {...rest} color={color}  fill={fill} style={{ width: "100%", height: "100%" }} >
        {paths.map((p, i) => <path key={i} {...p} color={color} fill={fill}   />)}
      </ StyledIcon >
  );
}
export default SVGPaths;

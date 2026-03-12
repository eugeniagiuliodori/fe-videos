import clsx from 'clsx';
import styles from './styles/SVG/svg.module.css';
import { styled } from "@mui/material/styles";


const StyledIcon = styled("svg")<{ }>(
  ({  }) => ({
    transition: "fill 0.15s ease, color 0.15s ease"
  })
);

const SVGRects = 
(props: Omit<React.SVGProps<SVGSVGElement>, "children" | "ref"> 
    & { rects: React.SVGProps<SVGRectElement>[], ref?: React.Ref<SVGSVGElement>}) => {
  const { className, ref, fill, viewBox, rects,...rest } = props;

  const composedClassName = clsx(styles.pmuiSVGSize, className);
  

  return (
    <StyledIcon  className={composedClassName} viewBox={viewBox} fill={fill} {...rest}>
        {rects.map((r, i) => <rect key={i} {...r} />)}
    </StyledIcon >
  );
}
export default SVGRects;

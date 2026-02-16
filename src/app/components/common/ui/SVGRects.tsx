import clsx from 'clsx';
import styles from './styles_1/SVG.module.css';



const SVGRects = 
(props: Omit<React.SVGProps<SVGSVGElement>, "children" | "ref"> 
    & { rects: React.SVGProps<SVGRectElement>[], ref?: React.Ref<SVGSVGElement>}) => {
  const { className, ref, fill, viewBox, rects,...rest } = props;

  const composedClassName = clsx(styles.SVGSize, className);
  

  return (
    <svg className={composedClassName} viewBox={viewBox} fill={fill} {...rest}>
        {rects.map((r, i) => <rect key={i} {...r} />)}
    </svg>
  );
}
export default SVGRects;

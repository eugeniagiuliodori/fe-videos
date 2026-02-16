import clsx from 'clsx';
import styles from './styles_1/SVG.module.css';


const SVGPaths = 
(props: Omit<React.SVGProps<SVGSVGElement>, "children" | "ref"> 
    & { paths: React.SVGProps<SVGPathElement>[], ref?: React.Ref<SVGSVGElement>}) => {
  const { className, ref, fill, viewBox, paths, ...rest } = props;

  const composedClassName = clsx(styles.SVGSize, className);
  

  return (
    <svg className={composedClassName} viewBox={viewBox} fill={fill} {...rest}>
        {paths.map((p, i) => <path key={i} {...p} />)}
      </svg>
  );
}
export default SVGPaths;

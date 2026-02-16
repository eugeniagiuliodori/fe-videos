import clsx from 'clsx';



const SVGPaths = 
(props: Omit<React.SVGProps<SVGSVGElement>, "children" | "ref"> 
    & { paths: React.SVGProps<SVGPathElement>[], ref?: React.Ref<SVGSVGElement>}) => {
  const { className, ref, fill, viewBox, paths, ...rest } = props;

  const composedClassName = clsx(className);
  

  return (
    <svg className={composedClassName} viewBox={viewBox} fill={fill} {...rest}>
        {paths.map((p, i) => <path key={i} {...p} />)}
      </svg>
  );
}
export default SVGPaths;

import clsx from 'clsx';



const SVGRects = 
(props: Omit<React.SVGProps<SVGSVGElement>, "children" | "ref"> 
    & { rects: React.SVGProps<SVGRectElement>[], ref?: React.Ref<SVGSVGElement>}) => {
  const { className, ref, fill, viewBox, rects,...rest } = props;

  const composedClassName = clsx(className);
  

  return (
    <svg className={composedClassName} viewBox={viewBox} fill={fill} {...rest}>
        {rects.map((r, i) => <rect key={i} {...r} />)}
    </svg>
  );
}
export default SVGRects;

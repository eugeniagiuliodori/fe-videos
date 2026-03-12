import {StyledMenuItem} from "@/pages/components/videoGallery/video/control/components/MenuItem/StyledMenuItem"
import { MenuItemProps } from "@/components/common/core/MenuItem";

export const MenuItem = <T,>(props: MenuItemProps<T>) => {
  return <StyledMenuItem {...props} />
}
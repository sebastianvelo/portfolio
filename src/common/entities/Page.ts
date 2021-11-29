import { ViewProps } from "app/view/View";

interface Page extends ViewProps {
  route: string;
  className?: string;
}

export default Page;

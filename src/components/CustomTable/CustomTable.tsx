import { JSX } from "react";
import { ExtraProps } from "react-markdown";

export type TableProps = JSX.IntrinsicElements['table'] & ExtraProps
export const CustomMarkdownTable = ({ children, ...props }:TableProps) => {
  return (
    <table className="table table-striped table-bordered table-hover" {...props}>
        {children}
    </table>
  );
}

export default CustomMarkdownTable;

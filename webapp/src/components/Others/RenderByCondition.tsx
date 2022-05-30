import { ReactNode } from "react";

interface RenderByConditionProps {
    condition: boolean;
    children: ReactNode;
}


export function RenderByCondition({ condition, children }: RenderByConditionProps) {


    if (condition) {
        return (
            <>{children}</>
        );
    } else {
        return (
            <></>
        );
    }
}
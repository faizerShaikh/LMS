import { ReactNode } from "react"

interface IconWrapperProps {
    Icon: ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

const fontSizeMap = {
    'sm': '14px',
    'md': '16px',
    'lg': '18px',
    'xl': '20px',
}

export const IconWrapper = ({ Icon, size = 'md' }: IconWrapperProps) => {

    const styles = { fontSize: fontSizeMap[size] }
    return <></>
    // return <Icon styles={styles} />
} 
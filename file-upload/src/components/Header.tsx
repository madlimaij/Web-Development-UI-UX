import React from "react";

type HeaderProps = {
    title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return <h2>{title}</h2>;
}

export default Header;
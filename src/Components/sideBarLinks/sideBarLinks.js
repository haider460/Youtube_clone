export function SideBarLinks({ Icon, description, SideBar }) {
    return (
        <>
            {SideBar === false ? (
                <div className="nav_sidebars-icon ">
                    {Icon && <Icon className="sidebars-icon" />}
                    <p className="icon-text">{description && description}</p>
                </div>
            ) : (
                <div className="main__sidebar-list">
                    <div className="main__sidebar-list-icon">
                        {Icon && <Icon className="sidebars-icon" />}
                    </div>
                    <div className="main__sidebar-list-text">
                        {description && description}
                    </div>
                </div>
            )}
        </>
    );
}

export function MainSideBarWrapper({ children, SideBar }) {
    return (
        <div className={`main_sidebar  ${SideBar && "main_sidebar-active"}`}>
            {children}
        </div>
    );
}

export function SideBarWrapper({ children }) {
    return <div className="nav-sidebar">{children}</div>;
}

// React.propTypes = {
//     SideBar: PropTypes.bool,
//     description: PropTypes.string,
//     children: PropTypes.node.isRequired,
// };
